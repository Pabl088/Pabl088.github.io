import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
