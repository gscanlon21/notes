+++
title = "Formulas"
description = ""

[extra]
updated = 2026-06-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}




# Formulas

```
=TEXT(IF(J11="Unknown",C11,J11)+XLOOKUP(N11,Seeds!A:A,Seeds!H:H),"yyyy-MM-dd")
```

```
=TEXT(IF(J13="Unknown",C13,J13)+XLOOKUP(N13,Seeds!A:A,Seeds!F:F),"yyyy-MM-dd")&" - "&TEXT(IF(J13="Unknown",C13,J13)+XLOOKUP(N13,Seeds!A:A,Seeds!G:G),"yyyy-MM-dd")
```


## Function Reference

**&**
: Used to combine functions.

**=VALUE**
: Get the value out of a cell ignoring any format specifiers.
: > `'221` > `221`

**=TEXT(value, format_text)**
: > `=TEXT(value, "General")`

**=SWITCH(A2, "G", "Guard", "F", "Forward", "C", "Center", "None")**
: ?


## Range Reference
> [!NOTE]
> The `$` symbol locks a cell reference so that it doesn’t change when copying a formula.

**[]**
: Used to reference a table column by it's name.
: - Use `@[]` to reference the singular cell in the row.
: > Select only the column rows where the jar type matches. 
: > `=FILTER(VALUE([Water Added (mL)]), ([Jar Type]=[@[Jar Type]]`


