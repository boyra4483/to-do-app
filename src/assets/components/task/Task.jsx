import classes from "./Task.module.css";

import DeleteBtn from "../delete-btn/DeleteBtn";
import { updateLocalStorage } from "../../storage/storage";

export default function Task({ task, onClick, checked }) {
  return (
    <div className={classes["checkbox-container"]}>
      <input
        defaultChecked={checked}
        type="checkbox"
        onClick={(e) => updateLocalStorage(task, e.target.checked)}
      />
      <span className={classes["checkbox-checkmark"]}></span>
      <p className={classes["task"]}>{task}</p>
      <DeleteBtn onClick={onClick} />
    </div>
  );
}
