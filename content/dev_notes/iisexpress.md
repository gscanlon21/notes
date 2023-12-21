+++
title = "IIS Express"
updated = 2021-03-27

[extra]
version = "10"
+++

# IIS Express

## Configuration Info

###### applicationhost.config
```config
<?xml version="1.0" encoding="UTF-8"?>
<!--
    IIS configuration sections.

    For schema documentation, see
    %IIS_BIN%\config\schema\IIS_schema.xml.
    
    Please make a backup of this file before making any changes to it.

    NOTE: The following environment variables are available to be used
          within this file and are understood by the IIS Express.

          %IIS_USER_HOME% - The IIS Express home directory for the user
          %IIS_SITES_HOME% - The default home directory for sites
          %IIS_BIN% - The location of the IIS Express binaries
          %SYSTEMDRIVE% - The drive letter of %IIS_BIN%
-->
```

### Location of applicationhost.config

- **User default** `%userprofile%\documents\iisexpress\config\applicationhost.config`
- **VS2019**: `<SolutionFolder>\.vs\<ProjectName>\config\applicationhost.config`

## Enable Directory Browsing

###### <project>/web.config
```config

<configuration>
  <system.webServer>
    <directoryBrowse enabled="true" />
  </system.webServer>
</configuration>
```
######

###### applicationhost.config
```config

<configuration>
  <configSections>
    <sectionGroup name="system.webServer">
      <section name="directoryBrowse" overrideModeDefault="Allow" />
    </sectionGroup>
  </configSections>
</configuration>
```

## Disable Logging

Comment out the following modules

###### applicationhost.config
```config

<!--<add name="HttpLoggingModule" image="%IIS_BIN%\loghttp.dll" />-->
<!--<add name="HttpLoggingModule" lockItem="true" />-->
```