import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Random Tailwind Gradient</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
