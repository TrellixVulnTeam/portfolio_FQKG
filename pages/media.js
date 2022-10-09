import Head from "next/head";
import Media from "../components/Media/index";

export default function MediaList() {
  return (
    <div className="p-10 text-2xl font-mono ">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <Media />
    </div>
  );
}
