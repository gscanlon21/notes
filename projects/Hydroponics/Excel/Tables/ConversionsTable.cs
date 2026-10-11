using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// Unit conversions. Sheet/Table: Conversions/Conversions.
/// </summary>
public sealed class ConversionsTable : TableBase<ConversionRow>
{
    public const string Key = "Conversions/Conversions";

    public ConversionsTable(DataTable raw) : base(raw) { }

    protected override ConversionRow Map(DataRow row) => new()
    {
        Key = Str(row, "Key"),
        Ratio = Num(row, "Ratio"),
        ToValue = Num(row, "To (Value)"),
        ToUnit = Str(row, "To (Unit)"),
        To = Str(row, "To"),
        ToName = Str(row, "To (Name)"),
        FromValue = Num(row, "From (Value)"),
        FromUnit = Str(row, "From (Unit)"),
        From = Str(row, "From"),
        FromName = Str(row, "From (Name)"),
        MultiplyBy = Num(row, "Multiply By"),
        Notes = Str(row, "Notes"),
        FromSource = Str(row, "From (Source)"),
        ToSource = Str(row, "To (Source)"),
    };
}


/// <summary>
/// One row of the Conversions/Conversions table.
/// </summary>
public sealed record ConversionRow
{
    /// <summary>Column "Key".</summary>
    public string? Key { get; init; }

    /// <summary>Column "Ratio".</summary>
    public double? Ratio { get; init; }

    /// <summary>Column "To (Value)".</summary>
    public double? ToValue { get; init; }

    /// <summary>Column "To (Unit)".</summary>
    public string? ToUnit { get; init; }

    /// <summary>Column "To".</summary>
    public string? To { get; init; }

    /// <summary>Column "To (Name)".</summary>
    public string? ToName { get; init; }

    /// <summary>Column "From (Value)".</summary>
    public double? FromValue { get; init; }

    /// <summary>Column "From (Unit)".</summary>
    public string? FromUnit { get; init; }

    /// <summary>Column "From".</summary>
    public string? From { get; init; }

    /// <summary>Column "From (Name)".</summary>
    public string? FromName { get; init; }

    /// <summary>Column "Multiply By".</summary>
    public double? MultiplyBy { get; init; }

    /// <summary>Column "Notes".</summary>
    public string? Notes { get; init; }

    /// <summary>Column "From (Source)".</summary>
    public string? FromSource { get; init; }

    /// <summary>Column "To (Source)".</summary>
    public string? ToSource { get; init; }
}
