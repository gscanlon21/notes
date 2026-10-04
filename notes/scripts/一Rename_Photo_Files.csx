
using System;
using System.IO;
using System.Linq;
using System.Globalization;
using System.Text.RegularExpressions;

var suffix = Args.Count > 0 ? Args[0] : "Graham-Scanlon";

var dateFormat = "yyyyMMdd_HHmmss";
var dateRegex = new Regex(@"\d{8}_\d{6}", RegexOptions.Compiled);

var folderPath = Directory.GetCurrentDirectory();
var photos = new DirectoryInfo(folderPath).GetFiles()
	.Where(file => file.Name != Path.GetFileName(Environment.ProcessPath))
	.Where(file => dateRegex.Match(Path.GetFileNameWithoutExtension(file.Name)).Success)
    .OrderBy(file => file.Name)
    .ToList();

int id = 1;
foreach (var photo in photos)
{
	var fileName = dateRegex.Match(Path.GetFileNameWithoutExtension(photo.Name)).Value;
    var photoDate = DateTime.ParseExact(fileName, dateFormat, CultureInfo.InvariantCulture);

    var newName = $"{photoDate:yyyy-MM-dd}_{id:D3}_{suffix}{photo.Extension}";
    var newPath = Path.Combine(folderPath, newName);
    Console.WriteLine($"{photo.Name} -> {newName}");
	File.Move(photo.FullName, newPath);

    id++;
}

Console.WriteLine();
Console.WriteLine($"{id - 1} files renamed.");
