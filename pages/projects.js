import Head from "next/head";
import MyProjects from "../components/Projects/index";

export default function Projects() {
  return (
    <div class="p-10 p-10 text-2xl font-mono bg-gradient-to-r from-purple-200">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <MyProjects />
    </div>
  );
}
