// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// //     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let main_header = document.getElementById("main_header")
// // console.log(main_header);
// main_header.style.color = "april-2021"
// //     b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName("ul")[0];
// // console.log(ul);
// ul.style.width = "400px";
// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName("linkList");
// for (var variable of linkList) {
//   variable.style.width = "50%";
//
// }
// // console.log(linkList);
// //     d) отримує текст який зберігається в елементі з класом listElement2
// function text_in_listElement2(string = "") {
//   let listElement2 = document.getElementsByClassName("listElement2")[0];
//   listElement2.innerText = string;
//   // console.log(listElement2);
// }
// text_in_listElement2("tu-tu_tu_tu-tu-tu")
//
// //     e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName("li");
// for (var variable of li) {
//   variable.style.background = "rgb(144, 144, 144)";
// }
// // console.log(li);
// //     f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName("a");
// for (var variable of a) {
//   variable.className = "anchor";
// }
// // console.log(a[0]);
// //     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// // let a = document.getElementsByTagName("a");
// for (let variable of a) {
//   if (variable.innerText === "link3") {
//     // console.log(variable);
//     variable.style.fontSize = "40px"
//   }
// }
// //     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// // let a = document.getElementsByTagName("a");
// for (let variable of a) {
//   let element_xxx = `element_${variable.innerText}`
//   variable.classList.add(element_xxx);
//   console.log(variable.classList);
// }
// //     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt("background color")
// let subHeader = document.getElementsByClassName("sub-header");
// for (let variable of subHeader) {
//   variable.style.background = color;
// }
// console.log(subHeader);
//
// //     j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color2 = prompt("color")
// // let subHeader = document.getElementsByClassName("sub-header");
// for (let variable of subHeader) {
//   if (variable.innerText === "content 2 segment") {
//     variable.style.color = color2;
//   }
// }
// //     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let prompt_text = prompt("text");
// let content_1 = document.getElementsByClassName("content_1");
// for (let variable of content_1) {
//   variable.innerText = prompt_text;
// }
// //     l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByTagName("p");
// for (let variable of p) {
//   variable.style.padding = "20px";
// }
// //     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2 = document.getElementsByClassName("text2");
// for (let variable of text2) {
//   variable.innerText = "april-2021";
// }
//
// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
// let form = document.getElementById("form");
// if (form) {
//   let name = form.name;
//   let surname = form.surname;
//   form.onsubmit = function(e) {
//     // e.preventDefault();
//     let user = {
//       name: name.value,
//       surname: surname.value
//     }
//     localStorage.setItem("user", JSON.stringify(user));
//
//   }
// }
// let div = document.getElementById("div");
//
// if (div) {
//   console.log(div);
//   let parse_users = JSON.parse(localStorage.getItem("user"))
//   console.log(parse_users);
//   div.innerText = `name - ${parse_users.name} , surname - ${parse_users.surname}`
// }


//
// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//
let form2 = document.getElementById("form2");

if (form2) {
  let lists = []
  form2.addEventListener("submit", (e) => {
    let name = form2.name.value;
    let number = form2.number.value;
    let price = form2.price.value;
    let image = form2.image.value;
    e.preventDefault()
    let list = {
      name: name,
      number: number,
      price: price,
      image: image
    }
    lists.push(list);
    localStorage.setItem("lists", JSON.stringify(lists))
    console.log(name, number, price, image);
    console.log(lists);
    console.log('aaaaaaaa');
  })

}
let list_html = document.getElementById("list_html");
let remove_all = document.getElementById("remove_all");
if (list_html) {
  let lists = JSON.parse(localStorage.getItem('lists'));
  if (lists) {
    for (let variable of lists) {
      console.log(variable);
      // tags.push(variable)
      for (let tag in variable) {
        console.log("*************");
        console.log(tag);
        console.log(variable[tag]);
        console.log("*************");
        let newDiv = document.createElement("div");
        list_html.appendChild(newDiv)
        newDiv.innerText = `${tag} - ${variable[tag]}`
      }
      let for_best_reading = document.createElement("div");
      list_html.appendChild(for_best_reading)
      for_best_reading.innerText = `*******************************`
    }
    remove_all.addEventListener("click", (e) => {
      localStorage.clear();
      location = location;
    })
  }
}
