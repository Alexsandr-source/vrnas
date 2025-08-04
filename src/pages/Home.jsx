import { useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import normalMan from '../assets/img/normalMan.png'
import man1 from '../assets/img/man1.png'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3.png'
import VideoThumb from '../assets/img/thumbnail.png'
import MyVideo from '../assets/video/video.mp4';
import '../assets/scss/NavBar.scss'
import '../assets/scss/Home.scss'





function Home() {

  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>
          <section className='intro'>
            <div>
              <h1>
                Immerse Yourself in Virtual Reality
              </h1>
              <p>
                Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services
              </p>
              <button>discover more</button>
              <div>
                <div>
                  <div>
                    <img src={man1} alt="" />
                    <img src={man2} alt="" />
                    <img src={man3} alt="" />
                  </div>
                  <p><span>32k+</span> Happy Client</p>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            <img src={normalMan} alt="normal man"/>
          </section>
        </main>
        <footer>
          
        </footer>
    </>
  );
}

export default Home;
