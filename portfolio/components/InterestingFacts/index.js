import Head from "next/head";
import Image from "next/image";
import circus from "../../../circus.JPG";
import boat from "../../../boat.jpg";
import milkyBar from "../../../milkyBar.jpeg";

export default function InterestingFacts() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <p></p>
      <ul>
        <li>
          Interesting fact #1: I perform circus/acrobatics in my spare time,
          please see below for my last show from before lockdown
        </li>
        <Image src={circus} />
        <br></br>
        <br></br>
        <li>
          Interesting fact #2: I used to live on a canal boat for over 5 years,
          here is a pic of my old home
        </li>
        <Image src={boat} />
        <br></br>
        <br></br>
        <li>
          Interesting fact #3: I lost out on being the Milky bar Kid 2 years in
          a row :-(
        </li>
        <Image src={milkyBar} />
      </ul>
    </div>
  );
}
