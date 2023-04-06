import Document, { Html, Head, Main, NextScript } from "next/document";
import YMInitializer from "react-yandex-metrika/lib/init";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="16x16"
          ></link>

          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="32x32"
          ></link>

          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="48x48"
          ></link>

          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="96x96"
          ></link>

          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="144x144"
          ></link>

          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="192x192"
          ></link>

          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
            sizes="512x512"
          ></link>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>

          <meta name="author" lang="ru" content="Porechnyy Alexandr" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="resource-type" content="Homepage" />
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="content-language" content="ru" />

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>

          <meta name="yandex-verification" content="53f3e2a8aca2ed02" />
        </Head>
        <body>
          <Main></Main>
          <NextScript />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(93067128, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });`,
            }}
          ></script>
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/93067128"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </body>
      </Html>
    );
  }
}
