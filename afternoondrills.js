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


