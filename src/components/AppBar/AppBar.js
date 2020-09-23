import React from "react";

import styles from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <nav className={styles.nav}>
      <h2>
        Simple{" "}
        <a href="https://recoiljs.org/" target="_blank" rel="noopener noreferrer">
          Recoil.js
        </a>{" "}
        Todo App
      </h2>
    </nav>
  );
};

export default AppBar;
