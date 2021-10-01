import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import ScrollUp from '../components/ScrollUp/ScrollUp'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Responsive Headphones landing page</title>
        <meta
          name='description'
          content='React Responsive Headphones landing page'
        />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      <>
        <Header />
        <Main />
        <Footer />
        <ScrollUp />
      </>
    </>
  )
}
