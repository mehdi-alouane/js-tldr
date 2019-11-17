# String.prototype.includes()

The `includes` method determines whether _searchString_ may be found within a _string_, returning a _boolean_ value as a _result_.

## Syntax

```js
const result = string.includes(searchString, position);
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
