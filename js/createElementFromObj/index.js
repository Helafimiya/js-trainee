import { deleteNodeFromLocalStorage } from "../storageMethod/index.js";
import { addCheckListner } from "./addCheckListner/index.js";

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

// создает элемент из объекта
export function createElementFromObj(obj, index) {
  const listItemNode = getListItemNode(obj);
  addDeleteListner(listItemNode, index);
  addCheckListner(listItemNode, index);
  appendListItemNode(listItemNode, obj.checked);
}
