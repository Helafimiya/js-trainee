/**
 * ключ для хранилища
 */
const taskKey = "task";

// crud: create, read, update, delete

/**
 * сохраняем в сторадж данные
 * @param {array} dataList
 */
function setItemInStorage(dataList) {
  localStorage.setItem(taskKey, JSON.stringify(dataList));
}

/**
 *сохраняет данные в локалсторадж (create)
 * @param {object} objWithTextAndCheckbox
 * @returns {number}
 */
export function saveInputValue(objWithTextAndCheckbox) {
  const oldData = getDataListFromStorage();

  oldData.push(objWithTextAndCheckbox); // добавляем в массив объекты

  setItemInStorage(oldData);
  return oldData.length - 1;
}
/**
 * получаем данные из localStorage
 * @returns {string}
 */
function getLocalArrString() {
  return localStorage.getItem(taskKey);
}
/**
 * получаем массив данных из Storage или пустой массив (read)
 * @returns {array}
 */
export function getDataListFromStorage() {
  const localArrString = getLocalArrString();
  const oldData = JSON.parse(localArrString);

  if (Array.isArray(oldData)) {
    return oldData;
  } else {
    return [];
  }
}
/**
 * изменять один элемент в хранилище (update)
 * @param {number} index
 * @param {string} task
 * @param {boolean} checked
 * @returns {void}
 */
export function updateItemInStorage(index, task, checked) {
  const oldData = getDataListFromStorage();
  oldData[index] = { task, checked };
  setItemInStorage(oldData);
}
/**
 * удаление ноды из localStorage и запись в него нового массива (delete)
 * @param {number} index
 * @returns {void}
 */
export function deleteNodeFromLocalStorage(index) {
  const oldData = getDataListFromStorage();
  oldData.splice(index, 1);
  setItemInStorage(oldData);
}
