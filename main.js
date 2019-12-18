const input = document.getElementById('name');
const form = document.getElementById('form');
const result = document.getElementById('result');

input.addEventListener('keypress', function(event) {
  if (event.key.length === 1) {
    console.log(event.target.value + event.key);
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputField = document.getElementById('name');
  result.innerHTML = `<b>${inputField.value}</b>`;
});

// data[i].name;

// const func = function(name, lastName, age = 100) {
//   const arr = lastName.split('');
//   const num = 2;
//
//   console.log(name.replace(/[a-z]/ig, ''));
//   // console.log(arr.join(''));
//
//   return `${name.toUpperCase()} ${arr}`;
// };
//
// const person = func('naNe!jjj', 'lastName');
// const person2 = func('name2', 'lastName2', 34);
//
// // console.log(person);
// // console.log(person2);


// const arr = [1, 2, 4, 5, 7, 0];
//
// const arrPush = arr.push('push');
// console.log('arrPush');
// console.log(arrPush);
// console.log('arr');
// console.log(arr);
//
// const arrUnshift = arr.unshift('unshift');
// console.log('arrUnshift');
// console.log(arrUnshift);
// console.log('arr');
// console.log(arr);
//
// const arrPop = arr.pop();
// console.log('arrPop');
// console.log(arrPop);
// console.log('arr');
// console.log(arr);
//
// const arrShift = arr.shift();
// console.log('arrShift');
// console.log(arrShift);
// console.log('arr');
// console.log(arr);
//
// console.log('====');
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// const obj = {
//   name: 'John',
//   lastName: 'Smith',
//   age: 24,
// };
//
// const objKeys = Object.keys(obj);
//
// console.log(objKeys);
//
// for (let i = 0; i < objKeys.length; i++) {
//   const key = objKeys[i];
//   const value = obj[key];
//
//   if (key === 'name') {
//     console.log(`Имя: ${value}`);
//   } else if (key === 'age') {
//     console.log(`Возраст: ${value} года`);
//   } else {
//     console.log(objKeys[i]);
//   }
// }

// for (key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     arr[i] = 'four';
//   }
//
//   console.log(arr[i]);
// }

// let i = 0;
// do {
//   console.log('rrr');
//   console.log(arr[i]);
//   i++;
// } while (i < arr.length);

// console.log(arr);




























// let b = 5;
// const c = 3.11;
//
// b = 4;
//
// let d;
//
// console.log(d);
//
// const name = 'Вася';
// const lastName = 'Р';
//
// let q = b + name;
//
// // математические операторы
// console.log(b + c);
// console.log(c - d);
// console.log(d * c);
// console.log(d / c);
//
// // concat
// console.log(name + ' ' + lastName);
// console.log(`${name} ${lastName}`);
//
// console.log(q);


// const name = 'name';

// let person = {
//   name: 'Вася',
//   lastName: 'Р',
//   age: 24,
//   child: [
//     {
//       name: 'Вася',
//       lastName: 'Р',
//       age: 3,
//     },
//   ],
// };

// person = {
//   ...person,
//   name: 'Леша',
// };
//
// const arr = [1, 4, 67, 'name', NaN, undefined];
//
// console.log(arr);
//
// person.age = 25;

// if (person.age !== 24) {
//   console.log(person.age);
// } else {
//   console.log('>24');
// }

// тернарный оператор
// console.log(
//   person.age !== 24 && (person.name === '' || person.child.length)
//     ? person.lastName
//     : null
// );

// const one = ['name'];
// const two = [];
// let dd;
// console.log(dd ? one[0] : two[0]);

// const func = function f() {
//   const o = 0;
//
//   let w;
//
//   if (!o) {
//     var q = 1;
//     w = 2;
//
//     q += 1;
//     w += 1;
//   }
// };
//
// func.lastname = 'Вася';
//
// console.log('ddd');
//
// let q = 'q';

// Number
// String
// undefined
// null
// object
// Boolean
// symbol




