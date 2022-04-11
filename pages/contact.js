import Head from "next/head";
import ContactForm from "../components/Contact/index";

export default function ContactMe() {
  return (
    <div className="p-10 text-2xl font-mono">
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <ContactForm />
    </div>
  );
}
