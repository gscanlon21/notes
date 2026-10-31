using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Seeds/Seeds table.
/// </summary>
public sealed record SeedRow
{
    /// <summary>Column "Seed".</summary>
    public string? Seed { get; init; }
    /// <summary>Column "Scientific Name".</summary>
    public string? ScientificName { get; init; }
    /// <summary>Column "Common Name".</summary>
    public string? CommonName { get; init; }
    /// <summary>Column "Brand Name".</summary>
    public string? BrandName { get; init; }
    /// <summary>Column "Variety".</summary>
    public string? Variety { get; init; }
    /// <summary>Column "Color".</summary>
    public string? Color { get; init; }
    /// <summary>Column "Type".</summary>
    public string? Type { get; init; }
    /// <summary>Column "QC Testing Designation".</summary>
    public string? QCTestingDesignation { get; init; }
    /// <summary>Column "Organic".</summary>
    public string? Organic { get; init; }
    /// <summary>Column "Pelleted".</summary>
    public string? Pelleted { get; init; }
    /// <summary>Column "Days Until Germination (min)".</summary>
    public double? DaysUntilGerminationMin { get; init; }
    /// <summary>Column "Days Until Germination (max)".</summary>
    public double? DaysUntilGerminationMax { get; init; }
    /// <summary>Column "Days Until Maturity".</summary>
    public double? DaysUntilMaturity { get; init; }
    /// <summary>Column "Disease Resistance".</summary>
    public string? DiseaseResistance { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
    /// <summary>Column "Link".</summary>
    public string? Link { get; init; }
}

/// <summary>
/// Seed catalogue. Sheet/Table: Seeds/Seeds.
/// </summary>
public sealed class SeedsTable : TableBase<SeedRow>
{
    public const string Key = "Seeds/Seeds";

    public SeedsTable(DataTable raw) : base(raw)
    {
    }

    protected override SeedRow Map(DataRow row) => new()
    {
        Seed = Str(row, "Seed"),
        ScientificName = Str(row, "Scientific Name"),
        CommonName = Str(row, "Common Name"),
        BrandName = Str(row, "Brand Name"),
        Variety = Str(row, "Variety"),
        Color = Str(row, "Color"),
        Type = Str(row, "Type"),
        QCTestingDesignation = Str(row, "QC Testing Designation"),
        Organic = Str(row, "Organic"),
        Pelleted = Str(row, "Pelleted"),
        DaysUntilGerminationMin = Num(row, "Days Until Germination (min)"),
        DaysUntilGerminationMax = Num(row, "Days Until Germination (max)"),
        DaysUntilMaturity = Num(row, "Days Until Maturity"),
        DiseaseResistance = Str(row, "Disease Resistance"),
        Notes = Str(row, "Notes"),
        Link = Str(row, "Link"),
    };
}
