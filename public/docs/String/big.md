# String.prototype.big()

The `big` method creates a <big> HTML element that causes a string to be displayed in a big font.
  
## Syntax

```js
str.big()
```

## Usage examples

```js
var worldString = 'Hello, world';

console.log(worldString.small()); // -> <small>Hello, world</small>
console.log(worldString.big()); // -> <big>Hello, world</big>
console.log(worldString.fontsize(7)); // -> <fontsize=7>Hello, world</fontsize>

document.getElementById('yourElemId').style.fontSize = '2em';
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/big)
