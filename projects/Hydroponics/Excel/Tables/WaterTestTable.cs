using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Water/Water_Test table.
/// </summary>
public sealed record WaterTestRow
{
    /// <summary>Column "Alkalinity (as CaCO₃)".</summary>
    public double? AlkalinityAsCaCO3 { get; init; }
    /// <summary>Column "pH".</summary>
    public double? PH { get; init; }
    /// <summary>Column "EC (dS/m)".</summary>
    public double? ECDSPerM { get; init; }
    /// <summary>Column "Total N".</summary>
    public double? TotalN { get; init; }
    /// <summary>Column "Urea".</summary>
    public double? Urea { get; init; }
    /// <summary>Column "Ammonium-N".</summary>
    public double? AmmoniumN { get; init; }
    /// <summary>Column "Nitrate-N".</summary>
    public double? NitrateN { get; init; }
    /// <summary>Column "P".</summary>
    public double? P { get; init; }
    /// <summary>Column "K".</summary>
    public double? K { get; init; }
    /// <summary>Column "Ca".</summary>
    public double? Ca { get; init; }
    /// <summary>Column "Mg".</summary>
    public double? Mg { get; init; }
    /// <summary>Column "SO₄²⁻".</summary>
    public double? SO42 { get; init; }
    /// <summary>Column "B".</summary>
    public double? B { get; init; }
    /// <summary>Column "Cu".</summary>
    public double? Cu { get; init; }
    /// <summary>Column "Fe".</summary>
    public double? Fe { get; init; }
    /// <summary>Column "Mn".</summary>
    public double? Mn { get; init; }
    /// <summary>Column "Mo".</summary>
    public double? Mo { get; init; }
    /// <summary>Column "Zn".</summary>
    public double? Zn { get; init; }
    /// <summary>Column "Ni".</summary>
    public double? Ni { get; init; }
    /// <summary>Column "Cl".</summary>
    public double? Cl { get; init; }
    /// <summary>Column "Na".</summary>
    public double? Na { get; init; }
    /// <summary>Column "Si".</summary>
    public double? Si { get; init; }
    /// <summary>Column "Co".</summary>
    public double? Co { get; init; }
    /// <summary>Column "I".</summary>
    public double? I { get; init; }
    /// <summary>Column "Se".</summary>
    public double? Se { get; init; }
    /// <summary>Column "Al".</summary>
    public double? Al { get; init; }
}

/// <summary>
/// Source water test results. Sheet/Table: Water/Water_Test.
/// </summary>
public sealed class WaterTestTable : TableBase<WaterTestRow>
{
    public const string Key = "Water/Water_Test";

    public WaterTestTable(DataTable raw) : base(raw) { }

    protected override WaterTestRow Map(DataRow row) => new()
    {
        AlkalinityAsCaCO3 = Num(row, "Alkalinity (as CaCO₃)"),
        PH = Num(row, "pH"),
        ECDSPerM = Num(row, "EC (dS/m)"),
        TotalN = Num(row, "Total N"),
        Urea = Num(row, "Urea"),
        AmmoniumN = Num(row, "Ammonium-N"),
        NitrateN = Num(row, "Nitrate-N"),
        P = Num(row, "P"),
        K = Num(row, "K"),
        Ca = Num(row, "Ca"),
        Mg = Num(row, "Mg"),
        SO42 = Num(row, "SO₄²⁻"),
        B = Num(row, "B"),
        Cu = Num(row, "Cu"),
        Fe = Num(row, "Fe"),
        Mn = Num(row, "Mn"),
        Mo = Num(row, "Mo"),
        Zn = Num(row, "Zn"),
        Ni = Num(row, "Ni"),
        Cl = Num(row, "Cl"),
        Na = Num(row, "Na"),
        Si = Num(row, "Si"),
        Co = Num(row, "Co"),
        I = Num(row, "I"),
        Se = Num(row, "Se"),
        Al = Num(row, "Al"),
    };
}
