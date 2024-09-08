import React, { useState, useEffect } from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from "./Components/Skills/Skills.jsx";
import Resume from "./Components/Resume/Resume.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Load from "./Components/Loading/Load.jsx";
import { Link as ScrollLink, Element } from 'react-scroll';

function App() {

  const [load, updateLoad] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      updateLoad(true);
    }, 500);
  }, []);

  return (
    <>
      <Load load={load} />
      <NavBar />
      <ScrollLink />
      <Element name="home">
        <Home />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
};

export default App;
