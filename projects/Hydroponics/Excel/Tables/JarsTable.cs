using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Jars/Jars table.
/// </summary>
public sealed record JarRow
{
    /// <summary>Column "Jar".</summary>
    public string? Jar { get; init; }
    /// <summary>Column "Jar Type".</summary>
    public string? JarType { get; init; }
    /// <summary>Column "Jar Name".</summary>
    public string? JarName { get; init; }
    /// <summary>Column "Jar Purpose".</summary>
    public string? JarPurpose { get; init; }
    /// <summary>Column "Jar Size (mL)".</summary>
    public double? JarSizeML { get; init; }
    /// <summary>Column "Autoclaved".</summary>
    public bool? Autoclaved { get; init; }
    /// <summary>Column "Date Made".</summary>
    public DateTime? DateMade { get; init; }
    /// <summary>Column "Expected Water (min, mL)".</summary>
    public double? ExpectedWaterMinML { get; init; }
    /// <summary>Column "Expected Water (max, mL)".</summary>
    public double? ExpectedWaterMaxML { get; init; }
    /// <summary>Column "pH Procedure".</summary>
    public string? PHProcedure { get; init; }
    /// <summary>Column "Initial pH".</summary>
    public double? InitialPH { get; init; }
    /// <summary>Column "Initial EC (μS)".</summary>
    public double? InitialECUS { get; init; }
    /// <summary>Column "Growing Status".</summary>
    public string? GrowingStatus { get; init; }
    /// <summary>Column "Final pH".</summary>
    public double? FinalPH { get; init; }
    /// <summary>Column "Final EC (μS/cm)".</summary>
    public double? FinalECUSPerCm { get; init; }
    /// <summary>Column "Water Added?".</summary>
    public string? WaterAdded { get; init; }
    /// <summary>Column "Total Water Added (mL)".</summary>
    public double? TotalWaterAddedML { get; init; }
    /// <summary>Column "Exterior".</summary>
    public string? Exterior { get; init; }
    /// <summary>Column "Shade".</summary>
    public string? Shade { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// Physical jars. Sheet/Table: Jars/Jars.
/// </summary>
public sealed class JarsTable : TableBase<JarRow>
{
    public const string Key = "Jars/Jars";

    public JarsTable(DataTable raw) : base(raw)
    {
    }

    protected override JarRow Map(DataRow row) => new()
    {
        Jar = Str(row, "Jar"),
        JarType = Str(row, "Jar Type"),
        JarName = Str(row, "Jar Name"),
        JarPurpose = Str(row, "Jar Purpose"),
        JarSizeML = Num(row, "Jar Size (mL)"),
        Autoclaved = Bool(row, "Autoclaved"),
        DateMade = Date(row, "Date Made"),
        ExpectedWaterMinML = Num(row, "Expected Water (min, mL)"),
        ExpectedWaterMaxML = Num(row, "Expected Water (max, mL)"),
        PHProcedure = Str(row, "pH Procedure"),
        InitialPH = Num(row, "Initial pH"),
        InitialECUS = Num(row, "Initial EC (μS)"),
        GrowingStatus = Str(row, "Growing Status"),
        FinalPH = Num(row, "Final pH"),
        FinalECUSPerCm = Num(row, "Final EC (μS/cm)"),
        WaterAdded = Str(row, "Water Added?"),
        TotalWaterAddedML = Num(row, "Total Water Added (mL)"),
        Exterior = Str(row, "Exterior"),
        Shade = Str(row, "Shade"),
        Notes = Str(row, "Notes"),
    };
}
