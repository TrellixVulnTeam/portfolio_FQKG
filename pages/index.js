import Intro from "../components/Intro";
import Head from "next/head";
import headshot from "../headshot.jpeg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <Intro />
      <img src={headshot.src} alt="Photo of Luke Chaplin" />
    </div>
  );
}
