import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (
    <>
      {/* METAPAGE INFO */}
      <Head>
        <title>React Responsive landing page headphones</title>
        <meta
          name='description'
          content='React Responsive landing page headphones'
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      {/* PAGE */}
      <>
        {/* Header */}
        <Header />
        {/* Main */}
        <Main />
        {/* Footer */}
        <Footer />
      </>
    </>
  )
}
