+++
title = "C# Interactive"
updated = 2021-02-21
+++

# C# Interactive

REPL-like interface for C#

## Opening

Open here: `ctrl-e`

Open using a project's context:
1. Right click on a project
1. Select "Initialize Interactive with Project"

## Accessing Configs

C# Interactive runs as it's own application with its own configuration file. `app.config`s and `web.config`s do not get loaded in with the assemblies, so manually loading those is required.

There are two ways to use your configuration data with C# Interactive:

### Manual Configuration
Navigate to C# Interactive's configuration file, here's the path:
`AppDomain.CurrentDomain.SetupInformation.ConfigurationFile`

Copy over your necessary configuration elements

### Change the Config with Reflection

```cs

using System.Reflection;
using System.Configuration;

public static void ChangeConfigTo(string path)
{
    AppDomain.CurrentDomain.SetData("APP_CONFIG_FILE", path);
    typeof(ConfigurationManager)
        .GetField("s_initState", BindingFlags.NonPublic |
            BindingFlags.Static)
        .SetValue(null, 0);

    typeof(ConfigurationManager)
        .GetField("s_configSystem", BindingFlags.NonPublic |
            BindingFlags.Static)
        .SetValue(null, null);

    typeof(ConfigurationManager)
        .Assembly.GetTypes()
        .Where(x => x.FullName ==
            "System.Configuration.ClientConfigPaths")
        .First()
        .GetField("s_current", BindingFlags.NonPublic |
            BindingFlags.Static)
        .SetValue(null, null);
}

ChangeConfigTo(Path.GetFullPath("app.config")); // Replace with web.config if running interactive in the context of a web application
```
###### CC-BY-SA [Evk](https://stackoverflow.com/questions/50055648/is-there-any-way-to-initialize-the-web-config-in-c-sharp-interactive)