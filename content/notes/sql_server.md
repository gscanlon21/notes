+++
title = "Microsoft SQL Server"
updated = 2021-05-24

[extra]
references = [
    { mark = "1", title = "Creating Indexes", href = "https://docs.microsoft.com/en-us/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver15" }
]
+++

# Microsoft SQL Server

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