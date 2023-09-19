import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <NextScript
          defer
          src="https://kit.fontawesome.com/a7908c27f8.js"
        ></NextScript>
       
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,700,0,200&display=optional"
        />{" "}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
