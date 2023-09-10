// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
