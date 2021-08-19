+++
title = "Microsoft SQL Server"
updated = 2021-07-27

[extra]
version = 2019
references = [
    { mark = "1", title = "Creating Indexes", href = "https://docs.microsoft.com/en-us/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver15" }
]
see_also = [
    { title = "Powershell Commands", href = "https://dbatools.io/" }
]
+++

# Microsoft SQL Server

## Metadata

### View the service name and account

```sql

SELECT servicename, service_account
FROM sys.dm_server_services
GO
```

## Syntax

### Creating Indexes<sup>[1]</sup>

#### Create a unique index
```sql
CREATE UNIQUE INDEX idx_tablename_columnname ON tablename (columnname);
```

#### Create a clustered index
```sql
CREATE UNIQUE INDEX idx_tablename_columnname ON tablename (columnname);
```

#### Create a non clustered index
```sql
CREATE INDEX idx_tablename_columnname ON tablename (columnname);
```

### Literals with Join

The [VALUES](https://docs.microsoft.com/en-us/sql/t-sql/queries/table-value-constructor-transact-sql?view=sql-server-ver15) constructor can be used to create a table of literals for use inside a query:

```sql

SELECT *
FROM (VALUES (@Id, @title), (1123, 'title')) AS literals (Id, Title)
    LEFT JOIN Table_Name ON Table_Name.Id = literals.Id
```