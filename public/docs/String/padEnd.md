# String.prototype.padEnd()

**The `padEnd` method pads the current _string_ with a given _padding string_** so that the resulting _padded string_ reaches a given _target length_.

The padding is applied from the end of the current string. The _padding string_ is repeated, if needed.

## Syntax

```js
const paddedString = string.padEnd(targetLength, paddingString);
```

## Usage examples

```js
'abc'.padEnd(10); // -> "abc       "
'abc'.padEnd(10, 'foo'); // -> "abcfoofoof"
'abc'.padEnd(6, '123456'); // -> "abc123"
'abc'.padEnd(1); // -> "abc"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
