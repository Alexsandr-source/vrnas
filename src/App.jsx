import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import './App.scss';

function App() {
  return (
    <body>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<ContactUs/>}/>
        <Route path='/service' element={<ContactUs/>}/>
        <Route path='/page' element={<ContactUs/>}/>
        <Route path='/blog' element={<ContactUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </body>
  );
}

export default App;
