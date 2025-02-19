+++
title = "Styleguide"
in_search_index = false

[extra]
in_sitemap = false
+++

# Headers
# h1
## h2
### h3
#### h4
##### h5

No h6. That has been hijacked for code block headers and footers.

# Paragraphs
## Five Paragraphs of Lorem Ipsum
Harum molestiae quo non mollitia aut voluptas sint. Velit vero est saepe necessitatibus. Autem molestiae facere accusantium maxime autem. Veritatis magnam expedita dolorem. Totam voluptatem ullam repellendus.

Odio dolor molestias totam nihil et alias. Consequuntur nobis sunt rem sit quia quis aut. Et et beatae tenetur molestias et asperiores doloribus tempore. Ipsa at nemo officiis iure rem enim labore saepe.

Ipsam earum velit voluptates et iure repellat. Ut ratione enim dolorem non. Quo quisquam ut impedit itaque quis dolore harum dicta. Et fugiat sequi vel. Totam fuga nostrum quisquam mollitia aut. Nemo consequatur ex fugiat adipisci.

Ut animi unde reiciendis tempore. Officia dolore quis quo ducimus quo. Provident nostrum odio accusamus facilis. Illum ut veniam et natus ut et ipsam. Voluptas excepturi ullam nemo ut illo est vel. Pariatur magni esse ut.

Assumenda aut ad iure. Quod explicabo ut ea. Et blanditiis dolore ut repudiandae assumenda culpa maxime ut.
<br>

# Code Blocks

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


# Lists

## Unordered List
- list item

  With subtext

- list item
- list item
 
  Nested List
  - list item
  - list item

- list item
