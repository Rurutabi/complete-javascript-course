'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
// */
// function logger() {
//     console.log('My name is Jonas');
// }

// // //calling / running/ invoking function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice);
// const num = (Number('23'));

//Function declaration
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);



//Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah
// }

// //Arrow function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// const yearsUntilRetirement1 = yearsUntilRetirement(1991, 'Jason');
// const yearsUntilRetirement2 = yearsUntilRetirement(1995, 'Sira');
// console.log(yearsUntilRetirement1)
// console.log(yearsUntilRetirement2)

// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
//     // return retirement;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`
//     } else if (retirement < 0) {
//         return `${firstName} has already retired more than ${retirement * -1} years`
//     }
// }
// const year = yearsUntilRetirement(1995, 'Sira');
// const year2 = yearsUntilRetirement(1970, 'Ploy');
// console.log(year)
// console.log(year2)

// JavaScript Fundamentals – Part 2

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1.	Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2.	Use the function to calculate the average for both teams
// 3.	Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
// and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4.	Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5.	Ignore draws this time
// Test data:
// §	Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// §	Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// §	To calculate average of 3 values, add them all together and divide by 3  To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// GOOD LUCK 😀

// const calcAverage = (score1, score2, score3) => {
//     const averageScore = (score1 + score2 + score3) / 3;
//     return averageScore;
// }

// const dolphinsAverageScore = calcAverage(85, 54, 41);
// const koalasAverageScore = calcAverage(23, 34, 27);


// function checkWinner(avgDolhins, avgKoalas) {
//     if ((avgDolhins) >= (avgKoalas * 2)) {
//         return `$Dolhins win (${avgDolhins} vs. ${avgKoalas})`
//     } else if ((avgDolhins * 2) <= (avgKoalas)) {
//         return `$Koalas win (${avgDolhins} vs. ${avgKoalas})`
//     } else {
//         return 'Nobody win';
//     }
// }

// const realWinner = checkWinner(dolphinsAverageScore, koalasAverageScore);
// console.log(realWinner)

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends)

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schemedtmann', 2037 - 1991, 'teacher', friends]

// console.log(jonas);

// //Exercise
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1]);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])]

// console.log(ages)


// const friends = ['Michael', 'Steven', 'Peter'];

// //Add elements
// const newLength = friends.push('Jay');
// // console.log(friends);
// // console.log(newLength);

// friends.unshift('John');
// // console.log(friends);

// //Remove Elements
// friends.pop();
// const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// friends.shift();//First
// // console.log(friends);
// // console.log(friends.indexOf('Steven'));

// friends.push(23);
// console.log(friends);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Yoyo'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('Steven')
// }

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �

// const calcTip = (bill) => {
//     bill = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill
//     return bill;
// }

// // const bill1 = calcTip(100);
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
// console.log("Bills are " + bills)
// console.log(tips);
// console.log(total);


//Object
// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };


// console.log(jonas.lastName);
// console.log(jonas['age']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas);

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Something is missing")
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// //challenge
// //Jonas has 3 friends, anmd his best friend is called Michael

// const bestFriend = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`

// console.log(bestFriend);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtman',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     //method
//     // calcAge: function (birthYeah) {
//     //     return 2037 - birthYeah;
//     // }
//     // calcAge: function () {
//     //     return 2037 - this.birthYeah;
//     // }

// calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
// },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}. and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license`;
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(jonas.age);

// console.log(jonas.age);


// // console.log(jonas['calcAge'](jonas['birthYeah']);

// Challenge
// "Jonas is a 46-year old teacher. and he has a driver license"
// console.log(jonas.getSummary());

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass/ (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI() {
//         return this.BMI = this.mass / (this.height * this.height)
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI() {
//         return this.BMI = this.mass / (this.height * this.height)
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// function compareObjectBMI() {
//     if (mark.BMI > john.BMI) {
//         return `${mark.firstName}'s BMI ${(mark.BMI)} is higher than ${john.firstName} ${john.BMI}`
//     } else if (mark.BMI < john.BMI) {
//         return `${john.firstName}'s BMI ${(john.BMI)} is higher than ${mark.firstName} ${mark.BMI}`
//     } else
//         return 'Both are equal';
// }

// console.log(compareObjectBMI())


//for loop keeps running while condition is True
// for (let rep = 1; rep <= 30; rep++) {
//     console.log('Lifting weights repeition ' + rep);
// }


//Object
/*
const jonasArray = [
    'Jonas',
    'Schmedtmanhg',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] =  2037 - years[i];
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log("STRING ONLY BELOW!!!!!!!!!")
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);

}

console.log("BREAK WITH NUMBER ONLY BELOW!!!!!!!!!")
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);

}*/

// const jonas = [
//     'Jonas',
//     'Schmedtmanhg',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exercise = 1; exercise <= 5; exercise++) {
//     console.log(`-----------------------Starting exercise ${exercise}`)


//     // for (let rep = 1; rep < 6; rep++) {
//     //     console.log(`Exercise ${exercise} Lifting weight repetition${rep}`)
//     // }
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(` Lifting weight repetition ${rep}`);
//     rep++;
// };



// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//     dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(`You roll a ${dice}`)
//     if (dice === 6) console.log('Loop is ending..')
// }

/////////////
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK*/

//example
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     // ages[i] = 2037 - years[i];
//     ages.push(2037 - years[i]);
// }

// console.log(ages)


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// let sum = 0;

// const test = 22;

// const calcTip = (bill) => {
//     bill = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill
//     return bill;
// }


// function loopTip(tips) {
//     for (let i = 0; i < bills.length; i++) {
//         tips[i] = calcTip(bills[i])
//     }
//     return tips
// }
// loopTip(tips);

// function addTotal() {
//     for (let i = 0; i < bills.length; i++) {
//         total[i] = tips[i] + bills[i];
//     }
//     return total
// }
// addTotal();

// function calcAverage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length
// }


// console.log(bills)
// console.log(tips)
// console.log(addTotal());
// console.log(calcAverage(tips))
// console.log(calcAverage(bills))

// 