import Intro from "../components/Intro";
import Head from "next/head";
import Image from "next/image";
import headshot from "../../headshot.jpeg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <Intro />
      <Image src={headshot} alt="Photo of Luke Chaplin" />
    </div>
  );
}
