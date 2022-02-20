import Head from "next/head";
import circus from "../../circus.JPG";
import boat from "../../boat.JPG";
import milkyBar from "../../milkyBar.jpeg";

export default function InterestingFacts() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <ul>
        <li>
          Interesting fact #1: I perform circus/acrobatics in my spare time,
          please see below for my last show from before lockdown
        </li>
        <img src={circus.src} />
        <br></br>
        <br></br>
        <li>
          Interesting fact #2: I used to live on a canal boat for over 5 years,
          here is a pic of my old home
        </li>
        <img src={boat.src} />
        <br></br>
        <br></br>
        <li>
          Interesting fact #3: I lost out on being the Milky bar Kid 2 years in
          a row :-(
        </li>
        <img src={milkyBar.src} />
      </ul>
    </div>
  );
}
