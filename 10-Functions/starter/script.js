'use strict';

///////////////////////////////////////////////
/*Default parameters

const customerBooking = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  customerBooking.push(booking);
  console.log(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

//////////////////////////////////How passing Arguments Work: Value vs.Reference
// const flight = 'LL11H';
// const Sira = {
//   name: 'Sira Sompamit',
//   passport: 212121211,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 212121211) {
//     console.log('Check in');
//   } else {
//     console.log('YOU FAIL');
//   }
// };

// // checkIn(flight, Sira);
// // console.log(flight);
// // console.log(Sira);

// // //Is the same as doing...
// // const flightNum = flight;
// // const passenger = Sira;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(Sira);
// checkIn(flight, Sira);
//For objects we do in face pass in a reference, So the memory address of object is a value
//Value that contain memory address, Javascript does not have pass by reference unlike c++

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//There is first class which we have benn using. Additionally there is other type of function call "Higher-order" functions (For example addEventlistner)

////////////////////////////////////////
/* Function Accepting Callback Functions *````````````````````````````/*/
////////////////////WILL come back and practice later

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('xD');
// };

// document.body.addEventListener('click', high5);

// ['one', 'two', 'three'].forEach(high5);

////////////////////////////////////////////
//Function eturning function */////``````````````````///////////////////////
/*Note Gotta Practice Arrow function*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const hi = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Ppeace');

hi('HEllo')('Sira');
*/

////////////////////////////////////////
/* The call and apply method *````````````````````````````/*/
////////////////////WILL come back and practice later
/*
const thaiAir = {
  airline: 'ThaiAirWay',
  thaiCode: 'Th',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.thaiCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.thaiCode}${flightNum} `, name });
  },
};

thaiAir.book(1150, 'Sira Sompamit');
thaiAir.book(2259, 'Tai Tyre');
// console.log(thaiAir);

const asiaWings = {
  airline: 'AsiaWings',
  thaiCode: 'TW',
  bookings: [],
};

const book = thaiAir.book;

//Does NOT work
//book(23, 'Bimmy)
//**********************************************
//Call method
book.call(asiaWings, 9998, 'Bimmy Todafat');
// console.log(asiaWings);

book.call(thaiAir, 1111, 'DAN Noni');
// console.log(thaiAir);

const swiss = {
  airline: 'Swiss Air Lines',
  thaiCode: 'LX',
  bookings: [],
};

//Apply method
const flightData = [583, 'Georgey TheBie'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

////////////////////////////////////////
// //Blind method ````````````````````````````/

const bookAW = book.bind(asiaWings);
console.log(bookAW);
const bookThAir = book.bind(thaiAir);
const bookSW = book.bind(swiss);

bookAW(23, 'Steven Chen');
// console.log(asiaWings);

const bookAW26 = book.bind(asiaWings, 26);
bookAW26('Harry Jain');
bookAW26('Standley Kakin');

const wer = book.bind(thaiAir, 2556, 'Lipiah God');
wer();

//With Event Listeners.
thaiAir.planes = 300;
thaiAir.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector('.buy')
//   .addEventListener('click', thaiAir.buyPlane.bind(thaiAir));
*/
//Partial Application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(222));

// const combine = function (rate) {
//   return function (value) {
//     return console.log(value + value * rate);
//   };
// };

// combine(0.1)(200);

// const addVAT2 = combine(0.23);
// addVAT2(222);

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};*/

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
// This data is stored in the starter 'poll' object below.
// Your tasks:
// 1.	Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1.	Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.	Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1.
// Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2.	Call this method whenever the user clicks the "Answer poll" button.
// 3.	Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'),
// which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log().
//  This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4.	Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5.	Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
//  Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

// Test data for bonus:
// §	Data 1: [5, 2, 3]
// §	Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
const temp = '';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const [zero, one, two, three] = this.options;
    const temp = `${this.question} \n ${zero} \n ${one} \n ${two} \n ${three}`;
    // const temp = prompt(`${this.question} \n ${zero} \n ${one} \n ${two} \n ${three}`);
    console.log(`${temp}`);
    if (this.temp > -1 && this.temp < 4) {
      console.log(this.answers);
    }
  },
};

poll.registerNewAnswer();

// 1.	Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1.	Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.	Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1.
// Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
