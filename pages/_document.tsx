import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="GHi1z9zJi8Fxs-W5helbwbS0bASwpLfk2LRf19XtR9o"
        />
        <meta
          name="naver-site-verification"
          content="5af7847b4ec64c700ffb067ffe8fbdf1e9ced8da"
        />
      </Head>
      <body className="dark:bg-code-dark dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
