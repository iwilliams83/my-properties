import React from "react";
import styles from "../styles/Home.module.css";

function Row() {
  return (
    <div className={styles.row}>
      <div className={styles.address}>I'm an address!</div>
      <div className={styles.money}>I'm rent!</div>
      <div className={styles.money}>I'm expenses!</div>
      <div className={styles.money}>I'm yo' money!</div>
    </div>
  );
}

export default Row;
