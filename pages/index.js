import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bangalore Roadies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Bangalore Roadies" />
        <p className="description">
          Bangalore Roadies is a cricket team based out of Bangalore. 
          This team has all working professionals playing together.
        </p>
      </main>

      <Footer />
    </div>
  )
}
