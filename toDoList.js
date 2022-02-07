const form = document.querySelector(".new-elem");
const input = document.querySelector(".new-elem__input");
const toDoList = document.querySelector(".todo__list");
const templateToDo = document.querySelector("template");

form.addEventListener("submit", function (e) {
  //добавили обработчик событий на форму
  e.preventDefault(); //отменяем отправку формы и перезагрузку стр
  const dataInput = input.value; //находим данные строки ввода
  const node = toDoList.textContent; //находим контент списка и записываем в перем
  toDoList.textContent = dataInput; //добавляем данные из ввода в список

  const cloneList = templateToDo.content.cloneNode(true);
  document.body.appendChild(cloneList);
});
