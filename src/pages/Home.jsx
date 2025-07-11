import logo from '../img/logo.png';
import wave from '../img/wave.png';
import '../assets/Home.scss'

function Home() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <header className="header">
        <img src={logo} alt="header__logo"/>
        <nav className='header__nav'>
            <ul>
            <li><a className='header__link' href="#">Home</a></li>
            <li><a className='header__link' href="#">About us</a></li>
            <li><a className='header__link' href="#">Service</a></li>
            <li><a className='header__link' href="#">Page</a></li>
            <li><a className='header__link' href="#">Blog</a></li>
            </ul>
        </nav>
        <button className='header__button'>Contanct us</button>
        </header>
    </>
  );
}

export default Home;
