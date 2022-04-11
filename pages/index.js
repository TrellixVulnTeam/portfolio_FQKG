import Intro from "../components/Intro";
import Head from "next/head";
import headshot from "../headshot.jpeg";
import Logo from "../components/Logo/index";

export default function Home() {
  return (
    <div className="p-10 text-2xl font-mono">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <Logo />
      <Intro />
      <br></br>
      <br></br>
      <div className="max-w-screen-lg mx-auto pb-10 flex justify-center">
        <img
          className="drop-shadow-2xl max-w-xs rounded-full -z-10 "
          src={headshot.src}
          alt="Photo of Luke Chaplin"
        />
      </div>
    </div>
  );
}
