+++
title = "Power Apps"
description = ""
sort_by = "title"

[extra]
updated = 2026-03-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}


# Power Apps

**Access Querystring Params**
: `Value(Param("ID"))`

**Copy Command**
: `Copy("")`

**[Publish Access](make.powerapps.com)**
: Click 'more' on your app and select 'Share'.

**Filter by Approval Status**
: `Filter('List Name', 'Approval Status'.Value = "Approved")`
: - Append additional filters with `&&` or `||`.



## Common Filters
**`IsBlank()`**
: Useful for form filtering.

```
If(bool, true_value, false_value)
```


## Navigation

**Navigate to Page**
: `Navigate(OpportunityAddEditList, ScreenTransition.Fade, {})`
