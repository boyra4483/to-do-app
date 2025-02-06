import { useState } from "react";

import Header from "./assets/components/header/Header";
import Tasks from "./assets/components/tasks/Tasks";

import { createLocalStorage, setLocalStorage } from "./assets/storage/storage";
import SearchBar from "./assets/components/search-bar/SearchBar";

export default function App() {
  if (localStorage.length == 0) createLocalStorage();

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(task, isChecked) {
    if (task.trim() == "") return;
    setLocalStorage(task, isChecked);
    setTasks([...tasks, task]);
  }

  return (
    <>
      <Header>
        <SearchBar onChange={setTask} onSubmit={handleSubmit} />
      </Header>
      <Tasks task={task} onClick={setTasks} />
    </>
  );
}
