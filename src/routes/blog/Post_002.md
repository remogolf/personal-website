---
project: Post_002
title: This is an empty Article
description: for testing purposes
author: Remo Füeg
date: 1/08/21
---
# {title}

written by: {author}

published: {date}

<br/>
<br/>

An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

```
define foobar() {
    print "Welcome to flavor country!";
}
```

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size  material      color
----  ------------  ------------
9     leather       brown
10    hemp canvas   natural
11    glass         transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
keyword   text
--------  -----------------------
red       Sunsets, apples, and
          other red or reddish
          things.

green     Leaves, grass, frogs
          and other things it's
          not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.
oranges
  : Citrus!
tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
|   Line too
| Line tree

and images can be specified like so:



Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

<style>
@charset "utf-8";

/**
 * markdown.css
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://gnu.org/licenses/lgpl.txt.
 *
 * @project      Weblog and Open Source Projects of Florian Wolters
 * @version      GIT: $Id$
 * @package      xhtml-css
 * @author       Florian Wolters <florian.wolters.85@googlemail.com>
 * @copyright    2012 Florian Wolters
 * @cssdoc       version 1.0-pre
 * @license      http://gnu.org/licenses/lgpl.txt GNU Lesser General Public License
 * @link         http://github.com/FlorianWolters/jekyll-bootstrap-theme
 * @media        all
 * @valid        true
 */

img {
	max-width: 100%;
}

table {
	border-collapse: collapse;
	width: 100%;
}

table, th, td {
	border: 1px solid #EAEAEA;
	border-radius: 3px;
	padding: 5px;
}

tr:nth-child(even) {
	background-color: #F8F8F8;
}

body {
    font-family: Helvetica, Arial, Freesans, clean, sans-serif;
padding:1em;
margin:auto;
max-width:42em;
background:#fefefe;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
}

h1 {
    color: white;
    font-size: 28px;
}

h2 {
    border-bottom: 1px solid #CCCCCC;
    color: white;
    font-size: 24px;
}

h3 {
    font-size: 18px;
}

h4 {
    font-size: 16px;
}

h5 {
    font-size: 14px;
}

h6 {
    color: #777777;
    background-color: inherit;
    font-size: 14px;
}

hr {
    height: 0.2em;
    border: 0;
    color: #CCCCCC;
    background-color: #CCCCCC;
}

p, blockquote, ul, ol, dl, li, table, pre {
    margin: 15px 0;
}

code, pre {
    border-radius: 3px;
    background-color: black;
    color: inherit;
}

code {
    border: 1px solid #EAEAEA;
    margin: 0 2px;
    padding: 0 5px;
}

pre {
    border: 1px solid #CCCCCC;
    line-height: 1.25em;
    overflow: auto;
    padding: 6px 10px;
}

pre > code {
    border: 0;
    margin: 0;
    padding: 0;
}

a, a:visited {
    color: #4183C4;
    background-color: inherit;
    text-decoration: none;
}
</style>