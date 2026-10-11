using Hydroponics.Excel;
using Hydroponics.Interfaces;
using ScottPlot;

namespace Hydroponics.Charts;

/// <summary>
/// Distribution of harvest leaf counts, one bar series per plant type.
/// Harvest."Growing Jar" -> Growing."Growing Jar" -> plant type.
/// Bars are % of that plant type's harvests so groups of different size are comparable.
/// </summary>
public class HarvestLeavesChart : IChart
{
    public string Name => "Harvest leaves by plant type";

    public string? Render(HydroponicsData data, string outDir)
    {
        var leaves = CollectLeaves(data);
        PrintSummary(leaves);
        if (leaves.Count == 0)
        {
            return null;
        }

        var palette = new ScottPlot.Palettes.Category10();
        var seeds = leaves.Select(o => o.Seed).Distinct().OrderBy(s => s).ToList();

        double min = leaves.Min(o => o.Value), max = leaves.Max(o => o.Value);
        int bins = Math.Clamp((int)Math.Ceiling(Math.Sqrt(leaves.Count)), 3, 12);
        if (max - min < 1e-9) 
        { 
            min -= 0.5; max += 0.5; bins = 1; 
        }

        double width = (max - min) / bins;
        double barW = width / (seeds.Count + 1);

        var plot = new Plot();
        for (int si = 0; si < seeds.Count; si++)
        {
            var vals = leaves.Where(o => o.Seed == seeds[si]).Select(o => o.Value).ToArray();
            var counts = new double[bins];
            foreach (var v in vals)
            {
                counts[Math.Min(bins - 1, (int)((v - min) / width))]++;
            }

            var bars = counts.Select((c, i) => new Bar
            {
                Position = min + width * (i + 0.5) + (si - (seeds.Count - 1) / 2.0) * barW,
                Value = 100.0 * c / vals.Length,
                Size = barW * 0.95,
                FillColor = palette.GetColor(si),
            }).ToList();

            var bp = plot.Add.Bars(bars);
            bp.LegendText = $"{seeds[si]} (n={vals.Length})";
        }

        plot.Title(Name);
        plot.XLabel("Number of leaves harvested");
        plot.YLabel("% of plant type's harvests");
        plot.Axes.Margins(bottom: 0);
        plot.ShowLegend();

        string file = Path.Combine(outDir, "harvest_leaves_by_plant_type.png");
        plot.SavePng(file, 1000, 600);
        return file;
    }

    private static List<(string Seed, double Value)> CollectLeaves(HydroponicsData data)
    {
        var leaves = new List<(string Seed, double Value)>();
        foreach (var harvest in data.Harvest)
        {
            if (harvest.GrowingJar == null || !data.TryGetSeedByGrowingJar(harvest.GrowingJar, out var seed))
            {
                continue;
            }

            if (harvest.NumberOfLeavesPlus.HasValue)
            {
                leaves.Add((seed, harvest.NumberOfLeavesPlus.Value));
            }
        }

        return leaves;
    }

    private static void PrintSummary(List<(string Seed, double Value)> leaves)
    {
        Console.WriteLine($"{leaves.Count} harvests with a leaf count");
        Console.WriteLine($"  {"Seed",-24} {"n",3} {"mean",9} {"sd",8} {"min",9} {"max",9}");
        foreach (var sg in leaves.GroupBy(o => o.Seed).OrderBy(g => g.Key))
        {
            var vals = sg.Select(x => x.Value).ToArray();

            double mean = vals.Average();
            double sd = vals.Length > 1 ? Math.Sqrt(vals.Sum(x => (x - mean) * (x - mean)) / (vals.Length - 1)) : 0;
            Console.WriteLine($"  {sg.Key,-24} {vals.Length,3} {mean,9:0.##} {sd,8:0.##} {vals.Min(),9:0.##} {vals.Max(),9:0.##}");
        }
    }
}
