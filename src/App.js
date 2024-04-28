
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/resident" element={<Home />} />
        <Route path="/listing" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
