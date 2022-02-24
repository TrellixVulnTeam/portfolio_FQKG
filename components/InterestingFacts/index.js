import Head from "next/head";
import circus from "../../circus.JPG";
import boat from "../../boat.JPG";
import milkyBar from "../../milkyBar.png";

export default function InterestingFacts() {
  return (
    <div className="text-2xl font-mono p-15">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <ul>
        <li>
          Interesting fact #1: I perform circus/acrobatics in my spare time,
          please see below for my last show from before lockdown
        </li>
        <br></br>
        <div class=" max-w-screen-lg mx-auto pb-10 flex justify-center">
          <img
            class="drop-shadow-2xl max-w-xs rounded-full -z-10"
            src={circus.src}
          />
        </div>
        <br></br>
        <br></br>
        <li>
          Interesting fact #2: I used to live on a canal boat for over 5 years,
          here is a pic of my old home
        </li>
        <br></br>
        <div class=" max-w-screen-lg mx-auto pb-10 flex justify-center">
          <img
            class="drop-shadow-2xl max-w-xs rounded-full -z-10"
            src={boat.src}
          />
        </div>
        <br></br>
        <br></br>
        <li>
          Interesting fact #3: I lost out on being the Milky bar Kid 2 years in
          a row :-(
        </li>
        <br></br>
        <div class="max-w-screen-lg mx-auto pb-10 flex justify-center">
          <img
            class="drop-shadow-2xl max-w-xs rounded-full -z-10"
            src={milkyBar.src}
          />
        </div>
      </ul>
    </div>
  );
}
