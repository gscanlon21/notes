using System.Collections;
using System.Data;

namespace Hydroponics.Excel.Tables;

/// <summary>
/// Typed view over one loaded <see cref="DataTable"/>.
/// Rows are mapped lazily, once, on first access.
/// </summary>
/// <typeparam name="TRow">Row type for the table.</typeparam>
public abstract class TableBase<TRow> : IReadOnlyList<TRow>
{
    private readonly Lazy<IReadOnlyList<TRow>> _rows;

    protected TableBase(DataTable raw)
    {
        Raw = raw;
        _rows = new Lazy<IReadOnlyList<TRow>>(
            () => raw.Rows.Cast<DataRow>().Select(Map).ToList());
    }

    /// <summary>
    /// The underlying untyped table.
    /// </summary>
    public DataTable Raw { get; }

    public IReadOnlyList<TRow> Rows => _rows.Value;

    public int Count => Rows.Count;

    public TRow this[int index] => Rows[index];

    public IEnumerator<TRow> GetEnumerator() => Rows.GetEnumerator();

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

    protected abstract TRow Map(DataRow row);

    // Cell readers. A column missing from the sheet reads as null instead of throwing.

    private static object? Cell(DataRow row, string column) =>
        row.Table.Columns.Contains(column) ? row[column] : null;

    protected static string? Str(DataRow row, string column) =>
        CellParse.Str(Cell(row, column))?.Trim() is { Length: > 0 } s ? s : null;

    protected static double? Num(DataRow row, string column) => CellParse.Num(Cell(row, column));

    protected static DateTime? Date(DataRow row, string column) => CellParse.Date(Cell(row, column));

    /// <summary>
    /// true/false, 1/0 or "1"/"0"/"true"/"false"; null for anything else ("Unknown", blank).
    /// </summary>
    protected static bool? Bool(DataRow row, string column) => Cell(row, column) switch
    {
        bool b => b,
        double d => d != 0,
        string s when bool.TryParse(s.Trim(), out var b) => b,
        string s when double.TryParse(s.Trim(), System.Globalization.NumberStyles.Float,
                                      System.Globalization.CultureInfo.InvariantCulture, out var d) => d != 0,
        _ => null,
    };
}
