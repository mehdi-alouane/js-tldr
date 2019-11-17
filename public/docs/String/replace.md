# String.prototype.replace()

The `replace` method returns a _new string_ with some or all matches of a _pattern_ replaced by a _replacement_. The _pattern_ can be a `string` or a `RegExp`, and the replacement can be a `string` or a `function` to be called for each match.
If pattern is a `string`, **only the first** occurrence will be replaced.

## Syntax

```js
var newString = string.replace(regexp|substring, newSubstring|function);
```

## Usage examples

```js
'Twas the night before Xmas...'.replace(/xmas/i, 'Christmas'); // -> Twas the night before Christmas...

'Apples are round, and apples are juicy.'.replace(/apples/gi, 'oranges'); // -> oranges are round, and oranges are juicy.

'abc12345#$*%'.replace(
  /([^\d]*)(\d*)([^\w]*)/,
  (match, p1, p2, p3, offset, string) => [p1, p2, p3].join(' - '),
); // -> abc - 12345 - #$*%
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
