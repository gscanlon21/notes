using System.Data;

namespace Hydroponics.Excel.Tables;


/// <summary>
/// Drop-down value lists (one column per list). 
/// </summary>
public sealed class ValidationListsTable : TableBase<ValidationListRow>
{
    public const string Key = "Data Validation/List";

    public ValidationListsTable(DataTable raw) : base(raw) { }

    protected override ValidationListRow Map(DataRow row) => new()
    {
        Solutions = Str(row, "Solutions"),
        Fertilizers = Str(row, "Fertilizers"),
        Nutrients = Str(row, "Nutrients"),
        Elements = Str(row, "Elements"),
        ConcentrationUnits = Str(row, "Concentration Units"),
        WaterType = Str(row, "Water Type"),
        Seasons = Str(row, "Seasons"),
        RootColor = Str(row, "Root Color"),
        RootTexture = Str(row, "Root Texture"),
        HarvestMethods = Str(row, "Harvest Methods"),
        SpoilageReason = Str(row, "Spoilage Reason"),
        Taste = Str(row, "Taste"),
    };
}


/// <summary>
/// One row of the Data Validation/List table.
/// </summary>
public sealed record ValidationListRow
{
    /// <summary>Column "Solutions".</summary>
    public string? Solutions { get; init; }
    
    /// <summary>Column "Fertilizers".</summary>
    public string? Fertilizers { get; init; }
    
    /// <summary>Column "Nutrients".</summary>
    public string? Nutrients { get; init; }
    
    /// <summary>Column "Elements".</summary>
    public string? Elements { get; init; }
    
    /// <summary>Column "Concentration Units".</summary>
    public string? ConcentrationUnits { get; init; }
    
    /// <summary>Column "Water Type".</summary>
    public string? WaterType { get; init; }
    
    /// <summary>Column "Seasons".</summary>
    public string? Seasons { get; init; }
    
    /// <summary>Column "Root Color".</summary>
    public string? RootColor { get; init; }
    
    /// <summary>Column "Root Texture".</summary>
    public string? RootTexture { get; init; }
    
    /// <summary>Column "Harvest Methods".</summary>
    public string? HarvestMethods { get; init; }
    
    /// <summary>Column "Spoilage Reason".</summary>
    public string? SpoilageReason { get; init; }
    
    /// <summary>Column "Taste".</summary>
    public string? Taste { get; init; }
}