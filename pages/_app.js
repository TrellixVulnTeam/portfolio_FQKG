import Navbar from "../components/Navbar/index";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../styles/globals.css";
import Footer from "../components/Footer/index";
import FadeIn from "react-fade-in";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FadeIn>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </FadeIn>
    </>
  );
}

export default MyApp;
