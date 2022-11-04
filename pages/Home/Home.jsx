import Head from 'next/head';
import Image from 'next/image';
import Items from '../component/Items/Items';
import Navbar from '../component/navbar/Navbar';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alist </title>
        <meta name="description" content="Online Shopping " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main className={styles.main}>
        <section>
          <Items />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            A list logo
          </span>
        </a>
      </footer>
    </div>
  );
}
