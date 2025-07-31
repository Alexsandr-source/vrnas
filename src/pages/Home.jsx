import React, { useRef } from 'react';
import ReactPlayer from "react-player";
import VideoJS from '../components/VideoJs';
import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import normalMan from '../assets/img/normalMan.png'
import man1 from '../assets/img/man1.png'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3.png'
import 'video.js/dist/video-js.css';
import '../assets/scss/NavBar.scss'
import '../assets/scss/Home.scss'

function Home() {

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: '../assets/video/video.mp4',
        type: 'video/mp4'
      }]
    };

    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

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
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
