'use strict';

class User {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let u = new User('tom');
console.log(u.name);

var prop = "foo";
var o = {
  [prop]: "hey",
  ['b' + 'ar']: "there",
};

console.log(o);