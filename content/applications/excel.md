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


## Range Reference
> [!NOTE]
> The `$` symbol locks a cell reference so that it doesn’t change when copying a formula.

**[]**
: Used to reference a table column by it's name.
: - Use `@[]` to reference the singular cell in the row.
: > Select only the column rows where the jar type matches. 
: > `=FILTER(VALUE([Water Added (mL)]), ([Jar Type]=[@[Jar Type]]`


# Cell Formatting

> [!NOTE]
> Use `Alt + Enter` to wrap text in a cell.
> Select `Home > Wrap` to unwrap the auto-formatted text.


# Conditional Formatting

## Highlight Rows Where a Column is Blank

**Apply To**
: `A:XFD`
: - Columns A through XFD.
: `11:999999`
: - Rows 11 through 999999.
: `A11:AF999999`
: - Range A11 to AF999999.

**Format Cells where a Formula is True**
: `=$K1=""`
: `=AND($K1="",$A1<>"")`
: > [!NOTE]
  > Start at the row your formula applies to!
  > If your formula starts at row 11, start your formula at row 11.


## Automate Rules

###### Re-Apply Conditional Formatting Rules
```
function main(workbook: ExcelScript.Workbook) {
	let conditionalFormatting: ExcelScript.ConditionalFormat;
	let selectedSheet = workbook.getActiveWorksheet();

  // Delete conditional format from range F42 on selectedSheet for priority 1
	selectedSheet.getRanges("F42").getConditionalFormats()[1].delete();

  // Delete conditional format from range F42 on selectedSheet for priority 0
	selectedSheet.getRanges("F42").getConditionalFormats()[0].delete();

	// Create custom from range A11:AF999999 on selectedSheet
	conditionalFormatting = selectedSheet.getRange("A11:AF999999").addConditionalFormat(ExcelScript.ConditionalFormatType.custom);
  conditionalFormatting.getCustom().getFormat().getFont().setColor("#000000");
	conditionalFormatting.getCustom().getFormat().getFill().setColor("#FFC7CE");
	conditionalFormatting.getCustom().getRule().setFormula("=AND($K11=\"\",$A11<>\"\")");

	// Create custom from range A11:AF999999 on selectedSheet
	conditionalFormatting = selectedSheet.getRange("A11:AF999999").addConditionalFormat(ExcelScript.ConditionalFormatType.custom);
	conditionalFormatting.getCustom().getFormat().getFont().setColor("#000000");
	conditionalFormatting.getCustom().getFormat().getFill().setColor("#FFEB9C");
	conditionalFormatting.getCustom().getRule().setFormula("=AND($Y11=\"\",$K11<>\"\")");
}
```