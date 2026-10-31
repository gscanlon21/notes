using System.Globalization;

namespace Hydroponics.Excel;

/// <summary>
/// Converts raw cells into typed values.
/// </summary>
public static class CellParse
{
    /// <summary>
    /// Trimmed string, or null if blank. 
    /// Whole numbers lose the ".0".
    /// </summary>
    public static string? Str(object? strObj) => strObj switch
    {
        null or DBNull => null,
        double d => d == Math.Floor(d)
            ? ((long)d).ToString(CultureInfo.InvariantCulture)
            : d.ToString("R", CultureInfo.InvariantCulture),
        DateTime dt => dt.ToString("yyyy-MM-dd"),
        string s => string.IsNullOrWhiteSpace(s) ? null : s,
        _ => strObj.ToString(),
    };

    /// <summary>
    /// Number, or null for "Unknown", "None", "Skipped", other text, blanks.
    /// </summary>
    public static double? Num(object? numObj) => numObj switch
    {
        string s when double.TryParse(s.Trim(), NumberStyles.Float, CultureInfo.InvariantCulture, out var d) => d,
        double d => d,
        _ => null,
    };

    /// <summary>
    /// Parse cell dates.
    /// </summary>
    public static DateTime? Date(object? dateObj) => dateObj switch
    {
        string s when DateTime.TryParseExact(s.Trim(), "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out var dt) => dt,
        DateTime dt => dt,
        _ => null,
    };
}
