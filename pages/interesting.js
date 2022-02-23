import Head from "next/head";
import InterestingFacts from "../components/InterestingFacts/index.js";

function Interesting() {
  return (
    <div class="p-10">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <InterestingFacts />;
    </div>
  );
}

export default Interesting;
