import {Html, Head, Main, NextScript} from "next/document";

export default function _document() {
  return (
    <Html lang={'en'}>
      <Head>
        <meta name="description" content="Spotify Deep Search"/>
        <meta name="keywords" content="Spotify, statistics, genres, authors, artists"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}