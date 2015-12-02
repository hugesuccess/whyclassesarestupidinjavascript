'use strict';

/*
 *
 * I will fix it with classes!!
 
function Foo() {};
Foo.prototype.bar = "Hello World";
*/

class Foo {
  bar() {
    return 'Hello World';
  }
}

var foo = new Foo(), whoops = new Foo();

console.log(foo.bar()); // "Hello World"

foo.constructor.prototype.bar = ()=> 'Whoops!';

console.log(whoops.bar());
