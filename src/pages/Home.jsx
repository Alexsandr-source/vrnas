import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../assets/scss/NavBar.scss'
import '../assets/scss/Home.scss'

function Home() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>
          <section>
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
                <video width="50%" controls autoPlay loop muted/>
              </div>
            </div>
            <img src="" alt="" />
          </section>
        </main>
        <footer>
          
        </footer>
    </>
  );
}

export default Home;
