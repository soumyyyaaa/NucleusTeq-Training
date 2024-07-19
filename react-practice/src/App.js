import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Component/Contactus';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;
