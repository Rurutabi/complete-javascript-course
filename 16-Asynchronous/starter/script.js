'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className, languages, currencies) {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currencies}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////
//Our first AJAX CAll : XMLHTTPrequest

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     const languages = data.languages[Object.keys(data.languages)[0]];
//     const currencies = data.currencies[Object.keys(data.currencies)[0]].name;
//     console.log(data);
//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${languages}</p>
//       <p class="country__row"><span>💰</span>${currencies}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('australia');

///////////////////////////////////////
//Welcome to callback hell

/*
const getCountryDataAndNeigbour = function (country) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const languages = data.languages[Object.keys(data.languages)[0]];
    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;
    console.log(data);

    //Render country 1
    renderCountry(data, languages, currencies);

    //Get neighbour country
    const neighbour = data.borders?.[0];
    console.log(neighbour);

    if (!neighbour) return;

    //ajax call 2 for neighbours:

    let request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${neighbour}
      `
    );
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      const languages2 = data2.languages[Object.keys(data2.languages)[0]];
      const currencies2 =
        data2.currencies[Object.keys(data2.currencies)[0]].name;
      console.log(data2);
      //render country:
      renderCountry(data2, 'neighbour', languages2, currencies2);
    });
  });
};

getCountryDataAndNeigbour('thailand');
*/

///////////////////////////////////////
//Promises and the Fetch Api

// const request = fetch(`https://restcountries.com/v3.1/name/australia`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       //Country 2
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(data[0].borders?.[0]);

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

// };

// btn.addEventListener('click', function () {
//   getCountryData('thailand');
// });

// getCountryData('australia');

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response =>
//       response.json();
//     )
//     .then(data => renderCountry(data, 'neighbour'))

// Asynchronous JavaScript

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates.
//  So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1.	Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
// 2.	Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.
//  Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
// 3.	Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data,
//  log a message like this to the console: “You are in Berlin, Germany”
// 4.	Chain a .catch method to the end of the promise chain and log errors to the console
// 5.	This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request.
// Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message

// PART 2
// 6.	Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7.	Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
// Test data:
// §	Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// §	Coordinates 2: 19.037, 72.873
// §	Coordinates 3: -33.933, 18.474

// GOOD LUCK 😀

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       const [data1] = data;
//       const languages = data1.languages[Object.keys(data1.languages)[0]];
//       const currencies =
//         data1.currencies[Object.keys(data1.currencies)[0]].name;
//       renderCountry(data[0], 'none', languages, currencies);

//       if (!('borders' in data[0])) throw new Error('No neighbour found');
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);

//       if (!neighbour) throw new Error('No neighbour found!');
//       //Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(response => {
//       if (!response.ok) throw new Error(`Url not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       if (!data.countryName)
//         throw new Error(`Country not found ${response.status}`);
//       console.log(`You are in ${data.city} , ${data.countryName}`);
//       getCountryData(data.countryName);
//     })
//     .catch(err => {
//       console.log(`${err}`);
//       console.log(`Soemthing went wrong ${err.message}`);
//     });
// };

// whereAmI('52.508, 13.381');

///////////////////////////////////////
//The event loop pratice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10; i++) {}
//   console.log(res);
// });
// console.log('Test end');

///////////////////////////////////////
//Budling a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening!');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win XD');
//     } else {
//       reject(new Error('You lost your money :('));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// /*Note
// -Most of the time what we actually do is to consume promises
// -Build promises to wrap old callback based functions into promises. The name of this process is called promisifying
// */
// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(5)
//   .then(() => {
//     console.log('I waited for 5 seconds');
//     return wait(4);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(0);
//   })
//   .then(() => {
//     console.log('LETS GOOOOOOOOOOOOOOOOOOO');
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

///////////////////////////////////////
//Promisifying the Geolocation API

// console.log('Getting Position');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);

// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
// PART 1
// 1.	Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use document.createElement('img'))
// and sets the .src attribute to the provided image path
// 2.	When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself.
//  In case there is an error loading the image (listen for the'error' event), reject the promise
// 3.	If this part is too tricky for you, just watch the first part of the solution

// PART 2
// 4.	Consume the promise using .then and also add an error handler
// 5.	After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier
// 6.	After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image (Hint: Use the image element returned by the
//   'createImage' promise to hide the current image. You will need a global variable for that 😉)
// 7.	After the second image has loaded, pause execution for 2 seconds again
// 8.	After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// GOOD LUCK 😀

// /*Note
// -Most of the time what we actually do is to consume promises
// -Build promises to wrap old callback based functions into promises. The name of this process is called promisifying
// */
// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(5)
//   .then(() => {
//     console.log('I waited for 5 seconds');
//     return wait(4);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(3);
//   })

// 4.	Consume the promise using .then and also add an error handler
// 5.	After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier
// 6.	After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image (Hint: Use the image element returned by the
//   'createImage' promise to hide the current image. You will need a global variable for that 😉)
// 7.	After the second image has loaded, pause execution for 2 seconds again
// 8.	After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// let some;

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const newImage = document.createElement('img');
//     if (newImage) {
//       resolve('Image Load Properly');
//       countriesContainer.appendChild(newImage);
//       countriesContainer.style.opacity = 1;
//       newImage.src = imgPath;
//       some = newImage;
//     } else {
//       reject(new Error('Promise is rejected'));
//     }
//   });
// };

// createImage('img/img-1.jpg')
//   .then(res => {
//     console.log(res);
//     return wait(2);
//   })
//   .then(() => {
//     some.style.display = 'none';
//     return wait(2);
//   })
//   .then(res => {
//     return createImage('img/img-2.jpg');
//   })
//   .then(res => {
//     console.log(res);
//     return wait(2);
//   })
//   .then(() => {
//     some.style.display = 'none';
//     return wait(2);
//   })
//   .then(res => {
//     return createImage('img/img-3.jpg');
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.error(` ${err}`));

///////////////////////////////////////
//Error Handling with try... catch + Returning values from async functions
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Prblem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );

    if (!res.ok) throw new Error('Prblem getting location data');

    console.log(res);
    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(err);
    renderError('Something went wrong');
  }

  // fetch(`https://restcountries.eu/v2/name/${country}`);
  // console.log(res);
  // Reject promise returned from async function
  throw err;
};

console.log('1: Will get location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finsih loading'));

(async function () {
  try {
    const res = await whereAmI();
    console.log(`2: ${res}`);
  } catch (err) {
    console.error(err);
  }
  console.log('3: Finsih loading');
})();

*/

///////////////////////////////////////
//Running Promises in Parallel

/*COOL technic use in real world */

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

// const data = await Promise.all([
//   getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
// ]);
//     // console.log(data.forEach(value => value[0].capital));
//     // console.log(data.map(d => d[0].capital));
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('thailand', 'australia', 'portugal');
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

//Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Reuqest took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/thailand`),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// //Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

//Promise.any

/*
// Coding Challenge #3
// Your tasks:
// PART 1
// 1.	Write an async function 'loadNPause' that recreates Challenge #2, this time using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2.	Compare the two versions, think about the big differences, and see which one you like more
// 3.	Don't forget to test the error handler, and to set the network speed to “Fast 3G” in the dev tools Network tab

// PART 2
// 1.	Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2.	Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3.	Check out the 'imgs' array in the console! Is it like you expected?
// 4.	Use a promise combinator function to actually get the images from the array 😉
// 5.	Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// 3.jpg']. To test, turn off the 'loadNPause' function
*/

/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

// PART 2
// 1.	Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2.	Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3.	Check out the 'imgs' array in the console! Is it like you expected?
// 4.	Use a promise combinator function to actually get the images from the array 😉
// 5.	Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// 3.jpg']. To test, turn off the 'loadNPause' function

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNpause = async function (imgPath) {
  try {
    const createIm = await createImage(imgPath);
    if (!createIm) throw new Error('Something wrong with the image');
    return createIm;
  } catch (err) {
    console.log('Inside loadNpause, We have some issue with ' + err.message);
  }
};

const loadAll = async function (imgArr) {
  try {
    console.log(imgArr);
    const imgs = imgArr.map(value => loadNpause(value));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
  } catch (err) {
    console.log('Inside loadAll,We have some issue with ' + err.message);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// const data = await Promise.all([
//   getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//   getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
// ]);
//     // console.log(data.forEach(value => value[0].capital));
//     // console.log(data.map(d => d[0].capital));
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// loadNpause('img/img-1.jpg');
// loadNpause('img/img-2.jpg');
// loadNpause('img/img-3.jpg');
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Prblem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );

    if (!res.ok) throw new Error('Prblem getting location data');

    console.log(res);
    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(err);
    renderError('Something went wrong');
  }

  // fetch(`https://restcountries.eu/v2/name/${country}`);
  // console.log(res);
  // Reject promise returned from async function
  throw err;
};

console.log('1: Will get location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finsih loading'));

(async function () {
  try {
    const res = await whereAmI();
    console.log(`2: ${res}`);
  } catch (err) {
    console.error(err);
  }
  console.log('3: Finsih loading');
})();

*/
