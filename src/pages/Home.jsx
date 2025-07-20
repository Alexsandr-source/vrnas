import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import '../assets/scss/NavBar.scss'

function Home() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main className='Cool-cat'>
          <img src="https://media.tenor.com/13MO7LUAShwAAAAM/fadding-cat.gif" alt="Cool cat" />
        </main>
        <footer>
          
        </footer>
    </>
  );
}

export default Home;
