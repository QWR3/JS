// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let functionName(x, y) =>
//   s x * y;
// - створити функцію яка обчислює та повертає площу кола
// let functionName(r) =>
//    2 * 3.14 * r;
// - створити функцію яка обчислює та повертає площу циліндру
// let functionName = (r, h) => 2 * 3.14 * r * h;
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function functionName() {
//   arr = []
//   for (var variable in arguments) {
//     arr.push(arguments[variable])
//   }
//   sort = arr.sort(function(a, b) {
//     return a - b;
//   })
//   console.log(sort.pop());
//   return sort[0]
// }
// let result = functionName(54, 12, 443, 1000, 2);
// console.log(result);
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// function functionName(arr, i) {
//   arr.splice(i, 2, arr[i + 1], arr[i]);
//   return arr;
// }
// result = functionName([9,8,0,4], 2);
// console.log(result);
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function functionName(arr = [0, 1, 2]) {
//   zero = [];
//   x=0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i-x] === 0) {
//       zero.push(i-x)
//       arr.splice(i - x, 1)
//       x++
//     }
//   }
//   for (let i = 0; i < zero.length; i++) {
//     arr.push(0)
//   }
//   return arr
// }
//
// result = functionName([0,0,1,0]);
// console.log(result);
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let functionName = (str) => str.trim();
// let result = functionName('    Harry       Potter      ');
// console.log(result);
