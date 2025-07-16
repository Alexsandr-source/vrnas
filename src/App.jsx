import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import './App.scss';

function App() {
  return (
    <body>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </body>
  );
}

export default App;
