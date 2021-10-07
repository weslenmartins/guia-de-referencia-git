import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import siteSetup from '../utils/setup'

import GlobalStyles from '../styles/globals'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{siteSetup.siteTitle}</title>

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <meta
          property="og:image"
          itemProp="image"
          content="/icons/favicon-192x192.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;600&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color={siteSetup.colorTheme}
        />
        <meta name="msapplication-TileColor" content={siteSetup.colorTheme} />
        <meta name="theme-color" content="#1A1A20" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={siteSetup.shortSiteTitle} />
        <meta
          name="apple-mobile-web-app-title"
          content={siteSetup.shortSiteTitle}
        />
        <meta name="theme-color" content="#1A1A20" />
        <meta name="msapplication-navbutton-color" content="#1A1A20" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color={siteSetup.colorTheme}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
