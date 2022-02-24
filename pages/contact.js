import Head from "next/head";
import ContactForm from "../components/Contact/index";

export default function ContactMe() {
  return (
    <div class="p-10 p-10 text-2xl font-mono bg-gradient-to-r from-purple-200">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <ContactForm />
    </div>
  );
}
