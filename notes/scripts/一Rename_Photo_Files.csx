
using System;
using System.IO;
using System.Linq;
using System.Globalization;
using System.Text.RegularExpressions;

static string GetArg(IList<string> args, string name, string defaultValue)
{
    var index = args.IndexOf($"--{name}");

    return index >= 0 && index + 1 < args.Count
        ? args[index + 1]
        : defaultValue;
}

var suffix = GetArg(Args, "suffix", "Graham-Scanlon");
int.TryParse(GetArg(Args, "page", "1"), out int page);

var dateFormat = "yyyyMMdd_HHmmss";
var dateRegex = new Regex(@"\d{8}_\d{6}", RegexOptions.Compiled);

var folderPath = Directory.GetCurrentDirectory();
var photos = new DirectoryInfo(folderPath).GetFiles()
	.Where(file => file.Name != Path.GetFileName(Environment.ProcessPath))
	.Where(file => dateRegex.Match(Path.GetFileNameWithoutExtension(file.Name)).Success)
    .OrderBy(file => file.Name)
    .ToList();

foreach (var photo in photos)
{
	var fileName = dateRegex.Match(Path.GetFileNameWithoutExtension(photo.Name)).Value;
    var photoDate = DateTime.ParseExact(fileName, dateFormat, CultureInfo.InvariantCulture);

    var newName = $"{photoDate:yyyy-MM-dd}_{page:D3}_{suffix}{photo.Extension}";
    var newPath = Path.Combine(folderPath, newName);
    Console.WriteLine($"{photo.Name} -> {newName}");
	File.Move(photo.FullName, newPath);

    page++;
}

Console.WriteLine();
Console.WriteLine($"{photos.Count} files renamed.");
