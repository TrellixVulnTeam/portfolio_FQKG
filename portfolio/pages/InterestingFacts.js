import Head from "next/head";
import InstagramEmbed from "react-instagram-embed";

function Interesting() {
  return (
    <div>
      <Head>
        <title>Luke Skycoder: Software development by Luke Chaplin</title>
      </Head>
      <p>hello</p>
      <InstagramEmbed
        url="https://instagram.com/p/B6G3gjcDgsT"
        clientAccessToken="appid|clienttoken"
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default Interesting;
