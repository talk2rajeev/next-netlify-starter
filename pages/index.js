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
      <div className='bg-image'>
        <img className='img' src='/images/roadies_whites.jpg' style={{width: '100%'}} />
      </div>
      <main>
        <Header title="Bangalore Roadies" />

        <p className="description">
          Bangalore Roadies cricket team is based out of Bangalore. 
          This team has all working professionals playing together.
          We play with leather ball on weekends. 
        </p>

        <div className="description">
          <h3>what are looking for?</h3>
          <p>
            We are not looking for great cricketer, but a passionate cirketer who is ready to learn and evolve.
            Even a average player can join us and eveolve over the time.
            Loyality, descipline and consistency is what we are looking for.
          </p>
        </div>

        <div className="description">
          <h3>How can u join us?</h3>
          <p>
        If you are interested then you can join our net practice session. 
        Net session is mandatory to join our team. If you join 2,3 net sessions then we will let you play practice match, and if you perform average and above average then you can play tournament matches.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
