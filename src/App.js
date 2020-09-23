import React from "react";

import AppBar from "./components/AppBar/AppBar";
import TextInput from "./components/CreateTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <AppBar />
      <div className={styles.mainContent}>
        <TextInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
