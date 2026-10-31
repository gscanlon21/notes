using Hydroponics.Consts;

namespace Hydroponics.Helpers;

internal static class PathHelpers
{
    internal static string FindProgramDir()
    {
        // Walks up from the execution dirs up until it finds the root dir where the project is located.
        foreach (var start in new[] { Directory.GetCurrentDirectory(), AppContext.BaseDirectory })
        {
            for (var dir = new DirectoryInfo(start); dir != null; dir = dir.Parent)
            {
                if (File.Exists(Path.Combine(dir.FullName, HydroponicsConsts.ProjectFileName)))
                {
                    return dir.FullName;
                }
            }
        }

        return Directory.GetCurrentDirectory();
    }
}
