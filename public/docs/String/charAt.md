# String.prototype.charAt()

The `charAt` method returns a new string consisting of the single UTF-16 code _character_ located at the specified offset into the _string_ specified by _index_.

## Syntax

```js
const character = string.charAt(index);
```

## Usage examples

```js
var string = 'Brave new world';
string.charAt(); // -> 'B'
string.charAt(0); // -> 'B'
string.charAt(1); // -> 'r'
string.charAt(2); // -> 'a'
string.charAt(3); // -> 'v'
string.charAt(4); // -> 'e'
string.charAt(999); // -> ''
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
