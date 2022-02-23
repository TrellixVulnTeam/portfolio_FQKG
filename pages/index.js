import Intro from "../components/Intro";
import Head from "next/head";
import headshot from "../headshot.jpeg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="p-10">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <Intro />
      <br></br>
      <br></br>
      <div class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
        <img
          class="drop-shadow-2xl- max-w-xs rounded-full "
          src={headshot.src}
          alt="Photo of Luke Chaplin"
        />
      </div>
    </div>
  );
}
