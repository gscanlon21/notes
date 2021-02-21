+++
title = "T-SQL"
updated = 2021-02-21
+++

# T-SQL

## [Creating Indexes](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver15)

###### **`Create a unique index`**
```sql
CREATE UNIQUE INDEX idx_tablename_columnname ON tablename (columnname);
```

###### **`Create a clustered index`**
```sql
CREATE UNIQUE INDEX idx_tablename_columnname ON tablename (columnname);
```

###### **`Create a non clustered index`**
```sql
CREATE INDEX idx_tablename_columnname ON tablename (columnname);
```

## Literals with Join

While using literals in a query isn't an everyday occurance, they can be created using the [VALUES](https://docs.microsoft.com/en-us/sql/t-sql/queries/table-value-constructor-transact-sql?view=sql-server-ver15) constructor:

```sql
SELECT *
FROM (VALUES (@Id, @title), (1123, 'title')) AS literals (Id, Title)
    LEFT JOIN Table_Name ON Table_Name.Id = literals.Id
```