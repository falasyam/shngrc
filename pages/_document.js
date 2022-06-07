import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          strategy="beforeInteractive"
          charSet="utf-8"
        ></script>
      </body>
    </Html>
  );
}
