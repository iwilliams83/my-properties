import Head from "next/head";
import styles from "../styles/Home.module.css";
import Row from "../components/row";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Kirby's property tracker!</h1>
        <div className={styles.propertyContainer}>
          <Row></Row>
        </div>
      </main>
    </div>
  );
}
