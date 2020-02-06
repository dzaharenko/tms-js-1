class LegoMan {
  constructor({ firstName, lastName, age = 0 }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set newAge(value) {
    const date = new Date();

    this.age = value;
    this.year = date.getFullYear() - value;
  }

  get represent() {
    return `My name is ${this.firstName}. I am ${this.age} years old.`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static currentDate() {
    return new Date();
  }

  say(message) {
    console.log(`${this.fullName}: ${message}, ${LegoMan.currentDate()}`);
  }
}

// const alex = new LegoMan({ firstName: 'Alex', lastName: 'Smith' });
//
// console.log(LegoMan[Symbol.hasInstance](alex));
// console.log(alex instanceof LegoMan);
//
// console.log(alex instanceof Object);
// console.log(alex instanceof Function);
// console.log(alex instanceof Array);

class LegoBatMan extends LegoMan {
  constructor({ weight, ...props }) {
    super(props);
    this.weight = weight
  }

  say(message) {
    console.log('|\\__/|');
    super.say(message);
    console.log('|\\__/|');
  }
}

const batMan = new LegoBatMan({ firstName: 'Bat', lastName: 'Man', weight: 100 });
console.log(batMan);
batMan.say('Hi!');



// console.log(LegoMan);
// console.log(alex);
// alex.newAge = 18;
// alex.say('Hi!');
//
// const kattie = new LegoMan('Kattie');
// kattie.say('No'); // Kattie: "No"
//
// console.log(kattie);

// console.log(alex.hasOwnProperty('name'));
// console.log(alex.hasOwnProperty('say'));

// for (const key in alex) {
//   console.log(key);
// }

//
// const asyncFunc = async () => {
//   const promiseTimeout = new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         resolve('timeout');
//       }, 1000);
//     } catch (err) {
//       reject(err);
//     }
//   });
//
//   const promiseInterval = new Promise((resolve, reject) => {
//     let i = 0;
//     const interval = setInterval(() => {
//       i++;
//       if (i > 5) {
//         clearInterval(interval);
//         resolve('interval');
//       } else {
//         console.log(i);
//       }
//     }, 1000);
//   });
//
//   const fetchResult = await fetch('http://www.nbrb.by/api/exrates/rates/usd?parammode=2')
//     .then(response => response.json())
//     .then(data => data)
//     .catch(err => err.message);
//
//   const [timeoutResult, intervalResult, usdRate] = await Promise.all([
//     promiseTimeout,
//     promiseInterval,
//     fetchResult,
//   ]);
//
//   console.log(timeoutResult);
//   console.log(intervalResult);
//   console.log(usdRate);
//
//   console.log('without timeout');
//
//
// };
//
// asyncFunc();


// const div0 = document.getElementById('div0');
// const div1 = document.getElementById('div1');
// const div2 = document.getElementById('div2');
// const text = document.getElementById('text');
//
// const setData = () => {
//   text.textContent = history.state.page;
//   sessionStorage.setItem('page', JSON.stringify({ currentPage: history.state.page }));
//   localStorage.page = JSON.stringify({ currentPage: history.state.page });
// };

// if (history.state && history.state.page) {
//   setData();
// } else {
//   text.textContent = 'homepage';
// }

// div0.addEventListener('click', () => {
//   history.pushState({ page: 'page1' }, 'new', '?page=page1');
//   setData();
// });
//
// div1.addEventListener('click', () => {
//   history.pushState({ page: 'page2' }, 'new', '?page=page2');
//   setData();
// });
//
// div2.addEventListener('click', () => {
//   history.pushState({ page: 'page3' }, 'new', '?page=page3');
//   setData();
// });

// const root = document.getElementById('root');
// const newDiv1 = document.createElement('div');
// const newDiv2 = document.createElement('div');
// const newDiv3 = document.createElement('div');
//
// root.appendChild(newDiv1);
// root.appendChild(newDiv2);
// root.appendChild(newDiv3);
//
// root.insertBefore(newDiv2, newDiv1);
//
// newDiv1.innerHTML = `
//   <p>Lorem ipsum dolor sit amet.</p>
// `;
//
// newDiv2.textContent = 'Lorem ipsum!';
//
// newDiv3.textContent = 'Lorem ipsum!!!!';
//
// newDiv1.classList.add('class1');
// newDiv1.classList.add('class2');
// newDiv1.classList.add('class3');
//
// newDiv1.classList.replace('class2', 'class4');
//
// newDiv1.dataset.id = '123';
//
// newDiv1.style.margin = '5px';
//
// const compute = getComputedStyle(newDiv1);
//
// newDiv1.style.marginTop = `calc(${compute.marginTop} + 5px)`;
//
//
//
//
//
// // const object = {
// //   a1: {
// //     b1: 1,
// //     b2: {
// //       c1: 2,
// //       c2: 4,
// //     }
// //   },
// //   a2: 5,
// //   a3: {
// //     b1: 6,
// //     b2: 7,
// //   }
// // };
// //
// // const recursive = obj => {
// //   const objKeys = Object.keys(obj);
// //
// //   for (let i = 0; i < objKeys.length; i++) {
// //     const key = objKeys[i];
// //     const value = obj[key];
// //
// //     if (typeof value === 'object') {
// //       recursive(value);
// //     } else {
// //       console.log(key, value);
// //     }
// //   }
// // };
// //
// // recursive(object);
//
// // const users = [
// //   { firstName: 'John', lastName: 'Smith' },
// //   { firstName: 'Todd', lastName: 'Lee' },
// //   { firstName: 'Taylor', lastName: 'Fox' },
// // ];
// //
// // for (let i = 0; i < users.length; i++) {
// //   var user = users[i];
// //
// //   user.getFullName = (function(firstName, lastName) {
// //     return function() {
// //       return `${firstName} ${lastName}`;
// //     }
// //   })(user.firstName, user.lastName);
// // }
// //
// // console.log(users[0].getFullName()); // 'John Smith'
// // console.log(users[1].getFullName()); // 'Todd Lee'
// // console.log(users[2].getFullName()); // 'Taylor Fox'
//
//
// // const func = x => {
// //   let y = 2 + x;
// //
// //   return (z = 2) => y * z;
// // };
// //
// // const func6 = func(4);
// // const func8 = func(6);
// // const func10 = func(8);
// //
// // console.log(func6());
// // console.log(func8());
// // console.log(func10(10));
//
// // const input = document.getElementById('name');
// // const form = document.getElementById('form');
// // const result = document.getElementById('result');
// //
// // input.addEventListener('keypress', function(event) {
// //   if (event.key.length === 1) {
// //     console.log(event.target.value + event.key);
// //   }
// // });
// //
// // form.addEventListener('submit', function(event) {
// //   event.preventDefault();
// //   const inputField = document.getElementById('name');
// //   result.innerHTML = `<b>${inputField.value}</b>`;
// // });
//
// // data[i].name;
//
// // const func = function(name, lastName, age = 100) {
// //   const arr = lastName.split('');
// //   const num = 2;
// //
// //   console.log(name.replace(/[a-z]/ig, ''));
// //   // console.log(arr.join(''));
// //
// //   return `${name.toUpperCase()} ${arr}`;
// // };
// //
// // const person = func('naNe!jjj', 'lastName');
// // const person2 = func('name2', 'lastName2', 34);
// //
// // // console.log(person);
// // // console.log(person2);
//
//
// // const arr = [1, 2, 4, 5, 7, 0];
// //
// // const arrPush = arr.push('push');
// // console.log('arrPush');
// // console.log(arrPush);
// // console.log('arr');
// // console.log(arr);
// //
// // const arrUnshift = arr.unshift('unshift');
// // console.log('arrUnshift');
// // console.log(arrUnshift);
// // console.log('arr');
// // console.log(arr);
// //
// // const arrPop = arr.pop();
// // console.log('arrPop');
// // console.log(arrPop);
// // console.log('arr');
// // console.log(arr);
// //
// // const arrShift = arr.shift();
// // console.log('arrShift');
// // console.log(arrShift);
// // console.log('arr');
// // console.log(arr);
// //
// // console.log('====');
// // console.log(arr[0]);
// // console.log(arr[arr.length - 1]);
//
// // const obj = {
// //   name: 'John',
// //   lastName: 'Smith',
// //   age: 24,
// // };
// //
// // const objKeys = Object.keys(obj);
// //
// // console.log(objKeys);
// //
// // for (let i = 0; i < objKeys.length; i++) {
// //   const key = objKeys[i];
// //   const value = obj[key];
// //
// //   if (key === 'name') {
// //     console.log(`Имя: ${value}`);
// //   } else if (key === 'age') {
// //     console.log(`Возраст: ${value} года`);
// //   } else {
// //     console.log(objKeys[i]);
// //   }
// // }
//
// // for (key in obj) {
// //   console.log(`${key}: ${obj[key]}`);
// // }
//
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] === 4) {
// //     arr[i] = 'four';
// //   }
// //
// //   console.log(arr[i]);
// // }
//
// // let i = 0;
// // do {
// //   console.log('rrr');
// //   console.log(arr[i]);
// //   i++;
// // } while (i < arr.length);
//
// // console.log(arr);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // let b = 5;
// // const c = 3.11;
// //
// // b = 4;
// //
// // let d;
// //
// // console.log(d);
// //
// // const name = 'Вася';
// // const lastName = 'Р';
// //
// // let q = b + name;
// //
// // // математические операторы
// // console.log(b + c);
// // console.log(c - d);
// // console.log(d * c);
// // console.log(d / c);
// //
// // // concat
// // console.log(name + ' ' + lastName);
// // console.log(`${name} ${lastName}`);
// //
// // console.log(q);
//
//
// // const name = 'name';
//
// // let person = {
// //   name: 'Вася',
// //   lastName: 'Р',
// //   age: 24,
// //   child: [
// //     {
// //       name: 'Вася',
// //       lastName: 'Р',
// //       age: 3,
// //     },
// //   ],
// // };
//
// // person = {
// //   ...person,
// //   name: 'Леша',
// // };
// //
// // const arr = [1, 4, 67, 'name', NaN, undefined];
// //
// // console.log(arr);
// //
// // person.age = 25;
//
// // if (person.age !== 24) {
// //   console.log(person.age);
// // } else {
// //   console.log('>24');
// // }
//
// // тернарный оператор
// // console.log(
// //   person.age !== 24 && (person.name === '' || person.child.length)
// //     ? person.lastName
// //     : null
// // );
//
// // const one = ['name'];
// // const two = [];
// // let dd;
// // console.log(dd ? one[0] : two[0]);
//
// // const func = function f() {
// //   const o = 0;
// //
// //   let w;
// //
// //   if (!o) {
// //     var q = 1;
// //     w = 2;
// //
// //     q += 1;
// //     w += 1;
// //   }
// // };
// //
// // func.lastname = 'Вася';
// //
// // console.log('ddd');
// //
// // let q = 'q';
//
// // Number
// // String
// // undefined
// // null
// // object
// // Boolean
// // symbol
//
//
//
//
