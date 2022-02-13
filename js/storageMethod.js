// ключ для хранилища
const taskKey = "task";

// сохраняет данные в локалсторадж
export function saveInputValue(value) {
  const oldData = getDataListFromStorage();

  oldData.push(value);
  localStorage.setItem(taskKey, JSON.stringify(oldData));
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
