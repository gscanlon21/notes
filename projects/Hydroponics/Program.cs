using Hydroponics.Charts;
using Hydroponics.Excel;
using Hydroponics.Helpers;
using Hydroponics.Interfaces;

var programDir = PathHelpers.FindProgramDir();
var xlsxPath = args.Length > 0 ? args[0] : Path.Combine(programDir, "input", "Hydroponics.xlsx");
var outDir = args.Length > 1 ? args[1] : Path.Combine(programDir, "output", "plots");

var data = new HydroponicsData(WorkbookLoader.Load(xlsxPath));
var charts = new IChart[]
{
    new HarvestLeavesChart(),
};

Directory.CreateDirectory(outDir);
foreach (var chart in charts)
{
    var file = chart.Render(data, outDir);
    Console.WriteLine(file != null ? $"Saved {file}" : $"{chart.Name}: nothing to plot.");
    Console.WriteLine();
}

Console.WriteLine("Please any key to close...");
Console.ReadKey();
