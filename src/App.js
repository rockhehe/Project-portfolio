import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/Navbar";
import Footer from './components/Footer';
import BackgroundAnimation from './Animation';
import Projects from './components/Project/proj';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <BackgroundAnimation />
       
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
