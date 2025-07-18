import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import wave from '../assets/img/wave.png';
import '../assets/scss/NavBar.scss'

function NavBar() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <header className="header">
          <img src={logo} alt="header__logo"/>
          <nav>
              <ul className='header__nav'>
                <li><Link to='/' className='header__link'>Home</Link></li>
                <li><Link to='/' className='header__link'>About us</Link></li>
                <li><Link to='/' className='header__link'>Service</Link></li>
                <li className="has-dropdown">
                  <a href="#" className="header__link">Page</a>
                  <ul className="dropdown">
                    <li><a href="#" className="dropdown__link">The Company</a></li>
                    <li><a href="#" className="dropdown__link">The Team</a></li>
                  </ul>
                </li>
                <li><Link to='/' className='header__link'>Blog</Link></li>
              </ul>
          </nav>
          <Link to='/contact-us' className='header__button'>Contanct us</Link>
        </header>
    </>
  );
}

export default NavBar;
