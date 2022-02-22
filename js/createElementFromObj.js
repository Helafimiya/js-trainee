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

// рендер в разные списки, в зависимости от состояния чекбокса
function appendListItemNode(listItemNode, isChecked) {
  const toDoListUndone = document.querySelector("#todo-list-undone");
  const todoListDone = document.querySelector("#todo-list-done");

  if (isChecked === true) {
    todoListDone.append(listItemNode);
  } else {
    toDoListUndone.append(listItemNode);
  }
}

// переносит ноду в другой список при клике
function moveNodeInAnotherList(listItemNode, isChecked) {
  listItemNode.remove();
  appendListItemNode(listItemNode, isChecked);
}

// добавляет обработчик событий на чексбокс
function addCheckListner(node, index) {
  const checkBox = node.querySelector(".todo__checkBox");

  checkBox.addEventListener("change", function (event) {
    const isChecked = event.currentTarget.checked; // читает значение чекбокса
    const text = node.querySelector("span").textContent;

    updateItemInStorage(index, text, isChecked);
    moveNodeInAnotherList(node, isChecked);
  });
}

// создает элемент из объекта
export function createElementFromObj(obj, index) {
  const listItemNode = getListItemNode(obj);
  addDeleteListner(listItemNode, index);
  addCheckListner(listItemNode, index);
  appendListItemNode(listItemNode, obj.checked);
}
