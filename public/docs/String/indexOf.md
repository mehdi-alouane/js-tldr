# indexOf

**The `indexOf` method returns the _index_ of the first occurrence of the specified _searchValue_ within a _string_**, starting the search at _fromIndex_. It returns **-1** if the _searchValue_ is not found.

## Syntax

```js
const index = string.indexOf(searchValue, fromIndex);
```

## Usage examples

```js
const string = 'Brave new world';
string.indexOf('w'); // -> 8
string.indexOf('new'); // -> 6
string.indexOf('New'); // -> -1
string.indexOf(''); // -> 0
string.indexOf('', 10); // -> 10
string.indexOf('', 999); // -> 15
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
