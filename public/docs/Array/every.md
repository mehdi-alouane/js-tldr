# Array.prototype.every()
The `every()` method tests whether **all elements in the array pass the test** implemented by the provided function. It returns a Boolean value. 

>Note: This method returns true for any condition put on an empty array.

## Syntax 
```js
arr.every(callback(element[, index[, array]])[, thisArg])
```

## Usage examples

```js
//The following example tests whether ALL elements in the array are bigger than 10.
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

```js
//Arrow functions provide a shorter syntax for the same test.
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true​
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)