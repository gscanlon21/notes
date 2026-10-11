using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// One row of the Procedures/Procedures table.
/// </summary>
public sealed record ProcedureRow
{
    /// <summary>Column "Key".</summary>
    public string? Key { get; init; }
    /// <summary>Column "Group".</summary>
    public string? Group { get; init; }
    /// <summary>Column "Name".</summary>
    public string? Name { get; init; }
    /// <summary>Column "Description".</summary>
    public string? Description { get; init; }
    /// <summary>Column "Link to Steps".</summary>
    public string? LinkToSteps { get; init; }
}

/// <summary>
/// Named procedures. Sheet/Table: Procedures/Procedures.
/// </summary>
public sealed class ProceduresTable : TableBase<ProcedureRow>
{
    public const string Key = "Procedures/Procedures";

    public ProceduresTable(DataTable raw) : base(raw)
    {
    }

    protected override ProcedureRow Map(DataRow row) => new()
    {
        Key = Str(row, "Key"),
        Group = Str(row, "Group"),
        Name = Str(row, "Name"),
        Description = Str(row, "Description"),
        LinkToSteps = Str(row, "Link to Steps"),
    };
}
