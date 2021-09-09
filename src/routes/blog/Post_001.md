---
project: Post_001
title: Creating my Personal Website
description: How I created my Website using Sveltekit
author: Remo Füeg
date: 28/07/21
---

# How I created my personal Website
In this article I will be discussing how I built my personal website.
This will also act as a refrence for future projects.

## Overview:
The basic idea was to create a portfolio website, through which I can showcase myself and ongoing projects. It should also have a blogging section, where I can document and showcase personal projects.

## Technologies used:
* HTML
* JAVASCRIPT
* SVELTE
* NETLIFY
* NODE JS

Like most websites we are generating a HTML and Javascript file, which is served using netlify. For this we are using and existing framework. I have chosen to use Svelte due to its simplicity and being very close to vanila javascript and pure html. This makes it easy to structure and retrace projects.


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