# Array.prototype.slice()

returns a shallow clone of a portion of an array into a new array selected from `begin` to `end` where begin and end represent the index of items in that array.

## Syntax

```js
arr.slice(begin, end);
```

## Usage examples

```js
[1, 2, 3].slice(); // -> [1, 2, 3] (cloned array)
[1, 2, 3, 4, 5].slice(2); // -> [3, 4, 5]
[1, 2, 3, 4, 5].slice(2, 3); // -> [3, 4]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
