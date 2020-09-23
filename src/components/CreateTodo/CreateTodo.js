import React, { useCallback, useRef, useState } from "react";
import { useSetRecoilState, atom } from "recoil";
import { todosState } from "../../recoil-atoms";

import styles from "./CreateTodo.module.scss";

let id = 1;
function TextInput() {
  const [text, setText] = useState();
  const inputRef = useRef(null);
  const setTodos = useSetRecoilState(todosState);

  const generateTodo = useCallback(({ id, value }) => {
    return atom({
      key: `todo/${id}`,
      default: {
        id,
        text: value,
        isCompleted: false
      }
    });
  }, []);

  const handleTextChange = useCallback(({ target: { value } }) => {
    setText(value);
  }, []);

  const handleAdd = useCallback(
    (e) => {
      e.preventDefault();
      setTodos((todos) => [...todos, generateTodo({ id: id++, value: text })]);
      setText("");
      inputRef.current.focus();
    },
    [text, setText, setTodos, generateTodo]
  );

  return (
    <form className={styles.form} onSubmit={handleAdd}>
      <h4 className={styles.title}>Todo Text:</h4>
      <input
        className={styles.input}
        placeholder="Todo text"
        autoFocus
        ref={inputRef}
        value={text}
        onChange={handleTextChange}
      ></input>
      <input className={styles.add} type="submit" value="ADD TODO" />
    </form>
  );
}

export default TextInput;
