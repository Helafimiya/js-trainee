import { getDataListFromStorage } from "../storageMethod/index.js";
import { createElementFromObj } from "../createElementFromObj/index.js";

/**
 *для каждого элемента массива вызывает createElement
 * @param {Array} dataList
 * @returns {void}
 */
function renderList(dataList) {
  for (let i = 0; i < dataList.length; i++) {
    const dataObj = dataList[i];
    createElementFromObj(dataObj, i);
  }
}

/**
 * зарендерить старые данные при загрузке страницы
 */
document.addEventListener("DOMContentLoaded", () =>
  renderList(getDataListFromStorage())
);
