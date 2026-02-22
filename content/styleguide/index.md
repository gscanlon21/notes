+++
title = "Styleguide"
in_search_index = false
updated = 2026-03-01

[extra]
subtitle = "Styleguide"
in_sitemap = false
site_version = 1
see_also = [
	{ title = "Tera Templating", href = "https://keats.github.io/tera/docs/"},
	{ title = "Zola Documentation", href = "https://www.getzola.org/documentation/getting-started/overview/"},
]
+++

{{ hidden() }}

# `Headers`
- - -
# h1
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

## h2
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

### h3
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

#### h4
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

##### h5
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

###### ~~No h6. That has been hijacked for code block headers and footers.~~

<br>
<hr>


# `Lists` 
- - -
# h1
- The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.

## h2
- The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.

### h3
- The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.

#### h4
- The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.

##### h5
- The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.


The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.
	- The quick brown fox jumps over the lazy dog.
- The quick brown fox jumps over the lazy dog.


<br>
<hr>


# `Alerts`
---
> [!NOTE]
> alert note


<br>
<hr>


# `Blockquotes`
- - -
# h1
> The quick brown fox jumps over the lazy dog.

## h2
> The quick brown fox jumps over the lazy dog.

### h3
> The quick brown fox jumps over the lazy dog.

#### h4
> The quick brown fox jumps over the lazy dog.

##### h5
> The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
> The quick brown fox jumps over the lazy dog.

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
###### Sample Header
> The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
###### Sample Footer


<br>
<hr>


# `Description Lists`
- - -
**One**
With Context
: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

**Two**
: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
: - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

**Three**
: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
: > Lorem ipsum dolor sit amet, consectetur adipiscing elit.

**Four**
: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
: > - [x] 
  > - [x] 
  > - [x] 
  > - [x] 
  > - [ ]

<br>
<hr>


# `Code Blocks`
- - -
## This is a collection of single-line fenced code blocks

Code blocks should be described using a regular header element or paragraph
```
Code block
```

They can be provided a language for syntax highlighting
```powershell
# Code block
```

And can have multiple commands show together
```powershell
echo "Hello"
```
```
Hello
```

```powershell
echo "World!"
```
```
World!
```

## This is a collection of multi-line fenced code blocks {#attribution}

Code blocks may contain attribution footers
###### 
```powershell
echo "This is a multi-line fenced code block with attribution."
```
```
This is a multi-line fenced code block with attribution.
```
###### [Attribution](#attribution)

As well as filename headers
###### filename.cs
```cs

/** 
 * This is a multi-line fenced code block that starts one line down. It also displays how a scrollbar looks when text overflows its container.
**/
```
######

Code can also be displayed inline by surounding the code with back ticks. `/* This is one such inline code block */`


<br>
<hr>


# `Tables`
- - -
{% table(header="Has an Empty Header") %}
|             | **Yes**     | **No**            |
|------------:|:-----------:|:-----------------:|
| **Present** | Hit         | Miss              |
| **Absent**  | False Alarm | Correct Rejection |
{% end %}
<br>

{% table(header="Cooking Temperature & Safety", footer="The Food Lab by J. Kenji López-Alt `362`") %}
| Degrees Fahrenheit | Time for Chicken | Time for Turkey | Time for Beef |
|:------------------:|:----------------:|:---------------:|:-------------:|
| 135                | 63.3 minutes     | 64 minutes      | 37 minutes    |
| 140                | 25.2 minutes     | 28.1 minutes    | 12 minutes    |
| 145                | 8.4 minutes      | 10.5 minutes    | 4 minutes     |
| 150                | 2.7 minutes      | 3.8 minutes     | 72 seconds    |
| 155                | 44.2 seconds     | 1.2 minutes     | 23 seconds    |
| 160                | 13.7 seconds     | 25.6 seconds    | Instantaneous |
| 165                | Instantaneous    | Instantaneous   | Instantaneous |
{% end %}
