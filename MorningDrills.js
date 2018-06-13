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