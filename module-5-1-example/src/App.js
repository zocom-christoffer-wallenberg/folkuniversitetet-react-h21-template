import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Navbar from './components/Navbar';

/**
 * Navbar.js - Meny
 * Home.js - Startsida
 * About.js - Om-sida
 * Error.js - Vår 404-sida
 */

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } exact /> { /* Vi använder exact här för att enbart matcha mot ett / */}
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
