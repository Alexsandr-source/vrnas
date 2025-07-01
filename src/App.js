import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="Vrnas">
      <header className="Vrnas-header">
        <img src={logo} alt="Vrnas-logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome to VRNAS</h2>
        <p>VRNAS is a platform for creating and sharing VR experiences.</p>
      </main>
      <footer>
        <p>Copyright 2025 VRNAS</p>
      </footer>
    </body>
  );
}

export default App;
