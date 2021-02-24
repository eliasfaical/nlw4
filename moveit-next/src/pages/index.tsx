import { ExperienceBar } from "../components/ExperienceBar";
import { CompleteChalenge } from "../components/CompleteChalenge";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";

import Head from 'next/head';
import styles from '../styles/page/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChalenge />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
