import AboutMe from "../components/About/index";
import Head from "next/head";

function About() {
  return (
    <div class="p-10">
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
