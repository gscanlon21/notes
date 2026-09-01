+++
title = "Excel"
updated = 2026-06-01
description = ""

[extra]
site = ""
see_also = []
+++

{{ <hidden page={page} section={section} /> }}




> [!TIP]
> Prefix a cell with an apostrophe (`'`) to tell excel to treat it as literal text.
>> Disable Auto-Formatting

> [!TIP]
> You can hit the little box between A and 1 to select the entire sheet (or hit ctrl + A) and format it as text.
>> Disable Auto-Formatting



# Frequently Asked Questions
**How to Freeze Columns**
: Click on the column you want to freeze.
: Go to `View`, click `Freeze Panes`.
: Select `Up to Column _`

**How to Setup Data Validation**
: Enter your list of the fixed values. (These have to be in the same sheet as the cell you want to restrict).
: Click on the cell you want to restrict. Select "validation" from the Excel "Data" pull down menu.
: In the pull down on the "Settings" tab select "List".
: click In the box labeled "Source" then select the cells that contain the values set up in step 1.



# Formulas

```
=TEXT(IF(J11="Unknown",C11,J11)+XLOOKUP(N11,Seeds!A:A,Seeds!H:H),"yyyy-MM-dd")
```

```
=TEXT(IF(J13="Unknown",C13,J13)+XLOOKUP(N13,Seeds!A:A,Seeds!F:F),"yyyy-MM-dd")&" - "&TEXT(IF(J13="Unknown",C13,J13)+XLOOKUP(N13,Seeds!A:A,Seeds!G:G),"yyyy-MM-dd")
```
