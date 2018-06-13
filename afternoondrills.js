'use strict';

// 1. Object initilizers and methods

let loaf = {
  flour:300,
  water:210,
  hydration:function(){return 100*(this.water/this.flour);}
};

console.log(`loaf: ${loaf.flour} flour: ${loaf.water}`);
console.log(loaf.hydration());

// 2. Iterating over an object's properties

let myObject = {
  foo:23,
  bar:'Michael Jordan',
  fum:'Chicago Bulls',
  quux:45,
  spam:'yummy'
};

for (let property in myObject){
  console.log(`${property} : ${myObject[property]}`);
}

// 3. Arrays in objects

const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);

// 4. Arrays of objects

const personFilipp = {
  name: 'Filipp',
  jobTitle: 'web developer'
};

const personDonny = {
  name: 'Donny',
  jobTitle: 'Burger Flipper',
};

const personBob = {
  name: 'Bob',
  jobTitle: 'Builder',
};

const people = [personFilipp, personDonny, personBob];

console.log(people.map(function(person) {
  return `${person.name} is a ${person.jobTitle}.`;
}));

// 5. Properties that aren't there

personDonny.boss = 'Filipp';
personBob.boss = 'Filipp';


console.log(people.map(function(person) {
  if(person.hasOwnProperty('boss')){return `${person.jobTitle} ${person.name} reports to ${person.boss}`;}
  else {return `${person.jobTitle} ${person.name} doesn't report to anybody.`;}
}));

//Cracking the code

let words = 'craft block argon meter bells brown croon droop';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

let wordArray = words.split(' ');

function decode(Array) {
  const results = [];
  Array.map(function(word) {
    if (cipher.hasOwnProperty(word[0])) {
      for (let key in cipher) {
        if (word[0] === key) {
          results.push(word[cipher[key] - 1]);
        }
      }
    }
    else {
      results.push(' ');
    }
  });
  return results.join('');
}

console.log(decode(wordArray));