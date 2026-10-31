using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Growing++/GrowingPlusPlus table.
/// </summary>
public sealed record GrowingMeasurementRow
{
    /// <summary>Column "Jar".</summary>
    public string? Jar { get; init; }
    /// <summary>Column "Date Measured".</summary>
    public DateTime? DateMeasured { get; init; }
    /// <summary>Column "Chlorophyll".</summary>
    public double? Chlorophyll { get; init; }
    /// <summary>Column "Chlorosis?".</summary>
    public bool? Chlorosis { get; init; }
    /// <summary>Column "Disease?".</summary>
    public bool? Disease { get; init; }
    /// <summary>Column "Treatment".</summary>
    public string? Treatment { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// Periodic plant health measurements. Sheet/Table: Growing++/GrowingPlusPlus.
/// </summary>
public sealed class GrowingMeasurementsTable : TableBase<GrowingMeasurementRow>
{
    public const string Key = "Growing++/GrowingPlusPlus";

    public GrowingMeasurementsTable(DataTable raw) : base(raw)
    {
    }

    protected override GrowingMeasurementRow Map(DataRow row) => new()
    {
        Jar = Str(row, "Jar"),
        DateMeasured = Date(row, "Date Measured"),
        Chlorophyll = Num(row, "Chlorophyll"),
        Chlorosis = Bool(row, "Chlorosis?"),
        Disease = Bool(row, "Disease?"),
        Treatment = Str(row, "Treatment"),
        Notes = Str(row, "Notes"),
    };
}
