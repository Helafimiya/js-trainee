// ключ для хранилища
const taskKey = "task";

//сохраняем в сторадж данные
function setItemInStorage(dataList) {
  localStorage.setItem(taskKey, JSON.stringify(dataList));
}

// сохраняет данные в локалсторадж
export function saveInputValue(value) {
  const oldData = getDataListFromStorage();

  oldData.push(value);

  setItemInStorage(oldData);
  return oldData.length - 1;
}

// получаем данные из localStorage
function getLocalArrString() {
  return localStorage.getItem(taskKey);
}

// получаем массив данных из Storage или пустой массив
export function getDataListFromStorage() {
  const localArrString = getLocalArrString();
  const oldData = JSON.parse(localArrString);

  if (Array.isArray(oldData)) {
    return oldData;
  } else {
    return [];
  }
}

// удаление ноды из localStorage и запись в него нового массива
export function deleteNodeFromLocalStorage(index) {
  const oldData = getDataListFromStorage();
  oldData.splice(index, 1);
  setItemInStorage(oldData);
}
