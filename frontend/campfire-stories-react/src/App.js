import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useReducer} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './navbarPages/about';
import Home from './navbarPages/home';
import CampfireSafety from './navbarPages/campfireSafety';


function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/campfireSafety' element={<CampfireSafety />} exact />
            <Route path='/about' element={<About />} exact />

        </Routes>
      </Router>

  );
}

export default App;
