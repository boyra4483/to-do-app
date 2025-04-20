import classes from "./Tasks.module.css";

import { getLocalStorage } from "../../storage/storage";
import Task from "../task/Task";

export default function Tasks({ task, onClick }) {
  const tasks = getTasks(getLocalStorage(), task, onClick);

  return <section className={classes["tasks"]}>{tasks}</section>;
}

function getTasks(tasks, task, onClick) {
  const filteredTasks = tasks.filter((currentTask) =>
    currentTask.name.includes(task)
  );

  return filteredTasks.map((task) => (
    <Task
      task={task.name}
      checked={task.isChecked}
      onClick={onClick}
      key={task.name}
    />
  ));
}
