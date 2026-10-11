using Hydroponics.Charts.Data;
using Hydroponics.Excel;
using Hydroponics.Helpers;
using Hydroponics.Interfaces;
using MathNet.Numerics.LinearAlgebra;
using MathNet.Numerics.Optimization;
using ScottPlot;

namespace Hydroponics.Charts.Graphs;

/// <summary>
/// Root growth rate vs. fertilizer concentration, one scatter series per plant type, each with
/// a Weibull-type curve with a baseline: y = y0 + A * (1 - exp(-k * x^2)), x >= 0, fitted with
/// Math.NET's Levenberg-Marquardt minimizer (equation and R² in the legend).
/// Y: Growing."Transplant Root Length (mm)" divided by the days from "Date Seeded" to
/// "Transplant Date". X: grams of fertilizer added to the plant's seeding jar per litre of
/// water added to that jar (JarAdditions, summed over all rows; a trailing "*" on the seeding
/// jar id, which marks a reused jar, is ignored). Seeding jars with no fertilizer plot at x = 0.
/// </summary>
public class TransplantRootLengthChart : IChart
{
    private const string CHART_FILE_NAME = "transplant_root_growth_vs_fertilizer.png";
    private const string X_LABEL = "Fertilizer Added to Seeding Jar (g/L)";
    private const string Y_LABEL = "Root Growth (mm/day, seeding to transplant)";
    private const int CURVE_POINTS = 200;
    private const int MIN_POINTS = 4;

    public string Name => "Root Growth Rate vs Fertilizer Added";

    public string? Render(HydroponicsData data, string outDir)
    {
        var points = CollectPoints(data);
        PrintSummary(points);
        if (points.Count == 0)
        {
            return null;
        }

        var palette = new ScottPlot.Palettes.Category10();
        var groups = points
            .GroupBy(p => p.Seed)
            .OrderBy(g => g.Key)
            .Select(g => new PointGroup(g.Key, g))
            .ToList();

        var plot = new Plot();
        for (int si = 0; si < groups.Count; si++)
        {
            var group = groups[si];
            var xs = group.XValue;
            var ys = group.YValue;
            var color = palette.GetColor(si);

            var sp = plot.Add.ScatterPoints(xs, ys);
            sp.Color = color.WithAlpha(0.75);
            sp.MarkerSize = 9;
            sp.LegendText = $"{group.Seed} (n={group.Count})";

            if (WeibullFit(xs, ys) is { } fit)
            {
                // Draw from x = 0 so the baseline growth is visible.
                double xMax = xs.Max();
                var cx = new double[CURVE_POINTS];
                var cy = new double[CURVE_POINTS];
                for (int i = 0; i < CURVE_POINTS; i++)
                {
                    cx[i] = xMax * i / (CURVE_POINTS - 1);
                    cy[i] = fit.Y0 + fit.A * (1 - Math.Exp(-fit.K * cx[i] * cx[i]));
                }

                var curve = plot.Add.Scatter(cx, cy);
                curve.Color = color;
                curve.MarkerSize = 0;
                curve.LineWidth = 2;
                curve.LegendText = $"{FormatEquation(fit)},  R² = {fit.R2:0.00}";
            }
        }

        plot.Title(Name);
        plot.XLabel(X_LABEL);
        plot.YLabel(Y_LABEL);
        plot.Axes.Margins(bottom: 0, left: 0.05);
        plot.ShowLegend(Edge.Bottom);

        string file = Path.Combine(outDir, CHART_FILE_NAME);
        plot.SavePng(file, 1000, 600);
        return file;
    }

    private static List<GroupedPoint> CollectPoints(HydroponicsData data)
    {
        // Per jar: total fertilizer (g) and total water (mL) across all addition rows.
        // A trailing "*" marks a reused jar ("23*" is jar 23), so it is stripped for matching.
        var totalsByJar = data.JarAdditions
            .Where(a => a.Jar != null)
            .GroupBy(a => a.Jar!.TrimEnd('*'))
            .ToDictionary(g => g.Key, g =>
            {
                return (FertilizerG: g.Sum(a => a.FertilizerAddedG ?? 0), WaterML: g.Sum(a => a.WaterAddedML ?? 0));
            });

        var points = new List<GroupedPoint>();
        foreach (var row in data.Growing)
        {
            // "Unknown" or blank root lengths read as null and are skipped.
            if (!row.TransplantRootLengthMm.HasValue || row.SeedingJar == null)
            {
                continue;
            }

            if (!row.DateSeeded.HasValue || !row.TransplantDate.HasValue)
            {
                continue;
            }

            double days = (row.TransplantDate.Value - row.DateSeeded.Value).TotalDays;
            if (days <= 0)
            {
                continue;
            }

            double gPerL;
            if (!totalsByJar.TryGetValue(row.SeedingJar.TrimEnd('*'), out var totals) || totals.FertilizerG <= 0)
            {
                gPerL = 0; // no fertilizer added: plot at x = 0
            }
            else if (totals.WaterML <= 0)
            {
                continue; // fertilizer but no water volume: can't normalize
            }
            else
            {
                gPerL = totals.FertilizerG / (totals.WaterML / 1000.0);
            }

            points.Add(new GroupedPoint(data.SeedOf(row), gPerL, row.TransplantRootLengthMm.Value / days));
        }

        return points;
    }

    private static void PrintSummary(List<GroupedPoint> points)
    {
        Console.WriteLine($"{points.Count} plants with a root growth rate ({points.Count(p => p.XValue == 0)} with no fertilizer)");
        Console.WriteLine($"  {"Seed",-24} {"n",3} {"mm/d mean",10} {"mm/d sd",8} {"g/L mean",10} {"y0",8} {"A",8} {"k",8} {"R²",6}");
        foreach (var group in points.GroupBy(p => p.Seed).OrderBy(g => g.Key).Select(g => new PointGroup(g.Key, g)))
        {
            string y0 = "n/a", a = "n/a", k = "n/a", r2 = "n/a";
            if (WeibullFit(group.XValue, group.YValue) is { } fit)
            {
                y0 = fit.Y0.ToString("0.###");
                a = fit.A.ToString("0.###");
                k = fit.K.ToString("0.###");
                r2 = fit.R2.ToString("0.00");
            }

            Console.WriteLine($"  {group.Seed,-24} {group.Count,3} {group.Mean,10:0.##} {group.StdDev,8:0.##} {group.XMean,10:0.###} {y0,8} {a,8} {k,8} {r2,6}");
        }
    }

    /// <summary>
    /// Fits y = Y0 + A * (1 - exp(-K * x^2)) with Math.NET's bounded Levenberg-Marquardt
    /// minimizer. For conditioning, x is divided by its maximum and the fitted parameter is
    /// u = K * xMax^2 (so K = u / xMax^2). Bounds: Y0 in [0, max y], A in [1e-6, 10 * max y],
    /// u in [1e-3, 1e3].
    /// Levenberg-Marquardt is a local optimizer, so it is started from several values of u
    /// and the lowest-SSE result is kept.
    /// Returns null with fewer than four points (three parameters), negative x, no spread in x
    /// or y, or when no start produces a rising curve (A above its lower bound).
    /// R² = 1 - SSres/SStot, which can be negative if the curve fits worse than the mean.
    /// </summary>
    private static (double Y0, double A, double K, double R2)? WeibullFit(double[] xs, double[] ys)
    {
        if (xs.Length < MIN_POINTS || xs.Any(x => x < 0))
        {
            return null;
        }

        double xMax = xs.Max();
        double my = ys.Average();
        double ssTot = ys.Sum(y => (y - my) * (y - my));
        if (xMax < 1e-12 || xMax - xs.Min() < 1e-12 || ssTot < 1e-12)
        {
            return null;
        }

        double yMin = ys.Min(), yMax = ys.Max();
        double aLower = 1e-6;

        var builder = Vector<double>.Build;
        var xNorm = builder.DenseOfArray(xs.Select(x => x / xMax).ToArray());
        var yObs = builder.DenseOfArray(ys);

        // p = [y0, A, u]; model in normalized x.
        static double Eval(double y0, double a, double u, double t) => y0 + a * (1 - Math.Exp(-u * t * t));

        Vector<double> Model(Vector<double> p, Vector<double> t) =>
            t.Map(ti => Eval(p[0], p[1], p[2], ti));

        var lower = builder.DenseOfArray([0.0, aLower, 1e-3]);
        var upper = builder.DenseOfArray([yMax, 10 * yMax, 1e3]);

        (double Y0, double A, double U, double Sse)? best = null;
        foreach (double u0 in new[] { 0.3, 1, 3, 10, 30 })
        {
            try
            {
                var objective = ObjectiveFunction.NonlinearModel(Model, xNorm, yObs);
                var initial = builder.DenseOfArray([yMin, Math.Max(yMax - yMin, 1e-3), u0]);

                var result = new LevenbergMarquardtMinimizer().FindMinimum(objective, initial, lower, upper);
                var p = result.MinimizingPoint;
                double y0 = p[0], a = p[1], u = p[2];

                double sse = 0;
                for (int i = 0; i < xNorm.Count; i++)
                {
                    double e = ys[i] - Eval(y0, a, u, xNorm[i]);
                    sse += e * e;
                }

                if (double.IsFinite(sse) && a > aLower * 1.01 && (best == null || sse < best.Value.Sse))
                {
                    best = (y0, a, u, sse);
                }
            }
            catch (Exception)
            {
                // Minimizer failed from this start; try the next one.
            }
        }

        if (best is not { } b)
        {
            return null;
        }

        return (b.Y0, b.A, b.U / (xMax * xMax), 1 - b.Sse / ssTot);
    }

    private static string FormatEquation((double Y0, double A, double K, double R2) fit) =>
        $"y = {fit.Y0:0.###} + {fit.A:0.###}(1 - e^(-{fit.K:0.###}x²))";
}