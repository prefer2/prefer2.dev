import "styles/globals.css";
import "styles/atom-one-dark.min.css";
import type { AppProps } from "next/app";

import Layout from "@components/Layout";
import Header from "@components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
