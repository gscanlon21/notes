+++
title = "Formatting"
description = ""

[extra]
updated = 2026-06-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}




# Cell Formatting

> [!NOTE]
> Use `Alt + Enter` to wrap text in a cell.
> Select `Home > Wrap` to unwrap the auto-formatted text.


# Conditional Formatting

## Highlight Rows Where a Column is Blank

**Apply To**
: `A:AX`
: - Columns A through AX.
: `11:999999`
: - Rows 11 through 999999.
: `A11:AX99999`
: - Range A11 to AX999999.

> [!NOTE]
> Don't go all the way to XFD or the scroll bar will shorten!
>> Conditional Formatting Ranges


**Format Cells where a Formula is True**
: `=$K1=""`
: `=AND($K1="",$A1<>"")`
: > [!NOTE]
  > Start at the row your formula applies to!
  > If your formula starts at row 11, start your formula at row 11.

**Format Cells where the Cell is Empty**
_If the format range starts at 11_
: `=AND(A11="", $A11<>"", A$10<>"")`

**Format Formula Cells**
: `=ISFORMULA(A11)`

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
