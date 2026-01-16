+++
title = "Permissions"
updated = 2023-11-28
+++

{{ hidden() }}

# Permissions

## Grant Permissions

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