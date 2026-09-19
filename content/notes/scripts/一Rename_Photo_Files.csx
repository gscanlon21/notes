
using System;
using System.IO;
using System.Linq;
using System.Globalization;

var dateFormat = "yyyyMMdd_HHmmss";
var suffix = Args.Count > 0 ? Args[0] : "Graham-Scanlon";

var folderPath = Directory.GetCurrentDirectory();
var photos = new DirectoryInfo(folderPath).GetFiles()
	.Where(file => DateTime.TryParseExact(Path.GetFileNameWithoutExtension(file.Name), dateFormat, CultureInfo.InvariantCulture, DateTimeStyles.None, out _))
    .Where(file => file.Name != Path.GetFileName(Environment.ProcessPath))
    .OrderBy(file => file.Name)
    .ToList();

int id = 1;
foreach (var photo in photos)
{
    var extension = photo.Extension;
    var formattedId = id.ToString("D3");
	var fileName = Path.GetFileNameWithoutExtension(photo.Name);
    var photoDate = DateTime.ParseExact(fileName, dateFormat, CultureInfo.InvariantCulture);

    var newName = $"{photoDate:yyyy-MM-dd}_{formattedId}_{suffix}{extension}";
    var newPath = Path.Combine(folderPath, newName);
    Console.WriteLine($"{photo.Name} -> {newName}");
	File.Move(photo.FullName, newPath);

    id++;
}

Console.WriteLine();
Console.WriteLine($"{id - 1} files renamed.");
