# String.prototype.repeat()

The `repeat` method returns a _new string_ which contains the specified _number_ of copies of the _string_ on which it was called, concatenated together.

## Syntax

```js
const newString = string.repeat(count);
```

## Usage examples

```js
'abc'.repeat(0); // -> ''
'abc'.repeat(1); // -> 'abc'
'abc'.repeat(2); // -> 'abcabc'
'abc'.repeat(3.5); // -> 'abcabcabc'
'abc'.repeat(1 / 0); // -> RangeError
'abc'.repeat(-1); // -> RangeError
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat);
