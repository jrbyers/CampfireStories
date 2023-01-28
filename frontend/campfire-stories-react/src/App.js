import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useReducer} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './navbarPages';
import About from './navbarPages/about';
import Home from './navbarPages/home';


function App() {

  const [count, setCount] = useState(0)

  function yoMamaButton() {
    setCount(count + 1)
  }



  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/about' element={<About />} exact />

        </Routes>
      </Router>

  );
}
/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>{count}</header>
        <p>
          jr <code>src/App.js</code> and save to reload.
        </p>
          <button id="yo mama" onClick={yoMamaButton}>
              Submit
          </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */

export default App;
