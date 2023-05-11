let cont = document.querySelector('.container')
let form = document.forms.sub;
let todos = [];

function create(arr, place) {
  place.innerHTML = ''
  for (let itemm of arr) {
    let item = document.createElement("div");
    let two = document.createElement("div");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let p = document.createElement("p");

    item.classList.add("item");
    two.classList.add("two");

    item.style.scale = '0.5'
    setTimeout(() => {
      item.style.transition = '1s ease'
      item.style.scale = '1'
    }, 100);

    img.src = "./img/close.svg";
    h1.innerHTML = itemm.task;
    p.innerHTML = itemm.time;

    if (itemm.isDone === true) {
      h1.classList.add('active')
    }

    h1.onclick = () => {
      itemm.isDone = !itemm.isDone
      create(todos, cont  )
    }

    img.onclick = () => {
      item.style.scale = '0.5'
      item.style.transition = '1s ease'
      if (itemm.id != arr.forEach(i => i.id)) {
        todos = todos.filter(el => el.id != itemm.id)
        setTimeout(() => {
          item.remove()
        }, 400);
      }
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
  create(todos, cont);
};