let key = 'lists';
let form = document.forms.form
let btn = document.getElementById("btn")
let {
  name,
  number,
  price,
  image
} = form;
let save = (name, number, price, image) => {
  let lists = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  console.log(lists);
  let listsCopy = JSON.parse(JSON.stringify(lists));
  let id = listsCopy.length ? listsCopy.sort((a, b) => a.id - b.id).pop().id : 0;
  lists.push({
    id: id + 1,
    name: name,
    number: number,
    price: price,
    image: image
  })
  console.log(lists);
  localStorage.setItem(key, JSON.stringify(lists));
}



form.onsubmit = (e) => {
  e.preventDefault();
  save(name.value, number.value, price.value, image.value);
}
