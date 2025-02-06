import classes from "./SearchBar.module.css";

export default function SearchBar({ onChange, onSubmit }) {
  return (
    <form
      className={classes["form"]}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(document.forms[0].task.value, false);
      }}
    >
      <input
        className={classes["search"]}
        placeholder="task"
        name="task"
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="sumbit" className={classes["submit"]}></button>
    </form>
  );
}
