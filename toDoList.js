const form = document.querySelector(".new-elem");
const input = document.querySelector(".new-elem__input");
const template = document.querySelector("template");

function inputTextTemplate(text) {
  const cloneTemplate = template.content
    .querySelector(".todo__item")
    .cloneNode(true);
  cloneTemplate.querySelector("span").textContent = text;

  return cloneTemplate;
}

function createElement(node) {
  const toDoList = document.querySelector(".todo__list");
  toDoList.append(node);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // останавливает передачу на сервер

  const result = inputTextTemplate(input.value);
  createElement(result);
});

// объявить функцию
// в теле функции найти и клонировать шаблон списка
// в клоне найти span и добавить ему текстовое содержимое из input'а
// добавить обработчик событий на form
// записать в (аргументы) тип события - "submit"
// и функцию, которая запустится после срабатывания события
// в теле обработчика записать метод preventDefault(), приостанавливающий отправку на сервер

//написать функцию, кот. будет принимать ноду и вставлять ее в конец ул
