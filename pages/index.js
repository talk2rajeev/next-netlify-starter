import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const [bgImage, setBgImage] = useState(0);
  const [styles, setStyles] = useState({});

  const brImgArr = ['/images/roadies_whites.jpg', '/images/raodies_color_snipped.png'];
  let timer;
  
  useEffect(()=>{
    updateBgImage();
    return () => {
      clearInterval(timer);
    };
  }, []);

  const updateBgImage = () => {
    timer = !timer && setInterval(() => {
      const bgImgIndex = Math.floor(Math.random() * 10) % 2;
      console.log('updating bg Image', bgImgIndex);
      setBgImage(bgImgIndex);
    }, 6000)
  }

  let isMobileView ;
  
  useEffect(() => {
    // window is accessible here.
    isMobileView = window.innerWidth < 600;
    isMobileView ? setStyles({backgroundImage:  `url(${brImgArr[bgImage]})`}) : {};
    console.log('isMobileView', isMobileView, styles);
  }, [bgImage]);


  return (
    <div >
      <Head>
        <title>Bangalore Roadies</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container" style={styles}> 

        <div className='bg-image'>
          <img className='img' src={brImgArr[bgImage]} style={{width: '100%'}} />
        </div>
        <div>
          <div style={{textAlign: 'center'}}>
            <img className='team_logo' src='/images/roadies_logo.png'  />
          </div>
          {/* <Header title="Bangalore Roadies" /> */}

          <p className="description">
            Bangalore Roadies cricket team is based out of Bangalore. 
            This team has all working professionals playing together. Age is not a matter, anyone who has experience in playing
            leather ball cricket can be part of our team. 
            We play with leather ball. We play only in weekends and sometimes on holidays. 
          </p>

          <div className="description">
            <h3>what are we looking for?</h3>
            <p>
              We are looking for passionate cirketers who are ready to learn and evolve.
              Even a average player can join us and eveolve over the time.
              Loyality, descipline and consistency is what we are looking for. 
            </p>
          </div>

          <div className="description">
            <h3>How can you join us?</h3>
            <p>
            If you are interested in playing leather ball cricket in weekends then you can join us. First of all you will have to 
            join our net practice sessions 2, 3 times. Net session is mandatory to join our team. Net session is not to judge your skill but
            to see if you can fit in our team. If you fits well in our squad then we will first let you play practice matches, 
            and if you perform well or average or above average then you can play tournament matches.
            </p>
          </div>

          <div className="description link">
            Please fill this <a href='https://forms.gle/uvCorjkWsHW7tggj7' target='_blank'>form</a> to send a request to us.
          </div>
          <div style={{height: '30px', padding: '10px'}}></div>
        </div>
      </div>

    </div>
  )
}
