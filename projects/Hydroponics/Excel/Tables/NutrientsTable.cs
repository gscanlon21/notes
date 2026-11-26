using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Nutrients/Nutrients table.
/// </summary>
public sealed record NutrientRow
{
    /// <summary>Column "For".</summary>
    public string? For { get; init; }
    /// <summary>Column "Solution".</summary>
    public string? Solution { get; init; }
    /// <summary>Column "Season".</summary>
    public string? Season { get; init; }
    /// <summary>Column "Active".</summary>
    public bool? Active { get; init; }
    /// <summary>Column "EC (min)".</summary>
    public double? ECMin { get; init; }
    /// <summary>Column "EC (max)".</summary>
    public double? ECMax { get; init; }
    /// <summary>Column "pH (min)".</summary>
    public double? PHMin { get; init; }
    /// <summary>Column "pH (max)".</summary>
    public double? PHMax { get; init; }
    /// <summary>Column "N".</summary>
    public double? N { get; init; }
    /// <summary>Column "P".</summary>
    public double? P { get; init; }
    /// <summary>Column "K".</summary>
    public double? K { get; init; }
    /// <summary>Column "Ca".</summary>
    public double? Ca { get; init; }
    /// <summary>Column "Mg".</summary>
    public double? Mg { get; init; }
    /// <summary>Column "S".</summary>
    public double? S { get; init; }
    /// <summary>Column "Fe".</summary>
    public double? Fe { get; init; }
    /// <summary>Column "Mn".</summary>
    public double? Mn { get; init; }
    /// <summary>Column "Zn".</summary>
    public double? Zn { get; init; }
    /// <summary>Column "B".</summary>
    public double? B { get; init; }
    /// <summary>Column "Cu".</summary>
    public double? Cu { get; init; }
    /// <summary>Column "Mo".</summary>
    public double? Mo { get; init; }
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
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// Per-crop nutrient targets. Sheet/Table: Nutrients/Nutrients.
/// </summary>
public sealed class NutrientsTable : TableBase<NutrientRow>
{
    public const string Key = "Nutrients/Nutrients";

    public NutrientsTable(DataTable raw) : base(raw)
    {
    }

    protected override NutrientRow Map(DataRow row) => new()
    {
        For = Str(row, "For"),
        Solution = Str(row, "Solution"),
        Season = Str(row, "Season"),
        Active = Bool(row, "Active"),
        ECMin = Num(row, "EC (min)"),
        ECMax = Num(row, "EC (max)"),
        PHMin = Num(row, "pH (min)"),
        PHMax = Num(row, "pH (max)"),
        N = Num(row, "N"),
        P = Num(row, "P"),
        K = Num(row, "K"),
        Ca = Num(row, "Ca"),
        Mg = Num(row, "Mg"),
        S = Num(row, "S"),
        Fe = Num(row, "Fe"),
        Mn = Num(row, "Mn"),
        Zn = Num(row, "Zn"),
        B = Num(row, "B"),
        Cu = Num(row, "Cu"),
        Mo = Num(row, "Mo"),
        Ni = Num(row, "Ni"),
        Cl = Num(row, "Cl"),
        Na = Num(row, "Na"),
        Si = Num(row, "Si"),
        Co = Num(row, "Co"),
        I = Num(row, "I"),
        Se = Num(row, "Se"),
        Al = Num(row, "Al"),
        Notes = Str(row, "Notes"),
    };
}
