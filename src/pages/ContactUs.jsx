import logo from '../assets/img/logo.png';
import wave from '../assets/img/wave.png';
import '../assets/scss/Home.scss'
import '../assets/scss/ContactUs.scss'

function ContactUs() {
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
        <main>
          <section className="contact-hero">
            <div className="contact-hero__content">
              <h1 className="contact-hero__title">Contact Us</h1>
              <div className="contact-hero__breadcrumbs">
                <a href="/">Home</a> <span>›</span> <span>Contact Us</span>
              </div>
            </div>
          </section>
        </main>
        <footer>

        </footer>
    </>
  );
}

export default ContactUs;
