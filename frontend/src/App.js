import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import AboutUs from "./components//Aboutus"; // Correct the import

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter and Routes

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
