import AboutMe from "../components/About/index";
import Head from "next/head";

function About() {
  return (
    <div className="p-10 text-2xl font-mono">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <h1>A little bit about me...</h1>
      <br></br>
      <AboutMe />
    </div>
  );
}

export default About;
