'use strict';

class User {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  test() {
    console.log(User.schema);
  }
}

User.schema = {a:10};

let u = new User('tom');
u.test();

var prop = "foo";
var o = {
  [prop]: "hey",
  ['b' + 'ar']: "there",
};

console.log(o);

class StaticTest {
  constructor() {
  }

  static hello() {
    return 'hello, static';
  }

  sayHello() {
    console.log(StaticTest.hello());
  }
}

let st = new StaticTest();
st.sayHello();