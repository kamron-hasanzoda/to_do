let cont = document.querySelector('.container')
let form = document.forms.sub;
let todos = [];

function create(place, id, arr) {
  place.innerHTML = ''
  for (let itemm of arr) {
    let item = document.createElement("div");
    let two = document.createElement("div");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let item_id = 0

    item.classList.add("item");
    two.classList.add("two");

    img.src = "./img/close.svg";
    h1.innerHTML = itemm.task;
    p.innerHTML = itemm.time;
    item_id = id
    console.log(todos);

    img.onclick = () => {
      item.style.scale = '0.5'
      item.style.transition = '1s ease'
      if (item_id != arr.forEach(i => i.id)) {
        item.remove()
        todos = todos.filter(el => el.id != item_id)
      } else {
        alert('err')
      }
    }

    let truee = false

    if (truee = false) {
      h1.classList.remove('active')
    } else {
      h1.classList.add('active')
    }

    h1.onclick = () => {
      truee = true
      h1.onclick = () => {
        truee = false
      }
    }

    if (truee == true) {
      h1.classList.add('active')
    } else {
      h1.classList.remove('active')
    }

    item.append(two, p);
    two.append(h1, img);
    place.append(item);
  }
}

form.onsubmit = (event) => {
  event.preventDefault();

  let task = {
    id: Math.random(),
    isDone: false,
    time: new Date().getHours() + ":" + new Date().getMinutes()
  };

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    task[key] = value;
  });

  todos.push(task);
  create(cont, task.id, todos);
};
