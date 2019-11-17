# String.prototype.indexOf()

The `indexOf` method returns the index within the calling *String* object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

## Syntax

```js
str.indexOf(searchValue)
str.indexOf(searchValue, fromIndex)
```

## Usage examples

```js
const str = 'Brave new world';

console.log('Index of first w from start is ' + str.indexOf('w')); // -> logs 8
console.log('Index of "new" from start is ' + str.indexOf('new')); // -> logs 6

const str = 'To be, or not to be, that is the question.';
let count = 0;
let position = str.indexOf('e');

while (position !== -1) {
  count++;
  position = str.indexOf('e', position + 1);
}

console.log(count); // -> displays 4
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
