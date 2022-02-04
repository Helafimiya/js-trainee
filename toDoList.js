const form = document.querySelector(".new-elem");
const input = document.querySelector(".new-elem__input");
const toDoList = document.querySelector(".todo__list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const dataInput = input.value;
  const node = toDoList.textContent;
  toDoList.textContent = dataInput;
});

//найти список
//добавить в этот список данные из инпута внутри обработчика
