
namespace Hydroponics.Charts.Data;

/// <summary>
/// One plant: its plant type, fertilizer concentration and root growth rate.
/// </summary>
internal sealed record GroupedPoint(string Seed, double XValue, double YValue);
