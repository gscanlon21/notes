using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Growing/Growing table.
/// </summary>
public sealed record GrowingRow
{
    /// <summary>Column "Seeding Jar".</summary>
    public string? SeedingJar { get; init; }
    /// <summary>Column "Growing Jar".</summary>
    public string? GrowingJar { get; init; }
    /// <summary>Column "Seed Cup".</summary>
    public string? SeedCup { get; init; }
    /// <summary>Column "Seed".</summary>
    public string? Seed { get; init; }
    /// <summary>Column "Seed Name".</summary>
    public string? SeedName { get; init; }
    /// <summary>Column "Growing Jar Name".</summary>
    public string? GrowingJarName { get; init; }
    /// <summary>Column "Status".</summary>
    public string? Status { get; init; }
    /// <summary>Column "Date Seeded".</summary>
    public DateTime? DateSeeded { get; init; }
    /// <summary>Column "Expected Germination (min)".</summary>
    public DateTime? ExpectedGerminationMin { get; init; }
    /// <summary>Column "Expected Germination (max)".</summary>
    public DateTime? ExpectedGerminationMax { get; init; }
    /// <summary>Column "Actual Germination".</summary>
    public DateTime? ActualGermination { get; init; }
    /// <summary>Column "Transplant Root Length (mm)".</summary>
    public double? TransplantRootLengthMm { get; init; }
    /// <summary>Column "Transplant Date".</summary>
    public DateTime? TransplantDate { get; init; }
    /// <summary>Column "Water Procedure".</summary>
    public string? WaterProcedure { get; init; }
    /// <summary>Column "Expected Harvest".</summary>
    public DateTime? ExpectedHarvest { get; init; }
    /// <summary>Column "Harvests".</summary>
    public double? Harvests { get; init; }
    /// <summary>Column "Date Terminated".</summary>
    public DateTime? DateTerminated { get; init; }
    /// <summary>Column "Stopped Reason".</summary>
    public string? StoppedReason { get; init; }
    /// <summary>Column "Root Length (mm)".</summary>
    public double? RootLengthMm { get; init; }
    /// <summary>Column "Root Width (mm)".</summary>
    public double? RootWidthMm { get; init; }
    /// <summary>Column "Root Color".</summary>
    public string? RootColor { get; init; }
    /// <summary>Column "Root Texture".</summary>
    public string? RootTexture { get; init; }
    /// <summary>Column "Root Dry Mass (g)".</summary>
    public double? RootDryMassG { get; init; }
    /// <summary>Column "Stem Dry Mass (g)".</summary>
    public double? StemDryMassG { get; init; }
    /// <summary>Column "Root-Stem Ratio".</summary>
    public double? RootStemRatio { get; init; }
    /// <summary>Column "Stem Length (mm)".</summary>
    public double? StemLengthMm { get; init; }
    /// <summary>Column "Stem Diameter (mm)".</summary>
    public double? StemDiameterMm { get; init; }
    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }
}

/// <summary>
/// One row per plant: seeding through termination. Sheet/Table: Growing/Growing.
/// </summary>
public sealed class GrowingTable : TableBase<GrowingRow>
{
    public const string Key = "Growing/Growing";

    public GrowingTable(DataTable raw) : base(raw)
    {
    }

    protected override GrowingRow Map(DataRow row) => new()
    {
        SeedingJar = Str(row, "Seeding Jar"),
        GrowingJar = Str(row, "Growing Jar"),
        SeedCup = Str(row, "Seed Cup"),
        Seed = Str(row, "Seed"),
        SeedName = Str(row, "Seed Name"),
        GrowingJarName = Str(row, "Growing Jar Name"),
        Status = Str(row, "Status"),
        DateSeeded = Date(row, "Date Seeded"),
        ExpectedGerminationMin = Date(row, "Expected Germination (min)"),
        ExpectedGerminationMax = Date(row, "Expected Germination (max)"),
        ActualGermination = Date(row, "Actual Germination"),
        TransplantRootLengthMm = Num(row, "Transplant Root Length (mm)"),
        TransplantDate = Date(row, "Transplant Date"),
        WaterProcedure = Str(row, "Water Procedure"),
        ExpectedHarvest = Date(row, "Expected Harvest"),
        Harvests = Num(row, "Harvests"),
        DateTerminated = Date(row, "Date Terminated"),
        StoppedReason = Str(row, "Stopped Reason"),
        RootLengthMm = Num(row, "Root Length (mm)"),
        RootWidthMm = Num(row, "Root Width (mm)"),
        RootColor = Str(row, "Root Color"),
        RootTexture = Str(row, "Root Texture"),
        RootDryMassG = Num(row, "Root Dry Mass (g)"),
        StemDryMassG = Num(row, "Stem Dry Mass (g)"),
        RootStemRatio = Num(row, "Root-Stem Ratio"),
        StemLengthMm = Num(row, "Stem Length (mm)"),
        StemDiameterMm = Num(row, "Stem Diameter (mm)"),
        Notes = Str(row, "Notes"),
    };
}
