using System.Data;
using ClosedXML.Excel;

namespace Hydroponics.Excel;

/// <summary>
/// Loads every sheet's tables into a DataTable named "Sheet/Table".
/// </summary>
public static class WorkbookLoader
{
    public static Dictionary<string, DataTable> Load(string path)
    {
        var result = new Dictionary<string, DataTable>();
        using var workbook = new XLWorkbook(path);
        
        foreach (var sheet in workbook.Worksheets)
        {
            foreach (var table in sheet.Tables)
            {
                var seen = new Dictionary<string, int>();
                var dataTable = new DataTable($"{sheet.Name}/{table.Name}");

                foreach (var header in table.HeadersRow().Cells())
                {
                    var name = header.GetString().Trim();
                    if (name.Length == 0)
                    {
                        name = "Column";
                    }

                    if (seen.TryGetValue(name, out int n))
                    {
                        seen[name] = n + 1; name = $"{name}.{n + 1}";
                    }
                    else 
                    { 
                        seen[name] = 1; 
                    }

                    dataTable.Columns.Add(name, typeof(object));
                }

                foreach (var row in table.DataRange.Rows())
                {
                    var values = row.Cells().Select(CellToObject).ToArray();
                    if (values.All(v => v == null))
                    {
                        // Skip fully empty rows.
                        continue;
                    }

                    dataTable.Rows.Add(values);
                }

                result[dataTable.TableName] = dataTable;
            }
        }

        return result;
    }

    private static object? CellToObject(IXLCell c)
    {        
        // #REF!, #VALUE! -> missing
        if (c.Value.IsBlank || c.Value.IsError)
        {
            return null;
        }

        if (c.Value.IsNumber)
        {
            return c.Value.GetNumber();
        }

        if (c.Value.IsDateTime)
        {
            return c.Value.GetDateTime();
        }

        if (c.Value.IsBoolean) 
        { 
            return c.Value.GetBoolean(); 
        }

        return c.Value.ToString();
    }
}
