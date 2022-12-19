'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data;

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
/*
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(value => value < 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((inter, i, arr) => {
      console.log(arr);
      return inter >= 1;
    })
    .reduce((acc, interst) => acc + interst, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //Display movement
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};
//Event handler
let currentAccount;

//Event handler
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Dispaly UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;
    //Clear inout fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update Ui
    updateUI(currentAccount);
  }
});

console.log(accounts);

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receieverAcc);

  if (
    amount > 0 &&
    receieverAcc &&
    currentAccount.balance >= amount &&
    receieverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receieverAcc.movements.push(amount);

    //Update Ui
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    Number(inputClosePin) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
///Simple Array Method

/*Note 
- Array are bascially object
- These array methods are simply functions that attached to all arrays
*/

// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE does not mutatate the original array
// const sliceArr = arr.slice(2);
// console.log(sliceArr);
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));

// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// console.log(arr.slice(2));

//SPLICE mutate the original array
//Simply one method to remove an array
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);

// //Reverse mutate the array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //Join
// console.log(letters.join(' - '));
// console.log(letters);

///////////////////////////////
////////The new at Method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
//   }
// }

// // for (let i = 0; i < movements.length; i++) {
// //   console.log(movements[i]);
// // }

// console.log('-------- FOREACH --------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(
//       `Movement ${i + 1} : You deposited ${mov} : from the list of array ${arr}`
//     );
//   } else {
//     console.log(`Movement ${i + 1} : You withdraw ${Math.abs(mov)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

/////////////////////////////////////////////////////////////////
///ForEach With Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currentciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currentciesUnique);

// currentciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array
// (one array for each).
// For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1.	Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
// and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2.	Create an array with both Julia's (corrected) and Kate's data
// 3.	For each remaining dog, log to the console whether it's an adult ("Dog number 1 🐶 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")
// 4.	Run the function for both test datasets
// Test data:
// §	Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// §	Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

// GOOD LUCK 😀

// const juliaDog = [3, 5, 2, 12, 7];
// const kateDog = [4, 1, 15, 8, 3];

// const juliaDog2 = [9, 16, 6, 8, 3];
// const kateDog2 = [10, 5, 6, 1, 4];

// const checkDog = function (juliaDog, kateDog) {
//   // const newJulia = juliaDog.slice(1, 3);
//   const newJulia = juliaDog.slice();
//   newJulia.splice(-2);
//   newJulia.splice(0, 1);
//   console.log(newJulia);
//   // const combineDog = [...newJulia, ...kateDog];
//   const combineDog = newJulia.concat(kateDog);
//   console.log(combineDog);
//   combineDog.forEach(function (value, i) {
//     if (value >= 3) {
//       console.log(`Dog number ${i} is an adult and its ${value} years old`);
//     } else {
//       console.log(
//         `Dog number ${i} is still a puppy and its ${value} years old`
//       );
//     }
//   });
// };

// // checkDog(juliaDog, kateDog);
// checkDog(juliaDog2, kateDog2);

//////////////////////////////////////////////////////////////////////////
///////////DATA Transformation
/*
Map - loop over arrays, similar to forEach method but create brand new array
Filter - used to filter element in the original array which satisfy a certain condition (for example array that > 2, all other will get filter out)
Reduce - boil down all the element of the original array into one single value (calculate total sum of the array into a single value).
*/

//////////////////////////////////////////////////////
///////////////Map

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// // console.log(movements);
// // console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// // console.log(movementsUSDfor);

// const theMove = movements.map(items => items * eurToUsd);

// console.log(theMove);

// const movementsDes = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDes);

///////////////////////////////////////////////////////////
//////////////Filter

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposits);

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);

// console.log(depositFor);

// const withdrawals = movements.filter(value => value < 0);
// console.log(withdrawals);

///////////////////////////////////////////////////////
////////////The reduce methods

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
//Check error for me
// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
//   console.log(balance2);
// }

//Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const Data1 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (ages) {
//   // const humanAge = ages.map(value => (value <= 2 ? value * 2 : 16 + value * 4));
//   const humanAge = ages.map(value => {
//     if (value <= 2) {
//       return value * 2;
//     } else {
//       return 16 + value * 4;
//     }
//   });
//   return humanAge;
// };
// console.log(calcAverageHumanAge(Data1));
// const oldDog = calcAverageHumanAge(Data1).filter(value => value > 18);
// console.log(oldDog);

// const averageDog =
//   oldDog.reduce((acc, next) => {
//     return acc + next;
//   }, 0) / oldDog.length;

// console.log(averageDog);

/////////////////////////////////////////////////////////
////////////The Magic of Chaining Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// //Pipelne
// const newarray = movements
//   .filter(value => value > 0)
//   .map(value => value * eurToUsd)
//   .reduce((acc, value) => acc + value, 0);
// console.log(newarray);

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:map filter reduce

/* MAP*/
//if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4

/*Filter  keeping dogs that are at least 18 years old */

/*Calculate the average human age of all adult dogs */

// function calcAverageHumanAge(ages) {
//   const humanAveAge = ages
//     .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
//     .filter(value => value >= 18)
//     .reduce((acc, value, i, arr) => acc + value / arr.length, 0);

//   return humanAveAge;
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

/*****************The Find Method */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const findMov = movements.find(mov => mov < 0);
// // console.log(findMov);

// // const account = accounts.find(value => value.owner === 'Jessica Davis');
// // console.log(account);

// let account;
// for (const value of accounts) {
//   if (value.owner === 'Jessica Davis') {
//     account = value;
//   }
// }

// console.log(account);

////////////////////////////////////////////
////////////////some and every

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
//Equality
// console.log(movements.includes(-130));

//Condition
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// //Every check if 'every' movament is positive
// console.log(movements.every(mov => mov > 0));

// //Separate callback
// const deposit = mov => 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

////////////////////////////////////////////////////
/////////////////////flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2, 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// //Flat
// // const accountMovements = accounts.map(value => value.movements).flat();
// // console.log(accountMovements);
// // const overalBalance = accountMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);

// //Flatmap only go one level DEEPPPPPPPPPPPPPP
// const overB = accounts.flatMap(acc => acc.movements);
// console.log(overB);

////////////////////////////////////////////////////
/////////////////////////Sorting Array
/*Note
Change everything to string an sort the array basically */

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// //Mutate the original array
// // console.log(owners.sort());

// // //Number
// // console.log(movements);

// //return <0, A,B (keep order)
// //return >0, B,A (switch order)

// console.log(movements);
// //Ascending
// const moveSort = movements.sort((a, b) => a - b);

// console.log(moveSort);

// //Descending
// const moveSort2 = movements.sort((a, b) => b - a);

// console.log(moveSort2);

/*More ways of creating and Filing Arrays*/

// const arr = [1, 2, 3, 4, 5, 6, 7];

// //Empty arrays + fill method
// const x = new Array(7).fill(1, 3, 5);

// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// //Array.from WAY NICER IN JONA OPI
// const y = Array.from({ length: 7 }, () => 1);

// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// // const randomDice = Array.from({ length: 100 }, (_, i) =>
// //   Math.trunc(Math.random() * i + 1)
// // );

// // console.log(randomDice);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );

//   console.log(movementsUI);

//   // movementsUI2 = [...document.querySelectorAll];
// });

//1
// const bankDepositSum = accounts
//   .flatMap((value) => value.movements)
//   .filter((value) => value > 0)
//   .reduce((acc, value) => acc + value, 0);

// console.log(bankDepositSum);

//2 How many deposit there have been in the bank with at least $1000

// const depositover1000 = accounts
//   .flatMap((value) => value.movements)
//   .reduce((acc, value) => (value >= 1000 ? acc + 1 : acc), 0);
// //   .filter((value) => value > 1000).length;

// console.log(depositover1000);

//3.Created object which contain the sum of the deposit and of the windrawal.

// const { deposits, withdrawal } = accounts
//   .flatMap((value) => value.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawal += cur);
//        sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );

// console.log(deposits, withdrawal);

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1.	Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object
// as a new property. Do not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2.	Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners,
// so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3.	Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4.	Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5.	Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// 6.	Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7.	Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// 8.	Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

// Hints:
// §	Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// §	Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.	Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object
// as a new property. Do not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// const doggy = dogs.map(value => value.weight ** 0.75 * 28);

// console.log(doggy);

dogs.forEach(
  value => (value.recommendedFood = Math.trunc(value.weight ** 0.75 * 28))
);
// console.log(dogs);

// 2.	Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners,
// so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// dogs.forEach(value => {
//   for (const costme of value.owners) {
//     if (costme === 'Sarah') console.log(value);
//   }
// });

// dogs.forEach(values => {
//   values.owners.forEach(value => {
//     if (value === 'Sarah') {
//       console.log(values);
//     }
//   });
// });

// const dogEat = dogs.flatMap(value => {
//   if (value.owners.includes('Sarah')) {
//     console.log(value);
//   }
// });

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }  `
// );

// 3.	Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

// const [ownersEatTooMuch, ownersEatTooLittle] = dogs.reduce();

// console.log(dogs);

// const ownersEatTooMuch = dogs
//   .filter(value => value.recommendedFood <= value.curFood)
//   .flatMap(value => value.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(value => value.recommendedFood >= value.curFood)
//   .flatMap(value => value.owners);

// console.log(ownersEatTooLittle);

// let ownersEatTooMuch = [];
// let ownersEatTooLittle = [];

// dogs.flatMap(value => {
//   if (value.recommendedFood > value.curFood) {
//     return ownersEatTooMuch.push(value.owners);
//   } else {
//     return ownersEatTooLittle.push(value.owners);
//   }
// });

//console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     acc.even.push(curr);
//   } else {
//     acc.odd.push(curr);
//   }
//   return acc;
// }, { even: [], odd: [] });

// 4.	Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!"
//and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);

// const [Alice, Bob, Michael] = ownersEatTooLittle;
// console.log(`${Alice} and ${Bob} and ${Michael}'s dogs eat too little!`);

// const [Matilda, Sarah, John] = ownersEatTooMuch;
// console.log(`${Matilda} and ${Sarah} and ${John}'s dogs eat too much!`);

// 5.	Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// console.log(dogs.some(dog => dog.curFood === dog.recFood));
// dogs.map(value =>
//   value.curFood === value.recommendedFood
//     ? console.log(true)
//     : console.log(false)
// );

// 6.	Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

const eatOkDog = dogs.map(value => {
  if (
    value.curFood >=
      value.recommendedFood - Math.trunc(value.recommendedFood * 0.1) &&
    value.curFood <=
      value.recommendedFood + Math.trunc(value.recommendedFood * 0.1)
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
});

// 7.	Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const eatOkDog2 = dogs.filter(value => {
  if (
    value.curFood >=
      value.recommendedFood - Math.trunc(value.recommendedFood * 0.1) &&
    value.curFood <=
      value.recommendedFood + Math.trunc(value.recommendedFood * 0.1)
  ) {
    return value;
  }
});

console.log(eatOkDog2);
// 8.	Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
// const moveSort = movements.sort((a, b) => a - b);
// console.log(moveSort);

const goodDog = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(goodDog);

// Hints:
// §	Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// §	Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
