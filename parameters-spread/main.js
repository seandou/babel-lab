'use strict';

function myFunction(x, y, z) {
  console.log(x, y, z);
}
var args = [0, 1, 2];
myFunction(...args);

function multiply(x, y = 1) {
    return x * y;
}

console.log(multiply(10));

function logEach(...things) {
    things.forEach(function (thing) {
        console.log(thing);
    });
}
logEach("a", "b", "c");

