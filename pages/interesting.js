import Head from "next/head";
import InterestingFacts from "../components/InterestingFacts/index.js";

function Interesting() {
  return (
    <div className="p-10 text-2xl font-mono ">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <InterestingFacts />
    </div>
  );
}

export default Interesting;
