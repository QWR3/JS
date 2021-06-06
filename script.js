// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let number = [1, 2, 3, 4, 5];
// let string = ['a', 'b', 'c', 'd', 'e'];
// let all = [1, 'a', true, 2, 'b']
// console.log(`number - ${number} | string - ${string} | all - ${all}`);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[99] = 100;
// console.log(arr);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div>tu-tu tu tu-tu-tu</div><br><hr>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div>index-${i}</div><br><hr>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//   document.write(`<h1>tu-tu tu tu-tu-tu</h1><br><hr>`)
//   i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//   document.write(`<h1>index-${i}</h1><br><hr>`)
//   i++
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [0, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['q','a','z','w','s','x','e','d','c','r']
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [0, 'a', true, 'b', 2, false, 'true', '1', 5, 'r']
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [0, 'a', true, 'b', 2, false, 'true', '1', 5, 'r']
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'boolean') {
//     console.log(arr[i])
//   }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [0, 'a', true, 'b', 2, false, 'true', '1', 5, 'r']
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number') {
//     console.log(arr[i])
//   }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [0, 'a', true, 'b', 2, false, 'true', '1', 5, 'r']
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string') {
//     console.log(arr[i])
//   }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     arr[i] = Math.floor(Math.random() * 100)
//   }else{
//     arr[i] = (Math.random()*100).toFixed()
//   }
//   console.log(arr[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   document.write(i + ' ')
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   document.write(i + ' ')
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//   console.log(i);
//   document.write(i + ' ')
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if (i%2 === 0) {
//     console.log(i);
//     document.write(i);
//   }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if (i%2) {
//     console.log(i);
//     document.write(i);
//   }
// }
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithId = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false
  },
  {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
  },
  {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true
  },
  {
    id: 4,
    name: 'olya',
    age: 28,
    status: false
  }
];
let citiesWithId = [{
    user_id: 3,
    country: 'USA',
    city: 'Portland'
  },
  {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
  },
  {
    user_id: 2,
    country: 'Poland',
    city: 'Krakow'
  },
  {
    user_id: 4,
    country: 'USA',
    city: 'Miami'
  }
];
let usersWithCities = [];
for (let index = 0; index < usersWithId.length; index++) {
  // console.log(usersWithId[index]);
  usersWithCities.push(usersWithId[index]);
  for (let i = 0; i < citiesWithId.length; i++) {
    if (usersWithId[index].id === citiesWithId[i].user_id) {
      usersWithCities[index].address = citiesWithId[i];
      // console.log(citiesWithId[i])

    }
  }
}
// console.log('***************************************');
console.log(usersWithCities);
