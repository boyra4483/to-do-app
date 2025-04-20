import { deleteTask, getLocalStorage } from "../../storage/storage";
import classes from "./DeleteBtn.module.css";

export default function DeleteBtn({ onClick }) {
  return (
    <div
      className={classes["delete"]}
      onClick={(e) => {
        deleteTask(e.target.parentElement.querySelector("p").textContent);
        onClick(getLocalStorage);
      }}
    ></div>
  );
}
