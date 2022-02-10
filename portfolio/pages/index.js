import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/About Me";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline">
      <p>hello world!</p>
      <AboutMe />
    </div>
  );
}
