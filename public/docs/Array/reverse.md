# Array.prototype.reverse()

The `reverse` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

## Syntax

```js
a.reverse()
```

## Usage examples

```js
const a = [1, 2, 3];

console.log(a); // -> [1, 2, 3]

a.reverse(); 

console.log(a); // -> [3, 2, 1]


const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // -> {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()

console.log(a); // -> {0: 3, 1: 2, 2: 1, length: 3}
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
