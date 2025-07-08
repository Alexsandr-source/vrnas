import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <body>
      
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
        <h2>Welcome to VRNas</h2>
        <p>VRNAS is a platform for creating and sharing VR experiences.</p>
      </main>
      <footer>
        <p>Copyright 2025 VRNas</p>
      </footer>
    </body>
  );
}

export default App;
