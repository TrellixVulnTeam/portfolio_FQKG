import { FormspreeProvider } from "@formspree/react";
export default function App({ Component, pageProps }) {
  return (
    <FormspreeProvider
      project="1876003577487424827
    "
    >
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
