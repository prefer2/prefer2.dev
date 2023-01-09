import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import Layout from "@components/Layout";
import Header from "@components/Header";
import Footer from "@components/Footer";

import SEO from "seo.config";

import "styles/globals.css";
import "styles/atom-one-dark.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
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
      <Footer />
    </RecoilRoot>
  );
}
