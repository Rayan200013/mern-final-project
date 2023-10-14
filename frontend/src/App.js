import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import AboutUs from "./components//Aboutus"; // Correct the import
import Category from "./components/Category";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import ScrollToTop from "./components/ScrollToTop";
import Restaurants from "./components/Restaurants";
import Accommodations from "./components/Accommodations";
import Activities from "./components/Activities";
import Landmarks from "./components/Landmarks";
import Destination from "./components/Destination";
import DestinationSingle from "./components/DestinationSingle";
import ChatApp from "./components/ChatApp";
import Favorites from "./components/Favorites";
import EachCategory from "./components/EachCategory";
import Contact from "./components/ContactUs";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* Add this route */}
          <Route path="/category" element={<Category />} />{" "}
          <Route path="/SignIn" element={<SignIn />} /> {/* Add this route */}
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/Accommodations" element={<Accommodations />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Landmarks" element={<Landmarks />} />
          <Route path="/SignUp" element={<SignUp />} /> {/* Add this route */}
          <Route path="/destination" element={<Destination />} />
          <Route path="/DestinationSingle" element={<DestinationSingle />} />
          <Route path="/ChatApp" element={<ChatApp />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/EachCategory" element={<EachCategory />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add this route */}
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
