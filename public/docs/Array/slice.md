# Array.prototype.slice()

**creates a new array which is a shallow clone of a portion of an original array** selected from `beginIndex` to `endIndex`.

## Syntax

```js
const newArr = originalArr.slice(beginIndex, endIndex);
```

## Usage examples

```js
[1, 2, 3].slice(); // -> [1, 2, 3]
[1, 2, 3, 4, 5].slice(2); // -> [3, 4, 5]
[1, 2, 3, 4, 5].slice(2, 3); // -> [3, 4]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
