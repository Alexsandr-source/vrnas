import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import wave from '../assets/img/wave.png';
import '../assets/scss/ContactUs.scss'

function NavBar() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <header className="header">
          <img src={logo} alt="header__logo"/>
          <nav className='header__nav'>
              <ul>
                <li><Link to='/' className='header__link'>Home</Link></li>
                <li><Link to='/' className='header__link'>About us</Link></li>
                <li><Link to='/' className='header__link'>Service</Link></li>
                <li><Link to='/' className='header__link'>Page</Link></li>
                <li><Link to='/' className='header__link'>Blog</Link></li>
              </ul>
          </nav>
          <Link to='/contact-us' className='header__button'>Contanct us</Link>
        </header>
    </>
  );
}

export default NavBar;
