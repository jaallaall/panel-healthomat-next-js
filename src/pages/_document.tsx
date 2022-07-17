import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="rtl">
      <Head>
        {/* <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css"
          rel="stylesheet"
        /> */}
      </Head>
      <body>
        <Main />
        <div id="sidebar" />
        <NextScript />
      </body>
    </Html>
  );
}
