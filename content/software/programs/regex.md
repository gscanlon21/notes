+++
title = "Regex"
description = ""
aliases = ["regex"]

[extra]
updated = 2027-01-01
see_also = [
  { title = "Regex Tester", href = "https://regexr.com" }
]
+++

{{ hidden() }}


# Reference

## Character Classes

`.`
: any character except newline

`\w`
: word

`\d`
: digit

`\s`
: whitespace

`\W`
: not word

`\D`
: not digit

`\S`
: not whitespace

`[abc]`
: any of a, b, or c

`[^abc]`
: not a, b, or c

`[a-g]`
: character between a and g

## Anchors

`^abc$`
: start / end of the string

`\b`
: word boundary

`\B`
: non-word boundary

## Escaped Characters

`\.`
: escaped period

`\*`
: escaped asterisk

`\\`
: escaped backslash

`\t`
: tab

`\n`
: linefeed

`\r`
: carriage return

## Groups & Lookaround

`(abc)`
: capture group

`\1`
: backreference to group #1

`(?:abc)`
: non-capturing group

`(?=abc)`
: positive lookahead

`(?!abc)`
: negative lookahead

## Quantifiers & Alternation

`a*`
: 0 or more

`a+`
: 1 or more

`a?`
: 0 or 1

`a{5}`
: exactly five

`a{2,}`
: two or more

`a{1,3}`
: between one and three

`a+?`
: match as few as possible

`a{2,}?`
: match as few as possible

`ab|cd`
: match `ab` or `cd`


# Snippets

###### Remove Word Parts
```
^\w*/[aoi]$\n:.*\n
```

###### Remove Suffixes
```
^-\w*$\n:.*\n
```

###### Remove Prefixes
```
^\w*-$\n:.*\n
```


# Find & Replace

**Find**
: Capture groups are listed in parenthesis.
: <h1>(.*)<\/h1>

**Replace**
: Capture groups are referenced by $index.
: # $1
