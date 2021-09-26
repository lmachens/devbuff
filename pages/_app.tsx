import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevBuff - Web Developer Bootcamp für Freelancer</title>
        <meta
          name="description"
          content="DevBuff - Web Developer Bootcamp für Freelancer"
        />
        <meta
          name="keywords"
          content="Web Developer, Bootcamp, Freelancer, React, JavaScript, TypeScript, Remote, Leon Machens, Developer, Coach"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
