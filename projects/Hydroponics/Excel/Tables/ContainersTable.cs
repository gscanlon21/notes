using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// Jar/container types. Sheet/Table: Containers/Containers.
/// </summary>
public sealed class ContainersTable : TableBase<ContainerRow>
{
    public const string Key = "Containers/Containers";

    public ContainersTable(DataTable raw) : base(raw) { }

    protected override ContainerRow Map(DataRow row) => new()
    {
        Jar = Str(row, "Jar"),
        Name = Str(row, "Name"),
        VolumeML = Num(row, "Volume (mL)"),
        Shape = Str(row, "Shape"),
        TaperedTop = Bool(row, "Tapered Top"),
        OuterWidthMm = Num(row, "Outer Width (mm)"),
        OuterHeightMm = Num(row, "Outer Height (mm)"),
        InnerLidDiameterMm = Num(row, "Inner Lid Diameter (mm)"),
    };
}


/// <summary>
/// One row of the Containers/Containers table.
/// </summary>
public sealed record ContainerRow
{
    /// <summary>Column "Jar".</summary>
    public string? Jar { get; init; }

    /// <summary>Column "Name".</summary>
    public string? Name { get; init; }

    /// <summary>Column "Volume (mL)".</summary>
    public double? VolumeML { get; init; }

    /// <summary>Column "Shape".</summary>
    public string? Shape { get; init; }

    /// <summary>Column "Tapered Top".</summary>
    public bool? TaperedTop { get; init; }

    /// <summary>Column "Outer Width (mm)".</summary>
    public double? OuterWidthMm { get; init; }

    /// <summary>Column "Outer Height (mm)".</summary>
    public double? OuterHeightMm { get; init; }

    /// <summary>Column "Inner Lid Diameter (mm)".</summary>
    public double? InnerLidDiameterMm { get; init; }
}