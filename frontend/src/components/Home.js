import "../css/Home.css";
import { Link } from "react-router-dom";
import HomeOne from "./HomeOne";
// import "../App.css";
// import Navbar from "../components/Navbar";
import Carouselo from "./Carouselo";
import image2 from "../images/AI-four.png";

const Home = () => {
  return (
    <>
      <div>
        <HomeOne />
      </div>

      {/* 2nd Home Page */}
      {/* Home parent search section start */}
      <div className="home-parent-search-section">
        <div className="search-section">
          <h1>Hello World</h1>
          <p>lorem ipsumj ehudfeghiufslkjc eqbhfoiqgahef hefoigao</p>
          <input type="search" placeholder="Type to search" />
        </div>
      </div>
      {/* Home parent search section end */}

      {/* parent Ai-help section start */}
      <div className="parent-Ai-help">
        <div className="content-ai-help">
          <h2>Build a trip in minutes</h2>
          <p>
            Get a personalized itinerary just for you, guided by traveler tips
            and reviews.
            <br />
            Spend a day with me in Shouf
          </p>
          <button className="button-ai-help">Launch a trip with AI</button>
        </div>
        <div className="img-ai-help">
          <img src={image2} alt="" className="imagino-ai-help" />
        </div>
      </div>
      {/* parent Ai-help section end */}

      {/* Filter section Start*/}
      <div>
        <div className="carousel-section-new">
          <Carouselo />
        </div>
      </div>
      {/* Filter section End*/}

      {/* carousel section start
      <div className="carousel-section-new">
        <Carouselo />
      </div>
      carousel section end */}
    </>
  );
};

export default Home;
