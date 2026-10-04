+++
title = "Excel"
description = ""

[extra]
updated = 2026-06-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}



> [!TIP]
> Use `ctrl-shift-v` to paste without formatting!


> [!TIP]
> Prefix a cell with an apostrophe (`'`) to tell excel to treat it as literal text.
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

**Reference a Spill Formula from a Table**
: Put the spill formula just offset the table and use:
: `=OFFSET(INDIRECT(ADDRESS(ROW(),COLUMN())),0,-2)`

**How to Round to 3 Sig Figs**
: `=LET(x, A1, ROUND(x,3-INT(LOG10(ABS(x)))-1))`
