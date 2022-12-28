'use strict';
/*
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a method inside a contructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

//1. New {} is created
//2. function is called, this = new empty Object
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);

//The prototype properties of the constructor is going to be the prototype of all the ojbects created by that contructor
// Coding Challenge #1
// Your tasks:
// 1.	Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2.	Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
// 3.	Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
// 4.	Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// §	Data car 1: 'BMW' going at 120 km/h
// §	Data car 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

console.log(car1.accelerate());
console.log(car1);
console.log(car2.brake());
console.log(car2);
*/

/////////////////////////////////////////////////////////
/////////////////////////////ES6 Classes
/*Note 
- Class are not hoisted
- Class are  first-class citizens
- body of the class are executed in strict mode
*/
//class expression
// const PersonCl = class {};

// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Write inside the class but outside of the constructor
//   //This will be added to .proptotype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(this.firstName);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else console.log(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullname;
//   }

//   static hey() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// // console.log(jessica);
// // jessica.calcAge();

// // PersonCl.prototype.greet = function () {
// //   console.log(this.firstName);
// // };

// /////////////////////////////////////////////////////////
// /////////////////////////////Getter and Setter

// const walter = new PersonCl('Walter', 1965);
// // console.log(walter);

// // PersonCl.hey();

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set lastest(mov) {
//     this.movements.push(mov);
//   },
// };

// // console.log(account.latest);

// account.lastest = 50;
// // console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2012;
// // steven.calcAge();

// const sarah = Object.create(PersonProto);

///Exampel from coding challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//   return (this.speed += 10);
// };

// Car.prototype.brake = function () {
//   return (this.speed -= 5);
// };

// Coding Challenge #2
// Your tasks:
// 1.	Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2.	Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3.	Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4.	Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
//  Data car 1: 'Ford' going at 120 km/h

// class Carcl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     return (this.speed += 10);
//   }

//   brake() {
//     return (this.speed -= 5);
//   }

//   get speedUs() {
//     return (this.speed = this.speed / 1.6);
//   }

//   set speedUs(newSpeed) {
//     this.speed = newSpeed * 1.6;
//   }
// }

// const CarF = new Carcl('Ford', 120);

// console.log(CarF.accelerate());
// console.log(CarF.brake());
// console.log(CarF.accelerate());
// console.log(CarF.speedUs);

// CarF.speedUs = 130;
// console.log(CarF);

//////////////////////////////////////////////////
///////////////////Inheritance between "Classes"
/*Note
 - Basically prototype chain
 - Doesn't matter how far away the proptotype is, For example student can call hasownproperty
*/
/////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Scienece');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__.__proto__.__proto__);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Coding Challenge #3
// Your tasks:
// 1.	Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'.
// Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2.	Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3.	Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
// Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4.	Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
// Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
//  Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);

// 2.	Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3.	Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
// Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};
//  Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
const carA = new Ev('Tesla', 120, 23);
carA.accelerate();

carA.accelerate();
// 4.	Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
// Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
*/

///////////////////////////////////////////////////////////////////////
/////////////// Inhertiance Between "Classes": ES6 Classes//////////////
///////////////////////////////////////////////////////////////////////
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Write inside the class but outside of the constructor
  //This will be added to .proptotype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(this.fullName);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('HEY THERE MATE');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am  ${2037 - this.birthYear + 10} `);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

///////////////////////////////////////////////////////////////////////
/////////////// Encapsulation: Private Class Field and methods //////////////
///////////////////////////////////////////////////////////////////////
/* */

class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface(){
  getMovements() {
    return this.#movements;
  }
  // 3) Public methods
  //Public interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  //4 Private Methods
  //There is also the static version
  // #approveLoan(val) {
  //   return true;
  // }

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

// console.log(acc1.#approveLoan(100));

Account.helper();

//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);



Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};
*/

// Coding Challenge #4
// Your tasks:
// 1.	Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2.	Make the 'charge' property private
// 3.	Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the
// 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Test data:
//  Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
//  Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
const car1 = new EVCl('Rivian', 120, 23);

car1
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
