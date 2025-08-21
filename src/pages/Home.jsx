import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import normalMan from '../assets/img/normalMan.png'
import man1 from '../assets/img/man1.png'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3.png'
import VideoPlayer from '../components/VideoPlayer';
import VideoThumb from '../assets/img/thumbnail.png'
import MyVideo from '../assets/video/video.mp4';
import '../assets/scss/Home.scss'

function Home() {

  return (
    <>
      <img src={wave} className="wave-bg"/>
      <NavBar/>
      <main>
        <section className="intro">
          <div className="intro__content">
            <h1 className="intro__title">
              Immerse Yourself in Virtual Reality
            </h1>
            <p className="intro__description">
              Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services
            </p>
            <button className="intro__button">discover more</button>

            <div className="intro__bottom">
              <div className="intro__clients">
                <div className="intro__clients-avatars">
                  <img className="intro__avatar" src={man1} alt="" />
                  <img className="intro__avatar" src={man2} alt="" />
                  <img className="intro__avatar" src={man3} alt="" />
                </div>
                <p className="intro__clients-text">
                  <span className="intro__clients-count">32k+</span> Happy Client
                </p>
              </div>
              <VideoPlayer src={MyVideo} thumbnail={VideoThumb} />
            </div>
          </div>
          <img className="intro__image" src={normalMan} alt="normal man" />
        </section>

      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default Home;
