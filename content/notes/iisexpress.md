+++
title = "IIS Express"
updated = 2021-02-21
+++

# IIS Express

## Enable Directory Browsing

###### **`web.config`**
```config
<?xml version="1.0" encoding="utf-8"?>
<!-- 
For more information on how to configure your ASP.NET application, please visit http://go.microsoft.com/fwlink/?LinkId=169433 
-->
<configuration>
  <system.webServer>
    <directoryBrowse enabled="true" />
  </system.webServer>
</configuration>
```
######

###### **`applicationhost.config`**
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

<configuration>
    <configSections>
        <sectionGroup name="system.webServer">
            <section name="directoryBrowse" overrideModeDefault="Allow" />
        </sectionGroup>
    </configSections>
</configuration>
```