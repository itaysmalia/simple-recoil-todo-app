import React from "react";
import { useRecoilState } from "recoil";
import cn from "classnames";
import { MdDone, MdClose } from "react-icons/md";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ item }) => {
  const [{ text, isCompleted }, setTodo] = useRecoilState(item);
  return (
    <div className={styles.item}>
      <h2 className={cn(styles.text, { [styles.completed]: isCompleted })}>{text}</h2>
      <span
        className={styles.toggle}
        onClick={() => setTodo((prev) => ({ ...prev, isCompleted: !isCompleted }))}
      >
        {isCompleted ? <MdClose /> : <MdDone />}
      </span>
    </div>
  );
};

export default TodoItem;
