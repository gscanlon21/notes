using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Fertilizers/Fertilizers table.
/// </summary>
public sealed record FertilizerRow
{
    /// <summary>Column "Fertilizer".</summary>
    public string? Fertilizer { get; init; }
    /// <summary>Column "Updated".</summary>
    public DateTime? Updated { get; init; }
    /// <summary>Column "Name".</summary>
    public string? Name { get; init; }
    /// <summary>Column "Chemical Formula".</summary>
    public string? ChemicalFormula { get; init; }
    /// <summary>Column "Signal Word".</summary>
    public string? SignalWord { get; init; }
    /// <summary>Column "Hazard Statements".</summary>
    public string? HazardStatements { get; init; }
    /// <summary>Column "Molar Mass (g/mol)".</summary>
    public double? MolarMassGPerMol { get; init; }
    /// <summary>Column "N (%)".</summary>
    public double? NPercent { get; init; }
    /// <summary>Column "P (%)".</summary>
    public double? PPercent { get; init; }
    /// <summary>Column "K (%)".</summary>
    public double? KPercent { get; init; }
    /// <summary>Column "NO₃ (%)".</summary>
    public double? NO3Percent { get; init; }
    /// <summary>Column "C:NH₄ (%)".</summary>
    public double? CNH4Percent { get; init; }
    /// <summary>Column "Total N (%)".</summary>
    public double? TotalNPercent { get; init; }
    /// <summary>Column "NO₃ (%/N)".</summary>
    public double? NO3PercentPerN { get; init; }
    /// <summary>Column "NH₄ (%/N)".</summary>
    public double? NH4PercentPerN { get; init; }
    /// <summary>Column "CO(NH₂)₂ (%/N)".</summary>
    public double? CONH22PercentPerN { get; init; }
    /// <summary>Column "P₂O₅ (%)".</summary>
    public double? P2O5Percent { get; init; }
    /// <summary>Column "K₂O (%)".</summary>
    public double? K2OPercent { get; init; }
    /// <summary>Column "Ca (%)".</summary>
    public double? CaPercent { get; init; }
    /// <summary>Column "Mg (%)".</summary>
    public double? MgPercent { get; init; }
    /// <summary>Column "S (%)".</summary>
    public double? SPercent { get; init; }
    /// <summary>Column "B (%)".</summary>
    public double? BPercent { get; init; }
    /// <summary>Column "Cu (%)".</summary>
    public double? CuPercent { get; init; }
    /// <summary>Column "Fe (%)".</summary>
    public double? FePercent { get; init; }
    /// <summary>Column "Mn (%)".</summary>
    public double? MnPercent { get; init; }
    /// <summary>Column "Mo (%)".</summary>
    public double? MoPercent { get; init; }
    /// <summary>Column "Zn (%)".</summary>
    public double? ZnPercent { get; init; }
    /// <summary>Column "Ni (%)".</summary>
    public double? NiPercent { get; init; }
    /// <summary>Column "Cl (%)".</summary>
    public double? ClPercent { get; init; }
    /// <summary>Column "Na (%)".</summary>
    public double? NaPercent { get; init; }
    /// <summary>Column "Si (%)".</summary>
    public double? SiPercent { get; init; }
    /// <summary>Column "Co (%)".</summary>
    public double? CoPercent { get; init; }
    /// <summary>Column "I (%)".</summary>
    public double? IPercent { get; init; }
    /// <summary>Column "Se (%)".</summary>
    public double? SePercent { get; init; }
    /// <summary>Column "Al (%)".</summary>
    public double? AlPercent { get; init; }
}

/// <summary>
/// Fertilizer composition. Sheet/Table: Fertilizers/Fertilizers.
/// </summary>
public sealed class FertilizersTable : TableBase<FertilizerRow>
{
    public const string Key = "Fertilizers/Fertilizers";

    public FertilizersTable(DataTable raw) : base(raw)
    {
    }

    protected override FertilizerRow Map(DataRow row) => new()
    {
        Fertilizer = Str(row, "Fertilizer"),
        Updated = Date(row, "Updated"),
        Name = Str(row, "Name"),
        ChemicalFormula = Str(row, "Chemical Formula"),
        SignalWord = Str(row, "Signal Word"),
        HazardStatements = Str(row, "Hazard Statements"),
        MolarMassGPerMol = Num(row, "Molar Mass (g/mol)"),
        NPercent = Num(row, "N (%)"),
        PPercent = Num(row, "P (%)"),
        KPercent = Num(row, "K (%)"),
        NO3Percent = Num(row, "NO₃ (%)"),
        CNH4Percent = Num(row, "C:NH₄ (%)"),
        TotalNPercent = Num(row, "Total N (%)"),
        NO3PercentPerN = Num(row, "NO₃ (%/N)"),
        NH4PercentPerN = Num(row, "NH₄ (%/N)"),
        CONH22PercentPerN = Num(row, "CO(NH₂)₂ (%/N)"),
        P2O5Percent = Num(row, "P₂O₅ (%)"),
        K2OPercent = Num(row, "K₂O (%)"),
        CaPercent = Num(row, "Ca (%)"),
        MgPercent = Num(row, "Mg (%)"),
        SPercent = Num(row, "S (%)"),
        BPercent = Num(row, "B (%)"),
        CuPercent = Num(row, "Cu (%)"),
        FePercent = Num(row, "Fe (%)"),
        MnPercent = Num(row, "Mn (%)"),
        MoPercent = Num(row, "Mo (%)"),
        ZnPercent = Num(row, "Zn (%)"),
        NiPercent = Num(row, "Ni (%)"),
        ClPercent = Num(row, "Cl (%)"),
        NaPercent = Num(row, "Na (%)"),
        SiPercent = Num(row, "Si (%)"),
        CoPercent = Num(row, "Co (%)"),
        IPercent = Num(row, "I (%)"),
        SePercent = Num(row, "Se (%)"),
        AlPercent = Num(row, "Al (%)"),
    };
}
