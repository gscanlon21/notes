using Hydroponics.Excel;

namespace Hydroponics.Interfaces;

/// <summary>
/// Register chart classes in Program.cs
/// </summary>
public interface IChart
{
    /// <summary>
    /// Display name.
    /// </summary>
    string Name { get; }

    /// <summary>
    /// Draws the chart into outDir.
    /// </summary>
    /// <returns>The saved file path, or null if there was nothing to plot.</returns>
    string? Render(HydroponicsData data, string outDir);
}
