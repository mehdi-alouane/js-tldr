# Object.entries()

The `entries()` method **returns** an array of a given object's own enumerable property **[key, value] pairs**, in the same order as that provided by a for...in loop. The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array should be sorted first like Object.entries(obj).[sort](https://jstldr.com/arary/sort)((a, b) => b[0].[localeCompare](https://jstldr.com/string/localecompare)(a[0]));.

## Syntax
```js
Object.entries(obj)
```

## Usage examples

```js
// Array like object:
const obj = { 0: 'T', 1: 'L', 2: 'D', 3: 'R' };
console.log(Object.entries(obj)); // [ ['0', 'T'], ['1', 'L'], ['2', 'D'], ['3', 'R'] ]
```

```js
// Array like object with random key ordering. Note that keys order are not numerical:
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
```

```js
// Enumerable property:
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

```js
// Non-object argument will be coerced to an object
console.log(Object.entries('TL:DR')); // [ [`0`, `T`], [`1`, `L`], [`2`, `:`], [`3`, `D`], [`4`, `R`] ]
```

```js
// Returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]
```


---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)