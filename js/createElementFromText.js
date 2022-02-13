// получаем ноду с вставленым текстом
function getListItemNode(text) {
  const template = document.querySelector("template");
  const cloneTemplate = template.content
    .querySelector(".todo__item")
    .cloneNode(true);
  cloneTemplate.querySelector("span").textContent = text;

  return cloneTemplate;
}

// вставляет элемент в список дома
function createElement(node) {
  const toDoList = document.querySelector(".todo__list");
  toDoList.append(node);
}

// создает элемент из текста
export function createElementFromText(text) {
  createElement(getListItemNode(text));
}
