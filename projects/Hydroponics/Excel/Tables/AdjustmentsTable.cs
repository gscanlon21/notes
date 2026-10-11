using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// Per-crop adjustments to a nutrient solution. Sheet/Table: Nutrients/Adjustments.
/// </summary>
public sealed class AdjustmentsTable : TableBase<AdjustmentRow>
{
    public const string Key = "Nutrients/Adjustments";

    public AdjustmentsTable(DataTable raw) : base(raw) { }

    protected override AdjustmentRow Map(DataRow row) => new()
    {
        For = Str(row, "For"),
        Nutrient = Str(row, "Nutrient"),
        AdjustBy = Num(row, "Adjust By"),
        Notes = Str(row, "Notes"),
        Source = Str(row, "Source"),
    };
}

/// <summary>
/// One row of the Nutrients/Adjustments table.
/// </summary>
public sealed record AdjustmentRow
{
    /// <summary>Column "For".</summary>
    public string? For { get; init; }

    /// <summary>Column "Nutrient".</summary>
    public string? Nutrient { get; init; }

    /// <summary>Column "Adjust By".</summary>
    public double? AdjustBy { get; init; }

    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }

    /// <summary>Column "Source".</summary>
    public string? Source { get; init; }
}