using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Jars++/JarsPlusPlus_1 table.
/// </summary>
public sealed record JarAdditionRow
{
    /// <summary>Column "Jar".</summary>
    public string? Jar { get; init; }
    /// <summary>Column "Date Added".</summary>
    public DateTime? DateAdded { get; init; }
    /// <summary>Column "Water Type".</summary>
    public string? WaterType { get; init; }
    /// <summary>Column "Water Added (mL)".</summary>
    public double? WaterAddedML { get; init; }
    /// <summary>Column "V:Water Added (mL)".</summary>
    public double? VWaterAddedML { get; init; }
    /// <summary>Column "Fertilizer".</summary>
    public string? Fertilizer { get; init; }
    /// <summary>Column "Fertilizer Added (g)".</summary>
    public double? FertilizerAddedG { get; init; }
    /// <summary>Column "V:Fertilizer Added (g)".</summary>
    public double? VFertilizerAddedG { get; init; }
    /// <summary>Column "Final pH".</summary>
    public double? FinalPH { get; init; }
    /// <summary>Column "Final EC (μS/cm)".</summary>
    public double? FinalECUSPerCm { get; init; }
}

/// <summary>
/// Water and fertilizer additions to jars over time. Sheet/Table: Jars++/JarsPlusPlus_1.
/// </summary>
public sealed class JarAdditionsTable : TableBase<JarAdditionRow>
{
    public const string Key = "Jars++/JarsPlusPlus_1";

    public JarAdditionsTable(DataTable raw) : base(raw)
    {
    }

    protected override JarAdditionRow Map(DataRow row) => new()
    {
        Jar = Str(row, "Jar"),
        DateAdded = Date(row, "Date Added"),
        WaterType = Str(row, "Water Type"),
        WaterAddedML = Num(row, "Water Added (mL)"),
        VWaterAddedML = Num(row, "V:Water Added (mL)"),
        Fertilizer = Str(row, "Fertilizer"),
        FertilizerAddedG = Num(row, "Fertilizer Added (g)"),
        VFertilizerAddedG = Num(row, "V:Fertilizer Added (g)"),
        FinalPH = Num(row, "Final pH"),
        FinalECUSPerCm = Num(row, "Final EC (μS/cm)"),
    };
}
