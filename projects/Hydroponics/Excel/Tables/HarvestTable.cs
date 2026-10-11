using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Harvest/Harvest table.
/// </summary>
public sealed record HarvestRow
{
    /// <summary>Column "Growing Jar".</summary>
    public string? GrowingJar { get; init; }
    /// <summary>Column "Storage Key".</summary>
    public string? StorageKey { get; init; }
    /// <summary>Column "Date Harvested".</summary>
    public DateTime? DateHarvested { get; init; }
    /// <summary>Column "Harvest Method".</summary>
    public string? HarvestMethod { get; init; }
    /// <summary>Column "Number of Leaves (+)".</summary>
    public double? NumberOfLeavesPlus { get; init; }
    /// <summary>Column "Number of Leaves (-)".</summary>
    public double? NumberOfLeavesMinus { get; init; }
    /// <summary>Column "Harvest Weight (g)".</summary>
    public double? HarvestWeightG { get; init; }
    /// <summary>Column "Distributed?".</summary>
    public bool? Distributed { get; init; }
    /// <summary>Column "Taste".</summary>
    public string? Taste { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// One row per harvest of a growing jar. Sheet/Table: Harvest/Harvest.
/// </summary>
public sealed class HarvestTable : TableBase<HarvestRow>
{
    public const string Key = "Harvest/Harvest";

    public HarvestTable(DataTable raw) : base(raw)
    {
    }

    protected override HarvestRow Map(DataRow row) => new()
    {
        GrowingJar = Str(row, "Growing Jar"),
        StorageKey = Str(row, "Storage Key"),
        DateHarvested = Date(row, "Date Harvested"),
        HarvestMethod = Str(row, "Harvest Method"),
        NumberOfLeavesPlus = Num(row, "Number of Leaves (+)"),
        NumberOfLeavesMinus = Num(row, "Number of Leaves (-)"),
        HarvestWeightG = Num(row, "Harvest Weight (g)"),
        Distributed = Bool(row, "Distributed?"),
        Taste = Str(row, "Taste"),
        Notes = Str(row, "Notes"),
    };
}
