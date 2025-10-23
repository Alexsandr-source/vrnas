import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import normalMan from '../assets/img/normalMan.png'
import man1 from '../assets/img/man1.png'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3.png'
import VideoPlayer from '../components/VideoPlayer';
import ECP from '../components/ECPcontainer';
import VideoThumb from '../assets/img/thumbnail.png';
import MyVideo from '../assets/video/video.mp4';
import img from '../assets/img/bgLightMan.png'
import '../assets/scss/Home.scss'

import ecpImg1 from "../assets/img/ecpImg1.png";
import ecpImg2 from "../assets/img/ecpImg1.png";
import ecpImg3 from "../assets/img/ecpImg1.png";
import "../assets/scss/ECP.scss"

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


        
        <div className="ECP-container">
            <div className='ECP__col'>
                <img className="ECP__col-img" src={ecpImg1} alt="" />
                <h1 className="ECP__col-title">Expertise</h1>
                <p className="ECP__col-text">Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
            </div>
            <div className='ECP__col'>
                <img className="ECP__col-img" src={ecpImg2} alt="" />
                <h1 className="ECP__col-title">Customization</h1>
                <p className="ECP__col-text">Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
            </div>
            <div className='ECP__col'>
                <img className="ECP__col-img" src={ecpImg3} alt="" />
                <h1 className="ECP__col-title">Service</h1>
                <p className="ECP__col-text">We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
            </div>
        </div>
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default Home;
