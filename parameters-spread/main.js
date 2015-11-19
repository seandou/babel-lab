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

let [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');
console.log(all, year, month, day);