# String.fromCharCode()

The static `fromCharCode` method returns a _string_ created from the specified sequence of UTF-16 code units (_numN_).

## Syntax

```js
const string = String.fromCharCode(num1, num2, ..., numN);
```

## Usage examples

```js
String.fromCharCode(65, 66, 67); // -> "ABC"
String.fromCharCode(0x2014); // -> "—"
String.fromCharCode(0x12014); // -> "—" (the digit 1 is truncated and ignored)
String.fromCharCode(8212); // -> "—" (8212 is the decimal form of 0x2014)
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
