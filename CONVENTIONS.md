# Project Conventions

## Table of Contents

1. [Naming](#naming)
   1. [Folders](#folders)
   2. [Files](#files)
2. [File Format](#file-format)
   1. [Indentation](#indentation)
   2. [Curly Braces](#curly-braces)
   3. [Parenthesis](#parenthesis)
   4. [Example](#example)

## Naming

### Folders
All folders are named after the object they are extending.

### Files
All files should carry the name of the function.

## File Format

### Indentation
2 spaces 
<br>Example:
```javascript
{
  let x;
}
```

### Curly Braces
Space before opening curly brace. (` {`)

### Parenthesis
A space should only be before an opening parenthesis in an `if` statement. (`if (true)`)

### Semicolons
See [the example](#example).

### Example
```javascript
window.b = function x(y) {
  if (y == 1) {
    return "a";
  }

  return "z";
}
```
