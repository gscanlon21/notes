using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Storage/Storage table.
/// </summary>
public sealed record StorageRow
{
    /// <summary>Column "Key".</summary>
    public string? Key { get; init; }
    /// <summary>Column "Date Stored".</summary>
    public DateTime? DateStored { get; init; }
    /// <summary>Column "Washing Procedure".</summary>
    public string? WashingProcedure { get; init; }
    /// <summary>Column "Drying Procedure".</summary>
    public string? DryingProcedure { get; init; }
    /// <summary>Column "Storage Container".</summary>
    public string? StorageContainer { get; init; }
    /// <summary>Column "Storage Location".</summary>
    public string? StorageLocation { get; init; }
    /// <summary>Column "Distributed?".</summary>
    public bool? Distributed { get; init; }
    /// <summary>Column "Date First Wilted".</summary>
    public DateTime? DateFirstWilted { get; init; }
    /// <summary>Column "Date of Spoilage".</summary>
    public DateTime? DateOfSpoilage { get; init; }
    /// <summary>Column "Spoilage Reason".</summary>
    public string? SpoilageReason { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// Stored harvests. Sheet/Table: Storage/Storage.
/// </summary>
public sealed class StorageTable : TableBase<StorageRow>
{
    public const string Key = "Storage/Storage";

    public StorageTable(DataTable raw) : base(raw)
    {
    }

    protected override StorageRow Map(DataRow row) => new()
    {
        Key = Str(row, "Key"),
        DateStored = Date(row, "Date Stored"),
        WashingProcedure = Str(row, "Washing Procedure"),
        DryingProcedure = Str(row, "Drying Procedure"),
        StorageContainer = Str(row, "Storage Container"),
        StorageLocation = Str(row, "Storage Location"),
        Distributed = Bool(row, "Distributed?"),
        DateFirstWilted = Date(row, "Date First Wilted"),
        DateOfSpoilage = Date(row, "Date of Spoilage"),
        SpoilageReason = Str(row, "Spoilage Reason"),
        Notes = Str(row, "Notes"),
    };
}
