import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
