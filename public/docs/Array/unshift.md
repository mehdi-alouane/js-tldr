# Array.prototype.unshift()

The `unshift` method inserts the given values to the beginning of an array-like object.
Result of `unshift` call is length of modified array.

## Syntax

```js
const arrayLength = array.unshift(value1, value2, ..., valueN);
```

## Usage examples

```js
let arr = [1, 2];

arr.unshift(0); // -> 3
arr; // -> [0, 1, 2]

arr.unshift(-2, -1); // 5
arr; // -> [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // -> 6
arr; // -> [[-4, -3], -2, -1, 0, 1, 2]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
