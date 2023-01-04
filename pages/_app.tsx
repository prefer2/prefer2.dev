import "styles/globals.css";
import "styles/atom-one-dark.min.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import Layout from "@components/Layout";
import Header from "@components/Header";

import SEO from "seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEO}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
