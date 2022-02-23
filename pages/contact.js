import Head from "next/head";
import ContactForm from "../components/Contact/index";

export default function ContactMe() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <ContactForm />;
    </div>
  );
}
