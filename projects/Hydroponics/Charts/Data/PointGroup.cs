
namespace Hydroponics.Charts.Data;

internal sealed class PointGroup
{
    public PointGroup(string seed, IEnumerable<GroupedPoint> points)
    {
        Seed = seed;
        Points = points.ToList();
        XValue = Points.Select(p => p.XValue).ToArray();
        YValue = Points.Select(p => p.YValue).ToArray();

        Mean = YValue.Average();
        XMean = XValue.Average();

        StdDev = YValue.Length > 1
            ? Math.Sqrt(YValue.Sum(v => (v - Mean) * (v - Mean)) / (YValue.Length - 1))
            : 0;
    }

    public string Seed { get; }

    public List<GroupedPoint> Points { get; }

    public int Count => Points.Count;

    public double[] XValue { get; }

    public double[] YValue { get; }

    public double Mean { get; }

    public double StdDev { get; }

    public double XMean { get; }
}
