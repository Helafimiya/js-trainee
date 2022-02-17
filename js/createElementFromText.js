import {
  deleteNodeFromLocalStorage,
  updateItemInStorage,
} from "./storageMethod.js";

// получаем ноду с вставленым текстом
function getListItemNode(obj) {
  const template = document.querySelector("template");
  const cloneTemplate = template.content
    .querySelector(".todo__item")
    .cloneNode(true);
  cloneTemplate.querySelector("span").textContent = obj.task;
  cloneTemplate.querySelector(".todo__checkBox").checked = obj.checked;
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

// добавляет обработчик событий на чексбокс
function addCheckListner(node, index) {
  const checkBox = node.querySelector(".todo__checkBox");

  checkBox.addEventListener("change", function (event) {
    const isChecked = event.currentTarget.checked; // читает значение чекбокса
    const text = node.querySelector("span").textContent;
    updateItemInStorage(index, text, isChecked);
  });
}

// вставляет элемент в список дома
function createElement(node) {
  const toDoList = document.querySelector(".todo__list");
  toDoList.append(node);
}

// создает элемент из объекта
export function createElementFromObj(obj, index) {
  const listItemNode = getListItemNode(obj);
  addDeleteListner(listItemNode, index);
  addCheckListner(listItemNode, index);
  createElement(listItemNode, index);
}
