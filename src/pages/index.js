import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomtens Biograf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/svg+xml" rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.title}>HELLO</div>
        </div>
      </main>
    </>
  );
}
