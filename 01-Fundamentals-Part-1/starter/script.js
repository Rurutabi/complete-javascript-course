/*
let js = 'amazing';
if (js === "amazing");
alert("Js is fun");

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let $funciton = 27;

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
*/

/*
//Math Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2022;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Scatman';
console.log(firstName + ' ' + lastName);

//Assignment Operator
let x = 10 + 5;
x += 10;
x *= 4;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >,<, >=,<=
console.log(ageSarah >= 18);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah);
console.log(averageAge);
*/

//////////////////////////////////////////
/*Coding Challenge #1

The Complete JavaScript Course 5
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀


let markWeight = 78;
let markTall = 1.69;
let johnWeight = 92;
let johnTall = 1.95;

let markBMI = markWeight / (markTall * markTall);
let johnBMI = johnWeight / (johnTall * johnTall);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
*/

/*
const fisrtName = 'Jonas';
const job = 'teacher'
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + fisrtName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${fisrtName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string... ${job}`)

console.log('String with \n\
mutiple\n\
lines');

console.log(`String
mutiple
line
like
cool
guy`)
*/

/*
const age = 15;


console.log(typeof age)

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)
*/

//////////////////////////////////////////
/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1.	Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2.	Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

GOOD LUCK 😀


let markWeight = 78;
let markTall = 1.69;
let johnWeight = 92;
let johnTall = 1.95;

let markBMI = markWeight / (markTall * markTall);
let johnBMI = johnWeight / (johnTall * johnTall);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than John's!`);
}

// console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)*/


/*
//type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
*/

// 5 falsy values: 0, '', undefined, null, NaN

// const money = 10;
// if (money) {
//     console.log("Don't speend it all")
// } else {
//     console.log("You should get a job!")
// }

// let height;
// if (height) {
//     console.log("Yay")
// } else {
//     console.log("No")
// }

/*
const age = 18;
if (age === 18) {
    console.log('You just become an adult (strict)')
}

if (age == 18) {
    console.log('You just become an adult (loose)')
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 9) { //// === always use triple
    console.log('Cool! 9 is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log("Not 9 or 7")
}

if (favourite !== 9) console.log('Why not 9')
*/

/*
const hasDriverLicense = true;//A
const hasGoodVision = false;//B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
*/

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1.	Calculate the average score for each team, using the test data below
// 2.	Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3.	Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4.	Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// §	Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// §	Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

/*
const averageDolphinsScore = (96 + 108 + 89) / 3;
const averageKolalasScore = (88 + 91 + 110) / 3;

const averageDolphinsScore2 = (97 + 112 + 101) / 3;
const averageKolalasScore2 = (109 + 95 + 123) / 3;

const averageDolphinsScore3 = (97 + 112 + 101) / 3;
const averageKolalasScore3 = (109 + 95 + 106) / 3;

console.log(averageDolphinsScore)
console.log(averageKolalasScore)

if (averageDolphinsScore > averageKolalasScore && averageDolphinsScore >= 100) {
    console.log(`Team Dolphins has an average score ${(averageDolphinsScore)} higher than team Kolalas ${(averageKolalasScore)}`)
} else if (averageKolalasScore > averageDolphinsScore && averageKolalasScore >= 100) {
    console.log(`Team Kolalas has an average score ${(averageKolalasScore)} higher than team Dolphins ${(averageDolphinsScore)}`)
} else if (averageKolalasScore === averageDolphinsScore && averageDolphinsScore >= 100 && averageKolalasScore >= 100) {
    console.log(`Team Dolphins and Dolphins has an same average score which are ${averageKolalasScore} and ${averageDolphinsScore}`)
} else {
    console.log('No one win :(')
}
*/

/*
const day = 'sunday';

switch (day) {
    case 'monday': // day ==='monday'
        console.log('Its Monday');
        console.log('So boring');
        break;
    case 'tuseday':
        console.log('Tuseday sleep')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Work on Thursday');
        break;
    case 'friday':
        console.log('Almost weekend Yay');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy more sleep on Sunday');
        break;
    default:
        console.log("Sleep day")
}

if (day === 'monday') {
    console.log("It's Monday")
} else if (day === 'tuseday') {
    console.log("It's Tuseday")
} else if (day === 'wednesday') {
    console.log("It's Wednesday")
} else if (day === 'thursday') {
    console.log("It's Thursday")
} else if (day === 'friday') {
    console.log("It's Friday")
} else if (day === 'saturday' || day === 'sunday') {
    console.log("It's Weekend!")s
} else {
    console.log("Not any days")
}
*/

// const age = 23;
// // const bank = age >= 18 ? console.log("I like coding") : console.log("but c++ is too hard :( ")

// const coding = age >= 18 ? 'like coding' : 'c++ too hard';
// console.log(coding)

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine'
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Milk'}`)


///////////////////////////////////
/// Code Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country,
// it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1.	Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
// It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2.	Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// §	Data 1: Test for bill values 275, 40 and 430
// Hints:
// §	To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// §	Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀

// bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the toal value is ${bill + tip}`);
