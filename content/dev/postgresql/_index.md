+++
title = "PostgreSQL"
sort_by = "title"

[extra]
version = 14.7
see_also = [
    { title = "Official Docs", href = "https://www.postgresql.org/docs/" }
]
+++


# PostgreSQL

## Backup

Backup a plain sql script:

```powershell

./pg_dump.exe --host thehost-server.postgres.database.azure.com --username theusername --exclude-table-data 'public.tableprefix1*' --exclude-table-data 'public.tableprefix2*' --file C:\thepath\backup.sql thedatabasename
```

Backup a custom-format sql script:

```powershell

./pg_dump.exe --host thehost-server.postgres.database.azure.com --username theusername --format custom --exclude-table-data 'public.tableprefix1*' --exclude-table-data 'public.tableprefix2*' --file C:\thepath\backup.dump thedatabasename
```


## Restore

Restore a plain sql script (database should be newly created):

```powershell

./psql --host thehost-server.postgres.database.azure.com --username theusername -d thedatabasename -f C:\thepath\backup.sql
```

Restore a custom-format sql script (data-only for a specific table):

```powershell

./pg_restore --host thehost-server.postgres.database.azure.com --username theusername --data-only -d thedatabasename -t thetabletorestore C:\thepath\backup.dump
```