import { getDataListFromStorage } from "./storageMethod.js";
import { createElementFromText } from "./createElementFromText.js";

// для каждого элемента массива вызывает createElement
function renderList(dataList) {
  for (let i = 0; i < dataList.length; i++) {
    createElementFromText(dataList[i]);
  }
}

// зарендерить старые данные при загрузке страницы
document.addEventListener("DOMContentLoaded", () =>
  renderList(getDataListFromStorage())
);
