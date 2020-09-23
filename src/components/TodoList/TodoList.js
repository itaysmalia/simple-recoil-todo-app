import React from "react";
import { useRecoilValue } from "recoil";

import TodoItem from "./TodoItem/TodoItem";
import { todosState } from "../../recoil-atoms";

import styles from "./TodoList.module.scss";

const TodoList = () => {
  const todos = useRecoilValue(todosState);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todos List:</h1>
      <ul className={styles.list}>
        {todos.map((item) => (
          <TodoItem {...{ item }} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
