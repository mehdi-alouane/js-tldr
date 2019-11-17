# String.prototype.lastIndexOf()

**The `lastIndexOf` method returns the _index_ of the last occurrence of the specified _searchValue_ within a _string_**, searching backwards from _fromIndex_. It returns **-1** if the _searchValue_ is not found.

## Syntax

```js
const index = string.lastIndexOf(searchValue, fromIndex);
```

## Usage examples

```js
const string = 'Brave new world';
string.indexOf('w'); // -> 8
string.lastIndexOf('w'); // -> 10
string.indexOf('new'); // -> 6
string.lastIndexOf('new'); // -> 6
string.lastIndexOf(''); // -> 15
string.lastIndexOf('', 5); // -> 5
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
