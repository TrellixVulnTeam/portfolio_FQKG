import Head from "next/head";
import MyProjects from "../components/Projects/index";

export default function Projects() {
  return (
    <div class="p-10">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <MyProjects />
    </div>
  );
}
