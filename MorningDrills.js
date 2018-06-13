'use strict';

//Object Creator

function createMyObject () {
  return {
    foo: 'bar',
    abswerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    },
  };
}

console.log(createMyObject());

//Object Updater

function updateObject(obj){
  obj['foo'] = 'foo',
  obj['bar'] = 'bar',
  obj['bizz'] = 'bizz',
  obj['bang'] = 'bang';

  return obj;
}

let myObject = {};
console.log (updateObject(myObject));

//Self-refrence

function personMaker() {
  let person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return console.log(`${this.firstName} and ${this.lastName}.`);
    },
  };
  return person;
}

let ourPerson = personMaker(); 

console.log(ourPerson.fullName());