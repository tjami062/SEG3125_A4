import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;