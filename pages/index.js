import Head from "next/head";
import styles from "../styles/Home.module.css";
import Property from "../components/property";
import Input from "../components/input";

export default function Home() {
  function handleClick(e) {
    e.preventDefault();
    console.log("Yay! The link was clicked.");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Kirby's property tracker!</h1>
        <div className={styles.newRowContainer}>
          <button className={styles.newRowButton} onClick={handleClick}>
            + New Row
          </button>
          <div className={styles.newRowFields}>
            <Input></Input>
          </div>
        </div>
        <div className={styles.propertyContainer}>
          <Property></Property>
        </div>
      </main>
    </div>
  );
}
