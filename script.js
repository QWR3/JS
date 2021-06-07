// 1) створити функцію яка приймає масив та виводить його
// let arr=[1,2,3,4,5]
// function log(arr) {
//   console.log(arr);
// }
// log(arr)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function log(arr) {
//   console.log(arr);
// }
//
// function rundom(how_much) {
//   let arr_rundom = []
//   for (let i = 0; i < how_much; i++) {
//     arr_rundom[i] = Math.round(Math.random() * 100);
//   }
//   log(arr_rundom)
// }
// rundom(5);
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(one, two, three) {
//   let arr = []
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   console.log(arr.sort(function(a, b) {
//     return a - b
//   })[0]);
// }
// min(23, 345, 76, 676, 34, 987, 10000);
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(one, two, three) {
//   let arr = []
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   console.log(arr.sort(function(a, b) {
//     return b - a
//   })[0])
// }
// max(23, 345, 76, 676, 34, 987, 10000);
// 5) створити функцію яка повертає найбільше число з масиву
// function max(arr=[]) {
//   return (arr.sort(function(a, b) {
//     a - b
//   })[0])
// }
// one_of_max = max([23, 345, 76, 676, 34, 987, 10000]);
// console.log(one_of_max);
// 6) створити функцію яка повертає найменьше число з масиву
// function max(arr=[]) {
//   return (arr.sort(function(a, b) {
//     b - a
//   })[0])
// }
// one_of_max = max([23, 345, 76, 676, 34, 987, 10000]);
// console.log(one_of_max);
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sum(arr) {
//   let add = 0;
//   for (let variable of arr) {
//     add +=variable
//   }
//   return add
// }
// result =sum([1,2,3,4,5])
// console.log(result);
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function ser_ar(arr) {
//   let add = 0;
//   for (let variable of arr) {
//     add += variable
//   }
//   return add / arr.length
// }
// result = ser_ar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(result);
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function find_key(arr) {
//   let key = []
//   for (let obj of arr) {
//     for (let variable in obj) {
//       key.push(variable)
//     }
//   }
//   return key
// }
// result = find_key([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(result);
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function find_obj(arr) {
//   let result = []
//   for (let obj of arr) {
//     for (let key in obj) {
//       result.push(obj[key])
//     }
//   }
//   return result
// }
// result = find_obj([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(result);
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function extra_sum(arr1, arr2) {
  let result = []
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i])
  }
  return result
}

let result = extra_sum([1, 2, 3, 4], [2, 3, 4, 5])
console.log(result);
