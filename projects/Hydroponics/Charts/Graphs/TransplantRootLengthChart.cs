using Hydroponics.Charts.Data;
using Hydroponics.Excel;
using Hydroponics.Interfaces;
using ScottPlot;

namespace Hydroponics.Charts.Graphs;

public class TransplantRootLengthChart : IChart
{
    private const string CHART_FILE_NAME = "transplant_root_growth_vs_fertilizer.png";
    private const string X_LABEL = "Fertilizer Added to Seeding Jar (g/L)";
    private const string Y_LABEL = "Root Growth (mm/day, seeding to transplant)";

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
            var color = palette.GetColor(si);

            var sp = plot.Add.ScatterPoints(group.XValue, group.YValue);
            sp.Color = color.WithAlpha(0.75);
            sp.MarkerSize = 9;
            sp.LegendText = $"{group.Seed} (n={group.Count})";
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
                gPerL = 0;
            }
            else if (totals.WaterML <= 0)
            {
                continue;
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
        Console.WriteLine($"  {"Seed",-24} {"n",3} {"mm/d mean",10} {"mm/d sd",8} {"g/L mean",10}");
        foreach (var group in points.GroupBy(p => p.Seed).OrderBy(g => g.Key).Select(g => new PointGroup(g.Key, g)))
        {
            Console.WriteLine($"  {group.Seed,-24} {group.Count,3} {group.Mean,10:0.##} {group.StdDev,8:0.##} {group.XMean,10:0.###}");
        }
    }
}
