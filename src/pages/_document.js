import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ptBR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" type="image/png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
