import { saveInputValue } from "../storageMethod/index.js";
import { createElementFromObj } from "../createElementFromObj/index.js";

/**
 * сохранение формы
 */
const form = document.querySelector(".new-elem");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // останавливает передачу на сервер
  const input = document.querySelector(".new-elem__input");

  //переменная с объектом, в котором будет храниться текст и значение чекбокса
  const objWithTextAndCheckbox = {
    task: input.value,
    checked: false,
  };

  const index = saveInputValue(objWithTextAndCheckbox);
  createElementFromObj(objWithTextAndCheckbox, index);

  input.value = "";
});
