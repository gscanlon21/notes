+++
title = "Visual Studio Code"
updated = 2025-02-27

[extra]
site = "https://code.visualstudio.com/"
see_also = []
+++

###### Settings
```json

// When opening a file, `editor.tabSize` and `editor.insertSpaces`
// will be detected based on the file contents. Set to false to keep
// the values you've explicitly set, above.
"editor.detectIndentation": false,

// The number of spaces used for indentation or "tabSize" to use the value from Editor: Tab Size. 
// This setting is overridden based on the file contents when Editor: Detect Indentation is on.
"editor.indentSize": "tabSize",

// The number of spaces a tab is equal to. This setting is overridden
// based on the file contents when `editor.detectIndentation` is true.
"editor.tabSize": 4,

// Insert spaces when pressing Tab. This setting is overridden
// based on the file contents when `editor.detectIndentation` is true.
"editor.insertSpaces": false,

// Controls the size of editor tabs. 
"workbench.editor.wrapTabs": true,
"workbench.editor.tabSizing": "fixed",

// Controls the maximum width of tabs when Workbench › Editor: Tab Sizing size is set to fixed.
"workbench.editor.tabSizingFixedMaxWidth": 160,
// Controls the minimum width of tabs when Workbench › Editor: Tab Sizing size is set to fixed.
"workbench.editor.tabSizingFixedMinWidth": 80,

// Controls the size of pinned editor tabs.
"workbench.editor.pinnedTabSizing": "normal",
"workbench.editor.pinnedTabsOnSeparateRow": true,

// Controls the maximum number of opened editors. 
"workbench.editor.limit.enabled": true,
"workbench.editor.limit.value": 12,

// Controls where editors open. 
// Select first or last to open editors independently from the currently active one.
// Select left or right to open editors to the left or right of the currently active one. 
"workbench.editor.openPositioning": "last",

// Increase the font size of the file explorer.
"window.zoomLevel": 1,
"editor.fontSize": 15,

// Markdown Specific Settings
"[markdown]": {
  "editor.tabSize": 2,
	"editor.insertSpaces": true,
},

// Ignore search files
"search.exclude": {
  "**/.git": true,
  "**/dist": true,
  "**/public": true,
  "**/node_modules": true,
},
```
###### `Ctrl` `,`