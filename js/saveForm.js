import { saveInputValue } from "./storageMethod.js";
import { createElementFromText } from "./createElementFromText.js";

// сохранение формы
const form = document.querySelector(".new-elem");
form.addEventListener("submit", function (e) {
  const input = document.querySelector(".new-elem__input");
  e.preventDefault(); // останавливает передачу на сервер

  createElementFromText(input.value);
  saveInputValue(input.value);

  input.value = "";
});
