import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Resume from "./Components/Resume/Resume.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Load from "./Components/Loading/Load.jsx";

function App() {

  const [load, updateLoad] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      updateLoad(true);
    }, 1500);
  }, []);

  return (
    <>
      <Load load={load} />
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
