import { updateItemInStorage } from "../../storageMethod/index.js";

/**
 * рендер в разные списки, в зависимости от состояния чекбокса
 * @param {object} listItemNode
 * @param {boolean} isChecked
 * @returns {void}
 */
export function appendListItemNode(listItemNode, isChecked) {
  const toDoListUndone = document.querySelector("#todo-list-undone");
  const todoListDone = document.querySelector("#todo-list-done");

  if (isChecked === true) {
    todoListDone.append(listItemNode);
  } else {
    toDoListUndone.append(listItemNode);
  }
}

/**
 * переносит ноду в другой список при клике
 * @param {object} listItemNode
 * @param {boolean} isChecked
 * @returns {void}
 */
function moveNodeInAnotherList(listItemNode, isChecked) {
  listItemNode.remove();
  appendListItemNode(listItemNode, isChecked);
}

/**
 * добавляет обработчик событий на чексбокс
 * @param {object} node
 * @param {number} index
 * @returns {void}
 */
export function addCheckListner(node, index) {
  const checkBox = node.querySelector(".todo__checkBox");

  checkBox.addEventListener("change", function (event) {
    const isChecked = event.currentTarget.checked; // читает значение чекбокса
    const text = node.querySelector("span").textContent;

    updateItemInStorage(index, text, isChecked);
    moveNodeInAnotherList(node, isChecked);
  });
}
