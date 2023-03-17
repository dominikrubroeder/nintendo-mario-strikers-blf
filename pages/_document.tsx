import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />

        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <div id="sound"></div>
      <div id="overlay"></div>

      <body className="text-base themed:bg-accent themed:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
