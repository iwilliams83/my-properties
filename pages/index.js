import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Kirby's property tracker!
        </h1>
        <div className={styles.propertyContainer}>
          <div className={styles.row}>
            <div className={styles.address}>
              I'm an address!
            </div>
            <div className={styles.money}>
              I'm rent!
            </div>
            <div className={styles.money}>
              I'm expenses!
            </div>
            <div className={styles.money}>
              I'm yo' money!
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
