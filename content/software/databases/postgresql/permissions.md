+++
title = "Permissions"
updated = 2023-11-28
+++

{{ hidden() }}

# Grant Permissions
```sql

GRANT CONNECT ON DATABASE my_db TO my_user;
```

```sql

GRANT ALL ON DATABASE my_db TO my_user;
```

```sql

GRANT USAGE ON SCHEMA public TO my_user;
GRANT CREATE ON SCHEMA public TO my_user;
```

```sql

GRANT SELECT ON ALL TABLES IN SCHEMA public TO my_user;
GRANT INSERT ON ALL TABLES IN SCHEMA public TO my_user;
GRANT UPDATE ON ALL TABLES IN SCHEMA public TO my_user;
GRANT DELETE ON ALL TABLES IN SCHEMA public TO my_user;
```

```sql

GRANT pg_read_all_data TO my_user;
GRANT pg_write_all_data TO my_user;
```

# Common Misconfigurations
## 42501: must be owner of table 'table_name'

##### View the Owner of a Table
```sql
SELECT tablename, tableowner
FROM pg_tables
WHERE tablename = 'table_name';
```

##### Change the Owner of a Table
```sql
ALTER TABLE table_name OWNER TO my_user;
```
