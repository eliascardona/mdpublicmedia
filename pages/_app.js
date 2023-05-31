import Head from "next/head"
import Script from "next/script"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mizcoatl Diaz - Academia de Artes Marciales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head>
      <Script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js" />
      {/* -------------------------- */}
      <Component {...pageProps} />
      {/* -------------------------- */}
    </>
  )
}

export default MyApp
