# unshift
## Description
The ```unshift``` method inserts the given values to the beginning of an array-like object.
## Syntax
```arr.unshift```(element1[, ...[, elementN]])
## Examples
```let arr = [1, 2];```

```arr.unshift(0);``` // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

```arr.unshift(-2, -1);``` // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

```arr.unshift([-4, -3]);``` // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

```arr.unshift([-7, -6], [-5]);``` // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
