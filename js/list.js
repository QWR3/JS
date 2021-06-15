let key = "lists";
let lists = JSON.parse(localStorage.getItem(key));
console.log(lists);
let fatherDiv = document.getElementById("div");
let removeAll = document.getElementById("removeAll");

const showLists = () => {
  let lists = JSON.parse(localStorage.getItem(key));
  if (!lists) {
    let empty = document.createElement("h2");
    empty.innerText = "ТутЬ ни-ко-го нетЬ";
    fatherDiv.append(empty);
    return
  }
  for (let list of lists) {
    let nameE = document.createElement("h3");
    let numberE = document.createElement("h3");
    let priceE = document.createElement("h3");
    let imgE = document.createElement("img");
    let btn = document.createElement("button");
    let forBestReadingE = document.createElement("h3");
    btn.innerText = "delete this element";
    let {
      name,
      number,
      price,
      image,
      id
    } = list;
    btn.onclick = () => {
      removeThis(id)
    }
    nameE.innerText = `name : ${name}`;
    numberE.innerText = `number : ${number}`;
    priceE.innerText = `price : ${price}`;
    imgE.src = image;
    fatherDiv.append(nameE, numberE, priceE, imgE, forBestReadingE, btn);
  }
}
removeAll.onclick = () => {
  localStorage.clear();
  location.reload();
}

function removeThis(id) {
  let lists = JSON.parse(localStorage.getItem(key));
  let filterLists = lists.filter(value => value.id !== id);
  localStorage.setItem(key, JSON.stringify(filterLists));
  fatherDiv.innerHTML = '';
  showLists();
}
showLists();
