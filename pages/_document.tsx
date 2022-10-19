import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Nintendo's Mario Strikers: Battle League Football jetzt kaufen"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="sound"></div>
      <div id="soundtrack"></div>
      <div id="overlay"></div>
      <div id="modal"></div>

      <body className="text-base themed:text-white themed:bg-accent">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
