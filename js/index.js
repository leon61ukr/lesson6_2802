// // loop with counter
// for (let i = 100; i>=1; i--) {
//     document.write(i);
//     document.write('<br>');
// }  

// loop with counter 100-1 na2
// for (let i = 100; i > 0; i-=1) {
//     if (i % 2 === 0)
//     document.write(i);
//     document.write('<br>');
// }  

// loop with counter
// for (let i = 100; i > 0; i-=1) {
//     if (i % 2 !== 0) {
        
//     } 
//     document.write(i);
//     document.write('<br>');
// }  
// loop with counter 100-2
// for (let i = 100; i > 0; i-=1) {
//     if (i % 2 !== 0) {
//         continue;
//     } 
//     document.write(i);
//     document.write('<br>');
// }  
//while 0-100
// let i = 0;
// while (i <= 100) {
//     document.write(i + '<br>');
//     i++;
// }
// 
// 
// let i = 0;
// do {
//     document.write(i + '<br>');
//     i++;
// } while (i <= 100);

// function prn(value) {
//     document.write(value + '<br>');
// }

// let cars = ['BMW X7', 'Toyota Corolla'];
// cars[2] = 'ZAZ Sens';
// cars.push('Skoda Fabia');
// prn(cars.length);
// cars[10] = 'Mercedes Vito';
// prn(cars.length);


// //undefined
// function prn(message) {
//     document.write(message + '<br>');
// }
// let cars = ['BMW X7', 'Toyota Corolla'];
// cars[2] = 'ZAZ Sens';
// cars.push('Skoda Fabia');
// prn(cars.length);
// cars[10] = 'Mercedes Vito';
// prn(cars);

// for (let i = 0; i < cars.length; i++) {
//     prn(cars[i]);
// }

// function prn(message) {
//     document.write(message + '<br>');
// }

// let cars = ['BMW X7', 'Toyota Corolla'];
// cars[2] = 'ZAZ Sens';
// cars.push('Skoda Fabia');
// prn(cars.length);
// cars[10] = 'Mercedes Vito';
// prn(cars.length);

// //без дир буде вивід масиву
// cars.forEach(prn);

// cписок виділений жирним
// function prn(message) {
//     document.write(message + '<br>');
// }

// let cars = ['BMW X7', 'Toyota Corolla'];
// cars[2] = 'ZAZ Sens';
// cars.push('Skoda Fabia');
// prn(cars.length);
// cars[10] = 'Mercedes Vito';
// prn(cars.length);

// cars.forEach(function(el) {
//   const formattedEl = '<b>' + el + '</b>';
//   prn(formattedEl);
// });

// приклад 3
// function prn(message) {
//     document.write(message + '<br>');
// }

// let cars = ['BMW X7', 'Toyota Corolla'];
// cars[2] = 'ZAZ Sens';
// cars.push('Skoda Fabia');
// prn(cars.length);
// cars[10] = 'Mercedes Vito';
// prn(cars.length);

// cars.forEach(function(el) {
//   const formattedEl = '<b>' + el + '</b>';
//   prn(formattedEl);
// });
// cars.forEach( el => prn(`<b>${el}</b>`) );

// prn(cars.sort());

// let nums = [];
// for (let i = 0; i < 100; i++) {
//     nums.push(i);
// }
// prn( nums.sort() );
// prn( nums.sort( (a, b) => a - b ) );

// //yjdbq ghbrkfl
// function prn(message) {
// document.write(message + '<br>');
// }

// let myCars = {
// 	everyday: 'Nissan Leaf',
// 	offroad: 'Jeep Wrangler',
// 	speed: 'Ferrari La Ferrari'
// };
// //prn(myCars['offroad']);
// myCars['favourite'] = 'Ford Mustang';

// let counter = 0;
// for (let key in myCars) {
// 	prn(myCars[key]);
// 	counter++
// }
// prn('Number of items: ' + counter);

// let mustang = {
//     color: 'Red'
// };
// mustang.year = 1999;
// mustang.sound = function() {
// 	prn('Beep-beep');
// }

// mustang.year = 1999;
// mustang.sound = function() {
//     prn(mustang.name + ': Beep-beep');
// }

// mustang.sound();
//00000000000000000000000000000
function prn(message) {
    document.write(message + '<br>');
}

let myCars = {
    everyday: 'Nissan Leaf',
    offroad: 'Jeep Wrangler',
    speed: 'Ferrari LaFerrari'
};

myCars['favourite'] = 'Ford Mustang';

let counter = 0;
for (let key in myCars) {
    prn(myCars[key]);
    counter++;
}

prn('Number of items: ' + counter);

let mustang = {
    color: 'Red',
    name: 'Mustang'
};
mustang.year = 1999;
mustang.sound = function() {
    prn(this.name + ': Beep-beep');
}

mustang.sound();
function Car(name, color, year) {
    this.name = name;
    this.color = color;
    this.year = year;
    this.sound = function() {
        prn(this.name + ': Beep-beep');
    }  
}

let leaf = new Car('Leaf', 'blue', 2015);
leaf.sound();

let mitsubX = new Car('Lancex Evo X', 'green', 2017);
mitsubX.sound();

let hummer = new Car('Hummer', 'yellow', 2007);
hummer.sound();

let myGarage = [mustang, leaf, hummer];

prn(myGarage[1].color);

class SuperCar {
    constructor (name, color, year) {
        this.name = name;
        this.color = color;
        this.year = year;
    }
    sound() {
        prn(this.name + ': Beep-beep');
    }  
}

let ferrari = new SuperCar('LaFerrari', 'red', 2017);
ferrari.sound();

let ferrariCalifornia = Object.create(ferrari);
ferrariCalifornia.name = 'California';
ferrariCalifornia.sound();
prn(ferrariCalifornia.color);