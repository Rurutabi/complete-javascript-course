'use strict';

// Data needed for a later exercise
//String Method Practice
///Teacher Work
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// //teacher work

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? 'O' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )}`;
//   console.log(output);
// }

//My own work
/**/

// const flightText = flights.split('+');
// for (const row of flightText) {
//   const [first, second, third, forth] = row.split(';');
//   const output = `${first.slice(1).replace('_', ' ')} from ${second
//     .slice(0, 3)
//     .toUpperCase()} to ${third.slice(0, 3).toUpperCase()} (${forth.replace(
//     ':',
//     'h'
//   )})`;
//   //console.log(output.padStart(41, '.'));
//   console.log(output.padStart(41, ' '));
//   //console.log(second);
//   //, second, third, forth);
// }

/***DATA 
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(firstInput, secondInput) {
    return [this.starterMenu[firstInput], this.mainMenu[secondInput]];
  },

  orderDelivery({ firstInput = 1, secondInput = 2, time = '10,00', address }) {
    console.log(
      `1 ${this.starterMenu[firstInput]} and 2 ${this.mainMenu[secondInput]} and 3 ${time} and 4 ${address}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`1 ${ing1}, 2 ${ing2} , 3 ${ing3}`);
  },

  orderPizza(Pizzaorder, Yoyo, ...Other) {
    console.log(
      `I want to order ${this.starterMenu[Pizzaorder]}, and I also want to order ${this.mainMenu[Yoyo]}. Is ok for me to pick it up at ${Other}`
    );
  },
};

*/

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �*/

//////////////////////////////////////////////
//////////////Teacher Solution

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(text);
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, '.')}${'✅'.repeat(i)}`);
//   }
// });

/////////////////////////////////////////////////////////
/*MY WORK
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textBox = document.querySelector('textarea');

const boxButton = document.querySelector('button');

boxButton.addEventListener('click', function () {
  if (textBox.value.length > 2 && textBox.value.indexOf('_') > 0) {
    reduceText();
  }
});

function reduceText() {
  const temp = textBox.value.toLowerCase();
  console.log(temp);
  const firstText = temp.split(/[_\n]/);
  console.log(firstText);
  let symbol = 1;
  const newText = [];
  const lastText = [];

  // console.log("Firststep " + firstText);

  for (const n of firstText) {
    newText.push(n.charAt(0).toUpperCase() + n.slice(1));
  }

  const newStringArray = newText.map(string => string.trim());
  console.log(newStringArray[1]);

  console.log(newText);
  for (let i = 0; i < newText.length; i = i + 2) {
    lastText.push(
      newStringArray[i].toLowerCase(),
      newStringArray[i + 1],
      '.'.repeat(
        20 - (newStringArray[i].length + newStringArray[i + 1].length)
      ),
      '✅'.repeat(symbol) + '\n'
    );
    symbol++;
  }

  textBox.value = lastText.join('');
  console.log(textBox.value);
}
*/

////////////////////////////////////////////////////////
////////////////////* Working with Strings
/*
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schemedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schemedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.charAt(0).toUpperCase() + n.slice(1));
    //nameUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
};

const passenger = 'jessica and smith davis';
capitalizeName(passenger);

//Padding add more space add more character to the string basically, There are pad at the start and pad at the end
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // easy trick :D
  const last = str.slice(-4);
  return console.log(last.padStart(str.length, '*'));
};

maskCreditCard(43645649998978);
maskCreditCard('988645649991515115151758');

//Repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

function planesInLine(n) {
  console.log(`There are ${n} planes in line ${'Wut'.repeat(n)}`);
}

planesInLine(8);
*/

/*********************************Part 2 
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);

const passengerCorret =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorret);

//Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n ';

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annoucemnet = 'All passengers come to barding door 23. Boarding door 23!';

console.log(annoucemnet.replace('door', 'gate'));

console.log(annoucemnet.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/

///////////////////////////////////PART 1
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle one :]');
//   } else {
//     console.log('You got Lucky :3');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof new String('Sira'));

/*Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. 
The values are the events themselves, 
and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time). */
// 1.	Create an array 'events' of the different game events that happened (no duplicates)
// 2.	After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3.	Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4.	Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// ⚽
// [FIRST HALF] 17:  GOAL

// GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// const event = new Set([...gameEvents.values()]);
// console.log(event);

// //2
// //Simple fix
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const gameMinute = 90;
// console.log(
//   `An event happened, on average, every ${gameMinute / gameEvents.size} minutes`
// );

// //4 	Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //[FIRST HALF] 17:  GOAL

// for (const [key, value] of gameEvents) {
//   const timeStamp = key < 46 ? '[FISRT HALF]' : '[SECOND HALF]';
//   console.log(` ${timeStamp} ${key} minutes: ${value} `);
// }

//Other way to do it
// const event = [new Set(Array.from(gameEvents.values()))];
// console.log(event);

/**********************
 * *********Map Iteration 

const question = new Map([
  ['question', 'What is the best programming lanaguage in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, ' Correct :D'],
  [false, 'Try Again'],
]);
// console.log(question);

//Convert object to map
// const temp = Object.entries(openingHours);
// console.log(temp);
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} is ${value}`);
}

// const answer = Number(prompt('Your answer is '));

const answer = 3;

console.log(question.get(question.get('Correct') === answer));

// Convert map to array //key,entries, values
console.log([...question]);

// question.get('Correct') === answer
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
*/

/**********
 ***************Map Fundamental

const rest = new Map();
rest.set('name', 'ThaiGod');
rest.set(1, 'Central,Thaitown');
console.log(rest.set(2, 'Wyong, Wyong Plaza'));

rest
  .set('categories', ['Thai', 'PadThai', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(2));

const time = 24;
///Cleaver but don't overuse it
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

console.log(rest.size);
// console.log(rest.clear());
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr));


*/

/***************** Set
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);


console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
// clear the set orderSet.clear()
console.log(orderSet);


for (const order of orderSet) console.log(order);


//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']));

//String is Iterable
console.log(new Set('Sira').size);
*/

/****************Looping object 
//Property Names

//Object key can give property name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

//Property Values
//Object value get property value
const values = Object.values(openingHours);
// console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}*/

/****************************** Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//With optional Chaining

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //const close = restaurant.openingHours[day]?.close;
  console.log(`On ${day}, we open at ${open}`);
  //console.log(`On ${day}, we close at ${close}`);
}

//Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderPadthai?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hi@hotmail.com',
  },
  {
    name: 'Xin',
    email: 'xin@hotmail.com',
  },
  {
    name: 'Ppeace',
    email: 'ppeace.yahoo.com',
  },
];

console.log(users[1]?.email ?? 'Object does not exist');
console.log(users[0]?.email ?? 'Object does not exist');
console.log(users[2]?.address?.open ?? 'Object does not exist');
console.log(users[3]?.email ?? 'Object does not exist');

*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//console.log([...menu.entries()]);

// const firstArr = ['0', '1'];
// restaurant.orderPizza(...firstArr);

// name: 'Classico Italiano',
// location: 'Via Angelo Tavanti 23, Firenze, Italy',
// categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// openingHours: {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// },

////Rest
//Destructing

//Rest left side            Spread Right side,
// const [a, b, ...others] = [12, 13, 14, 5, 6];
// console.log(a, b, ...others);

// const [Focaccia, ...joiningRes] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(Focaccia, joiningRes);

//Objects
// const { sat, ...weekday } = restaurant.openingHours;
// console.log(sat, weekday);

//Function
//rest pack the value with rest
// const ad = function (...arrs) {
//   console.log(arrs);
//   let sum = 0;
//   for (let i = 0; i < arrs.length; i++) sum += arrs[i];
//   console.log(sum);
// };
// const newb = [2, 3, 7];
// //spread unpack the value
// ad(newb);

// Spreading ....
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(...newArr);
/*
// console.log(...newArr);

//Joining Array
// const newMenu = [...restaurant.mainMenu, 'Pad Thai'];
// // console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);

// const joinArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinArray);

// // Iterables: arrays, strings, maps,sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = ['level 1', 'level 2 ', ' level 3'];
// console.log(ingredients);
// console.log(restaurant.orderPasta(...ingredients));

//Objects
const newRestaurant = { ...restaurant, founder: 'poopoobimmy' };
console.log(newRestaurant);

const resCopy = { ...restaurant };
resCopy.name = 'AROI';
console.log(resCopy.name);
console.log(restaurant.name);
*/

/**********************Decontructing Object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Wadalba',
  firstInput: 3,
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: meatOnly,
// } = restaurant;
// console.log(restaurantName, hours, meatOnly);

// const { menu = 'YOYO', starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variable/Swaping?
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//nested objects
// const {
//   fri: { open: opening, close },
// } = restaurant.openingHours;

// console.log(opening, close);
*/

/******Decontruct Array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.starterMenu;
console.log(first, second);

//Switch variables in an Arrays
[first, second] = [second, first];
console.log(first, second);

//Get an array value from function
const [value1, value2] = restaurant.order(3, 2);
console.log(value1, value2);

//Nested Array
// const nestedValue = [2, 4, [7, 8]];
// const [a, , [c, d]] = nestedValue;
// console.log(a, c, d);

//Default value
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Data Structures, Modern Operators and Strings

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1.	Create one player array for each team (variables 'players1' and
// 'players2')
// 2.	The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk')
// with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3.	Create an array 'allPlayers' containing all players of both teams (22 players)
// 4.	During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago',
// 'Coutinho' and 'Perisic'
// 5.	Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6.	Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console,
//along with the number of goals that were scored in total (number of player names passed in)
// 7.	The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

const odds = { team1: 1.33, x: 3.25, team2: 6.5 };

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds,

  // 7.	The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
};

//1 	Create one player array for each team (variables 'players1' and 'players2')
const [player1, player2] = game.players;
// console.log(player1, player2);

//2.	The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk')
// with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = player1;
const [gk2, ...fieldPlayers2] = player2;
// console.log(gk, fieldPlayers);

//3.	Create an array 'allPlayers' containing all players of both teams (22 players)
const allplayers = [...player1, ...player2];
// console.log(allplayers);

// 4.	During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago',
// 'Coutinho' and 'Perisic'
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Peristic'];
// console.log(player1Final);

// 5.	Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// 6.	Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console,
//along with the number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const printSomething = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// 7.	The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// console.log(team1 || draw || team2);
// console.log(1.33 || 3.25 || 6.5);
// console.log(6.5 && 3.25 && 1.33);
// console.log(team2 && draw && team1);

/*Coding Challenge 2 
Let's continue with our football betting app! Keep using the 'game' variable from before. 
Your tasks: 
1.	Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") 
2.	Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) 
3.	Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
 Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉 
4.	Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. 
In this game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
} 
 
GOOD LUCK 😀 
 
*/

// //1.	Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [goal, score] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1} : ${score}`);
// }

// //2.	Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const oddValue = Object.values(game.odds);
// console.log(oddValue);

// let temp = 0;
// for (const ele of oddValue) {
//   temp += ele;
// }
// console.log(temp / oddValue.length);

///// Other way to do it
// function calculateAverage(value) {
//   let temp = 0;
//   for (let i = 0; i < value.length; i++) {
//     temp += value[i];
//   }
//   temp = temp / value.length;
//   return temp;
// }

//3.	Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// const oddEntry = Object.entries(game.odds);

// for (const [youyoy, value] of oddEntry) {
//   const team1 = youyoy === 'x' ? 'draw' : `victory ${game[value]}`;
//   console.log(team1, value);
// }

// 4.	Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
// In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// console.log(game.scorers);
