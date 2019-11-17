# String.prototype.padStart()

**The `padStart` method pads a given _string_ with a _padding string_** until the resulting string reaches the _target length_.
The padding is applied from the start of a given _string_. The _padding string_ is repeated is needed.

## Syntax

```js
const paddedString = string.padStart(targetLength, paddingString);
```

## Usage examples

```js
'abc'.padStart(10); // -> "       abc"
'abc'.padStart(10, 'foo'); // -> "foofoofabc"
'abc'.padStart(6, '123465'); // -> "123abc"
'abc'.padStart(8, '0'); // -> "00000abc"
'abc'.padStart(1); // -> "abc"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
