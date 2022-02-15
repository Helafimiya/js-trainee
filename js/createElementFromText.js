import { deleteNodeFromLocalStorage } from "./storageMethod.js";

// получаем ноду с вставленым текстом
function getListItemNode(text) {
  const template = document.querySelector("template");
  const cloneTemplate = template.content
    .querySelector(".todo__item")
    .cloneNode(true);
  cloneTemplate.querySelector("span").textContent = text;

  return cloneTemplate;
}

// Добавляет в ноду удаление со страницы и удаление соответсвующего индексу элемента из storage
function addDeleteListner(node, index) {
  const btnDeleteNode = node.querySelector(".todo__delete-btn");

  btnDeleteNode.addEventListener("click", () => {
    node.remove();
    deleteNodeFromLocalStorage(index);
  });
}

// вставляет элемент в список дома
function createElement(node, index) {
  const toDoList = document.querySelector(".todo__list");
  addDeleteListner(node, index);

  toDoList.append(node);
}

// создает элемент из текста
export function createElementFromText(text, index) {
  const listItemNode = getListItemNode(text);
  createElement(listItemNode, index);
}
