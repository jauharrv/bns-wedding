/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="notranslate" translate="no">
      <Head>
        <script id="sakura-script" src="/script/sakura.js" defer />
        <Script
          id="sakura-start"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.sakura = new Sakura('.sakura-wrapper');
        `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <meta name="google" content="notranslate" />
        <meta name="title" content="Wedding of Balqis & Singgih 💜" />
        <meta name="description" content="We are getting married 💜" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Wedding of Balqis & Singgih 💜" />
        <meta property="og:description" content="We are getting married 💜" />
        {/* <meta property="og:image" content="https://ik.imagekit.io/iyansr/3_OjEKW-9Zs.jpg" /> */}
        <meta
          property="og:image"
          content="https://ik.imagekit.io/erlangga092/irma-wedding/cover1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672980642963"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Wedding of Balqis & Singgih 💜" />
        <meta property="twitter:description" content="We are getting married 💜" />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/erlangga092/irma-wedding/cover1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672980642963"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-portal" className="overflow-hidden" />
        <div id="modal-portal-1" className="overflow-hidden" />
      </body>
    </Html>
  );
}
