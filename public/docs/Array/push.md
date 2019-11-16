# Array.prototype.push()

The `push` method adds one or more elements to the end of an array and returns the new length of the array.

## Syntax

```js
arr.push(element1[, ...[, elementN]])
```

## Usage examples

```js
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // -> ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // -> 4

var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // -> ['parsnip', 'potato', 'celery', 'beetroot']

var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```
---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
