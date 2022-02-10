import Head from "next/head";
import Image from "next/image";
import headshot from "../../headshot.jpeg";

function Interesting() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>

      <a href="https://www.instagram.com/p/CDwGAm7jMir/">
        <Image src={headshot} />
      </a>
    </div>
  );
}

export default Interesting;
