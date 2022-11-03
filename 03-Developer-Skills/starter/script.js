// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// // const x = "23";
// // if (x === 23) console.log(23);

// // const calcAge = birthYear => 2037 - birthYear;
// // console.log(calcAge(1991));
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) Fix
//     value: Number(prompt("Degrees celsius: ")),
//   };

//   //B) Find
//   console.table(measurement);

//   const kelvin = measurement.value + 237;
//   return kelvin;
// };

// // A) Identify
// console.log(measureKelvin());

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// // // Developer Skills & Editor Setup

// // Coding Challenge #1
// // Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
// //Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// // Your tasks:
// // 1.	Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// // 2.	Use the problem-solving framework: Understand the problem and break it up into sub-problems!
// // Test data:
// //  Data 1: [17, 21, 23]  Data 2: [12, 5, -5, 0, 4]

// // GOOD LUCK 😀

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// function printForecast(arr) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp[i] = `${arr[i]}ºC in ${i + 1} days... `;
//   }
//   const withoutCommas = temp.join("");
//   return "..." + withoutCommas;
// }

// console.log(printForecast(data1));

// function printForecast2(arr) {
//   let temp = "";
//   for (let i = 0; i < arr.length; i++) {
//     temp += `${arr[i]}ºC in ${i + 1} days... `;
//   }

//   return "..." + temp;
// }

// console.log(printForecast2(data1));
