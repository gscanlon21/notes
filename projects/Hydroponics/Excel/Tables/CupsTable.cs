using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Cups/Cups table.
/// </summary>
public sealed record CupRow
{
    /// <summary>Column "Id".</summary>
    public string? Id { get; init; }
    /// <summary>Column "Date Made".</summary>
    public DateTime? DateMade { get; init; }
    /// <summary>Column "Net Cup (in)".</summary>
    public double? NetCupIn { get; init; }
    /// <summary>Column "Autoclaved Cup".</summary>
    public bool? AutoclavedCup { get; init; }
    /// <summary>Column "Growing Medium".</summary>
    public string? GrowingMedium { get; init; }
    /// <summary>Column "Autoclaved Medium".</summary>
    public bool? AutoclavedMedium { get; init; }
    /// <summary>Column "Date Seeded".</summary>
    public DateTime? DateSeeded { get; init; }
    /// <summary>Column "Seed".</summary>
    public string? Seed { get; init; }
    /// <summary>Column "Scarification Procedure".</summary>
    public string? ScarificationProcedure { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// Net cups. Sheet/Table: Cups/Cups.
/// </summary>
public sealed class CupsTable : TableBase<CupRow>
{
    public const string Key = "Cups/Cups";

    public CupsTable(DataTable raw) : base(raw)
    {
    }

    protected override CupRow Map(DataRow row) => new()
    {
        Id = Str(row, "Id"),
        DateMade = Date(row, "Date Made"),
        NetCupIn = Num(row, "Net Cup (in)"),
        AutoclavedCup = Bool(row, "Autoclaved Cup"),
        GrowingMedium = Str(row, "Growing Medium"),
        AutoclavedMedium = Bool(row, "Autoclaved Medium"),
        DateSeeded = Date(row, "Date Seeded"),
        Seed = Str(row, "Seed"),
        ScarificationProcedure = Str(row, "Scarification Procedure"),
        Notes = Str(row, "Notes"),
    };
}
