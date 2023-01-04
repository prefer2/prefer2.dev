import { useEffect } from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import useTheme from "hooks/useTheme";

import Layout from "@components/Layout";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { THEME_KEY, THEME } from "constants/index";
import SEO from "seo.config";

import "styles/globals.css";
import "styles/atom-one-dark.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const { themeMode, changeThemeToDark, changeThemeToLight } = useTheme();

  const handleThemeToggle: React.MouseEventHandler = () => {
    if (themeMode === THEME.LIGHT) {
      changeThemeToDark();
    } else {
      changeThemeToLight();
    }
  };

  useEffect(() => {
    const mode =
      localStorage.getItem(THEME_KEY) ??
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? THEME.DARK
        : THEME.LIGHT;
    if (mode === THEME.DARK) {
      changeThemeToDark();
    } else {
      changeThemeToLight();
    }
  });

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
      <Header onToggleTheme={handleThemeToggle} theme={themeMode} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
