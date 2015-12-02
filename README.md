# whyclassesarestupidinjavascript

A quick demonstration why classes in ES6 is a crazypants nightmare.

The key thing to remember when dealing with classes in ES6/ES2015 is that they are 
not classes in the traditional (Java) sense. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

>>JavaScript classes are introduced in ECMAScript 6 
and are syntactical sugar over JavaScript's existing 
prototype-based inheritance. The class syntax is not 
introducing a new object-oriented inheritance model 
to JavaScript



This is crazypants. The one good thing about prototypal inheritence is that it
looked nothing like 'classical' (made up word) inheritance. So at least
you knew you where doing something different (and weird). You expected the rules
to be different because the syntax was different (kind of a big hint). Now,
the syntax is exactly the same, but the rules are still completely different.

The most egregious being JavaScripts ability to dynamically update the an
instance of a class, even after it has been instantiated by manipulating the scope chain.

For example:

````
class Foo {
  bar() {
    return 'Hello World';
  }
}

var foo = new Foo(), whoops = new Foo();

console.log(foo.bar()); // "Hello World"

foo.constructor.prototype.bar = ()=> 'Whoops!';

console.log(whoops.bar());
````


