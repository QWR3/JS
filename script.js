// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
// створити пустий масив, наповнити його 10 об'єктами User
// let bret = new User(1, 'Leanne', 'Graham', 'Sincere@april.biz', '1 - 770 - 736 - 8031');
// let antonette = new User(2, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010 - 692 - 6593');
// let samantha = new User(3, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1 - 463 - 123 - 4447');
// let karianne = new User(4, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623');
// let kamren = new User(5, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289');
// let leopoldo = new User(6, 'Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478');
// let elwyn = new User(7, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132');
// let maxime = new User(8, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586.493.6943');
// let delphine = new User(9, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794');
// let moriah = new User(10, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804');
// let users = [bret, antonette, samantha, karianne, kamren, leopoldo, elwyn, maxime, delphine, moriah];

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//   constructor(id, name, surname , email, phone, order) {
//       this.id = id;
//       this.name = name;
//       this.surname = surname;
//       this.email = email;
//       this.phone = phone;
//       this.order = order;
//   }
// }
//
// let bret = new Client(1, 'Leanne', 'Graham', 'Sincere@april.biz', '1 - 770 - 736 - 8031',['yabko','phone','laptop']);
// let antonette = new Client(2, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010 - 692 - 6593',['grushka','water','bycicle']);
// let samantha = new Client(3, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1 - 463 - 123 - 4447',['mouse','rebbit','TV']);
// let karianne = new Client(4, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623',['cards','Monero','book']);
// let kamren = new Client(5, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289',['Manifest','bow','tree']);
// let leopoldo = new Client(6, 'Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478',['work-book','pen']);
// let elwyn = new Client(7, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132',['manga','books']);
// let maxime = new Client(8, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586.493.6943',['homyak','coca-cola']);
// let delphine = new Client(9, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794',['dog','pepsi']);
// let moriah = new Client(10, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804',['nokia','cat']);
// let clients = [bret, antonette, samantha, karianne, kamren, leopoldo, elwyn, maxime, delphine, moriah];
// console.log(clients);
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//  об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, producer, age, speed, engine) {
//   this.model = model;
//   this.producer = producer;
//   this.age = age;
//   this.speed = speed;
//   this.engine = engine;
//   this.drive = () => {
//     console.log(`Їдемо зі швидкістю ${this.speed} на годинну`);
//   };
//   this.info = () => {
//     console.log(`model - ${this.model}`);
//     console.log(`age - ${this.age}`);
//     console.log(`speed - ${this.speed}`);
//     console.log(`engine - ${this.engine}`);
//   };
//   this.increaseMaxSpeed = (newSpeed) => {
//     this.speed = newSpeed;
//   };
//   this.changeYear = (newValue) => {
//     this.age = newValue;
//   }
//   this.addDriver = (driver = {}) => {
//     this.driver = driver
//   }
//
// }

//
// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car {
//   constructor(model, producer, age, speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.speed = speed;
//     this.engine = engine;
//   }
//
//   info() {
//     console.log(`model - ${this.model}`);
//     console.log(`age - ${this.age}`);
//     console.log(`speed - ${this.speed}`);
//     console.log(`engine - ${this.engine}`);
//   };
//
//   increaseMaxSpeed(newSpeed) {
//     this.speed = newSpeed;
//   };
//
//   changeYear(newValue) {
//     this.age = newValue;
//   }
//   addDriver(driver = {}) {
//     this.driver = driver
//   }
// }
// let volga = new Car('volga', 'GAZ', '1950', 180, '90см^3')

// 5 Взяти масив з завдання 1.
// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
// let bret = new User(1, 'Leanne', 'Graham', 'Sincere@april.biz', '1 - 770 - 736 - 8031');
// let antonette = new User(2, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010 - 692 - 6593');
// let samantha = new User(3, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1 - 463 - 123 - 4447');
// let karianne = new User(4, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623');
// let kamren = new User(5, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289');
// let leopoldo = new User(6, 'Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478');
// let elwyn = new User(7, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132');
// let maxime = new User(8, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586.493.6943');
// let delphine = new User(9, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794');
// let moriah = new User(10, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804');
// let users = [bret, antonette, samantha, karianne, kamren, leopoldo, elwyn, maxime, delphine, moriah];
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// for (var i = 0; i < users.length; i++) {
//   if (users[i].id % 2) {
//     users.splice(i, 1)
//   }
// }
// console.log(users);
// - Відсортувати його по id. по зростанню
// users.sort((a, b) => a.id - b.id)
// console.log(users);
// - Відсортувати його по id. по спаданню
//
// users.sort((a, b) => b.id - a.id)
// console.log(users);



// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

let bret = new Client(1, 'Leanne', 'Graham', 'Sincere@april.biz', '1 - 770 - 736 - 8031', ['yabko', 'phone', 'laptop']);
let antonette = new Client(2, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010 - 692 - 6593', ['grushka', 'water', 'bycicle']);
let samantha = new Client(3, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1 - 463 - 123 - 4447', ['mouse', 'rebbit', 'TV']);
let karianne = new Client(4, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623', ['cards', 'Monero', 'book']);
let kamren = new Client(5, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289', ['Manifest', 'bow', 'tree']);
let leopoldo = new Client(6, 'Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478', ['work-book', 'pen']);
let elwyn = new Client(7, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132', ['manga', 'books']);
let maxime = new Client(8, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586.493.6943', ['homyak', 'coca-cola']);
let delphine = new Client(9, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794', ['dog', 'pepsi']);
let moriah = new Client(10, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804', ['nokia', 'cat', 'phone', 'laptop']);
let clients = [bret, antonette, samantha, karianne, kamren, leopoldo, elwyn, maxime, delphine, moriah];
clients.sort((a, b) =>
  b.order.length - a.order.length)
console.log(clients);
