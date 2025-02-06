export function createLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify([]));
}

export function setLocalStorage(task, isChecked) {
  localStorage.setItem(
    "tasks",
    JSON.stringify([...getLocalStorage(), { name: task, isChecked: isChecked }])
  );
}

export function updateLocalStorage(task, checked) {
  const tasks = getLocalStorage();
  tasks.find((currentTask) => currentTask.name == task).isChecked = checked;

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks"));
}

export function deleteTask(task) {
  const tasks = [...getLocalStorage()];
  tasks.splice(
    tasks.findIndex((currentTaks) => currentTaks.name == task),
    1
  );

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
