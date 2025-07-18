import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import '../assets/scss/NavBar.scss'

function Home() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>

        </main>
        <footer>
          
        </footer>
    </>
  );
}

export default Home;
