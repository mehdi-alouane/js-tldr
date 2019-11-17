# String.prototype.includes()

The `includes` method determines whether one string may be found within another string, returning a boolean value.

## Syntax

```js
string.includes(searchString, position);
```

## Usage examples

```js
const string = 'To be, or not to be, that is the question.';

string.includes('To be'); // -> true
string.includes('To be', 1); // -> false
string.includes('question'); // -> true
string.includes('nonexistent'); // -> false
string.includes('TO BE'); // -> false
string.includes(''); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
