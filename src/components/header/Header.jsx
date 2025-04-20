import classes from "./Header.module.css";

export default function Header({ children }) {
  return (
    <>
      <h1 className={classes["title"]}>To Do App</h1>
      {children}
      <hr
        style={{
          border: "1px solid rgba(0, 0, 0, 0.5)",
          margin: "0 0 14.3px 0",
          width: "calc(100% - 104px)",
        }}
      />
    </>
  );
}
