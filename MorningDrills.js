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