+++
title = "PostgreSQL"
sort_by = "title"

[extra]
version = 18.1
see_also = [
    { title = "Official Docs", href = "https://www.postgresql.org/docs/" }
]
+++

{{ hidden() }}

# Backups

## Backup Database

###### Backup a Plain SQL Script
```powershell
./pg_dump.exe --host thehost-server.postgres.database.azure.com --username theusername --exclude-table-data 'public.tableprefix1*' --exclude-table-data 'public.tableprefix2*' --file C:\thepath\backup.sql thedatabasename
```
###### 
###### Backup a Custom-Format SQL Script:
```powershell
./pg_dump.exe --host thehost-server.postgres.database.azure.com --username theusername --format custom --exclude-table-data 'public.tableprefix1*' --exclude-table-data 'public.tableprefix2*' --file C:\thepath\backup.dump thedatabasename
```

## Backup Table

###### Backup a Single Table to a CSV File
```powershell
./psql --host thehost-server.postgres.database.azure.com --username theusername --dbname dbname -c '\COPY (SELECT * FROM table WHERE ""UserId"" IS NULL ORDER BY ""Id"") TO ''C:\code\.backups\table.csv'';'
```

##### ERROR: Character with byte sequence [?] in encoding "UTF8" has no equivalent in encoding "WIN1252"
Happens when outputting a special character such as the single prime (′) or double prime (″).




# Restores

## Restore Database

###### Restore a Plain SQL Script (database should be newly created)
```powershell
./psql --host thehost-server.postgres.database.azure.com --username theusername -d thedatabasename -f C:\thepath\backup.sql
```

## Restore Table

###### Restore a Custom-Format SQL Script (data-only for a specific table)
```powershell
./pg_restore --host thehost-server.postgres.database.azure.com --username theusername --data-only -d thedatabasename -t thetabletorestore C:\thepath\backup.dump
```

# Identity Sequences

###### Reset the Sequence to the Next Highest Value
```sql
SELECT setval((select pg_get_serial_sequence('footnote', 'Id')), (SELECT MAX("Id") + 1 FROM footnote));
```