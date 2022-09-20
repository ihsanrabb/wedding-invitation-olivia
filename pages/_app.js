import {useEffect} from 'react'
import Head from "next/head";
import '../styles/globals.css'
import {analytics} from '../firebase'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { WeddingProvider } from '../WeddingContext'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // analytics();
    AOS.init();
  }, [])

  return (
    <>
      <Head>
        <title>Olivia & Rifan Wedding</title>
        <link rel="icon" href="/onetap.ico" />
        <meta name="title" content="#TheWeddingOfOliviaRifan" />
      </Head>
      <WeddingProvider>
        <Component {...pageProps} />
      </WeddingProvider>
    </>
  )
}

export default MyApp
