import './App.css';
import { BrowserRouter , Routes, Route , NavLink } from 'react-router-dom'

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
// import { useState } from 'react';

function App() {
  // const [loggedIn] = useState(false);
  return (
  <div className="App">
    <BrowserRouter>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/test'>Test</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about/*' element={<About/>} />
        <Route path='/articles/:id' element={<Articles/>} />
      </Routes>    
    </BrowserRouter>
  </div>
  );
}

export default App;