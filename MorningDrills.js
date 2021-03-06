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
      return (`${this.firstName} and ${this.lastName}.`);
    },
  };
  return person;
}

let ourPerson = personMaker(); 

console.log(ourPerson.fullName());

//Delete Keys

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  // your code here
  delete obj['foo'];
  delete obj['bar'];
  
  return obj;
}

console.log(keyDeleter(sampleObj));

//Make Student reports

function makeStudentReport(data) {
  return data.map(function(student) {
    return `${student.name}: ${student.grade}`;
  });
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },];

console.log(makeStudentReport(testData));