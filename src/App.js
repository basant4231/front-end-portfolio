import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./component/navbar";
import Home from "./pages/hompage";
import Footer from "./component/footer";
import About from "./pages/about";
import Services from './pages/services';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <div className="App">
        <Navbar /> {/* The Navbar is rendered ONCE, outside the Routes */}

        <Routes> {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          {/* Add more routes for other pages as you create them */}
          <Route path="/about" element={<About />} /> 
           <Route path="/services" element={<Services />} /> 
             <Route path="/contact" element={<Contact />} /> 
         <Route path="/portfolio" element={<Portfolio />} /> 
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        {/* You might also have a common Footer component here, rendered once */}
         <Footer /> 
      </div>
    </Router>
  );
}

export default App;
