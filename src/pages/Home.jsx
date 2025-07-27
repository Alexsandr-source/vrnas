import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import normalMan from '../assets/img/normalMan.png'
import videoFile from '../assets/video/video.mp4';
import VideoJS from '../components/VideoJs';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../assets/scss/NavBar.scss'
import '../assets/scss/Home.scss'

function Home() {
  const playerRef = useRef(null);
  const options = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{ src: videoFile, type: 'video/mp4' }],
  };
  const handleReady = (player) => {
    playerRef.current = player;
    player.on('waiting', () => videojs.log('waiting'));
    player.on('dispose', () => videojs.log('disposed'));
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
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                  <p><span>32k+</span> Happy Client</p>
                </div>
                <div className="video-block">
                  <VideoJS options={options} onReady={(player) => {
                    player.on('waiting', () => videojs.log('waiting'));
                    player.on('dispose', () => videojs.log('disposed'));
                  }} />
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
