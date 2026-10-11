using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Temperature/Temp table.
/// </summary>
public sealed record TemperatureRow
{
    /// <summary>Column "Jar".</summary>
    public string? Jar { get; init; }
    /// <summary>Column "Jar Exterior".</summary>
    public string? JarExterior { get; init; }
    /// <summary>Column "Jar Shade".</summary>
    public string? JarShade { get; init; }
    /// <summary>Column "Date".</summary>
    public DateTime? Date { get; init; }
    /// <summary>Column "Time".</summary>
    public string? Time { get; init; }
    /// <summary>Column "Temp (°C)".</summary>
    public double? TempC { get; init; }
    /// <summary>Column "Outdoor Temp (°F)".</summary>
    public double? OutdoorTempF { get; init; }
    /// <summary>Column "Outdoor Weather".</summary>
    public string? OutdoorWeather { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// Temperature readings. Sheet/Table: Temperature/Temp.
/// </summary>
public sealed class TemperatureTable : TableBase<TemperatureRow>
{
    public const string Key = "Temperature/Temp";

    public TemperatureTable(DataTable raw) : base(raw) { }

    protected override TemperatureRow Map(DataRow row) => new()
    {
        Jar = Str(row, "Jar"),
        JarExterior = Str(row, "Jar Exterior"),
        JarShade = Str(row, "Jar Shade"),
        Date = Date(row, "Date"),
        Time = Str(row, "Time"),
        TempC = Num(row, "Temp (°C)"),
        OutdoorTempF = Num(row, "Outdoor Temp (°F)"),
        OutdoorWeather = Str(row, "Outdoor Weather"),
        Notes = Str(row, "Notes"),
    };
}
