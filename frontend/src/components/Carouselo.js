import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carouselo.css";
import api from "../api";

const Carouselo = () => {
  const [selectedLink, setSelectedLink] = useState("all");
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [landmarksData, setLandmarksData] = useState([]);
  const [activitiesData, setActivitiesData] = useState([]);
  const [accommodationsData, setAccommodationsData] = useState([]);
  const [allData, setAllData] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    getLandmarks();
  }, []);

  useEffect(() => {
    getActivities();
  }, []);

  useEffect(() => {
    getAccommodations();
  }, []);

  const getAllData = async () => {
    try {
      const response = await api.get(
        "http://127.0.0.1:3001/api/allData/getAllData"
      );
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRestaurants = async () => {
    try {
      const response = await api.get(
        "http://127.0.0.1:3001/api/restaurants/getAllRestaurants"
      );
      setRestaurantsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLandmarks = async () => {
    try {
      const response = await api.get(
        "http://127.0.0.1:3001/api/landmarks/getAllLandmarks"
      );
      setLandmarksData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getActivities = async () => {
    try {
      const response = await api.get(
        "http://127.0.0.1:3001/api/activities/getAllActivities"
      );
      setActivitiesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAccommodations = async () => {
    try {
      const response = await api.get(
        "http://127.0.0.1:3001/api/accommodations/getAllAccommodations"
      );
      setAccommodationsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="carousel-onezz">
        <h2 style={{ color: "black" }}>Explore Our Diverse Categories</h2>
        <ul className="nav justify-content-center">
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${selectedLink === "all" ? "active" : ""}`}
              onClick={() => setSelectedLink("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${
                selectedLink === "restaurantsId" ? "active" : ""
              }`}
              onClick={() => setSelectedLink("restaurantsId")}
            >
              Restaurants
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${
                selectedLink === "accommodationsId" ? "active" : ""
              }`}
              onClick={() => setSelectedLink("accommodationsId")}
            >
              Accommodations
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${
                selectedLink === "activitiesId" ? "active" : ""
              }`}
              onClick={() => setSelectedLink("activitiesId")}
            >
              Activities
            </button>
          </li>
          <li className="nav-item rayanz-nav-item-carouselo">
            <button
              className={`nav-link ${
                selectedLink === "landmarksId" ? "active" : ""
              }`}
              onClick={() => setSelectedLink("landmarksId")}
            >
              Landmarks
            </button>
          </li>
        </ul>

        <Slider {...settings}>
          {allData.map(
            (card) =>
              selectedLink === "all" && (
                <div className="boxing-rayanz">
                  <img
                    src={card[0]?.Images}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <button className="card-title">{card[0]?.Name}</button>
                    <p>{card[0]?.PhoneNumber}</p>
                  </div>
                </div>
              )
          )}
          {restaurantsData.map(
            (card) =>
              selectedLink === "restaurantsId" && (
                <div className="boxing-rayanz" key={card.id}>
                  <img
                    src={card?.Images}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <button className="card-title">{card?.Name}</button>
                    <p>{card?.PhoneNumber}</p>
                  </div>
                </div>
              )
          )}
          {landmarksData.map(
            (card) =>
              selectedLink === "landmarksId" && (
                <div className="boxing-rayanz" key={card.id}>
                  <img
                    src={card?.Images}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <button className="card-title">{card?.Name}</button>
                    <p>{card?.PhoneNumber}</p>
                  </div>
                </div>
              )
          )}
          {activitiesData.map(
            (card) =>
              selectedLink === "activitiesId" && (
                <div className="boxing-rayanz" key={card.id}>
                  <img
                    src={card?.Images}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <button className="card-title">{card?.Name}</button>
                    <p>{card?.PhoneNumber}</p>
                  </div>
                </div>
              )
          )}
          {accommodationsData.map(
            (card) =>
              selectedLink === "accommodationsId" && (
                <div className="boxing-rayanz" key={card.id}>
                  <img
                    src={card?.Images}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <button className="card-title">{card?.Name}</button>
                    <p>{card?.PhoneNumber}</p>
                  </div>
                </div>
              )
          )}
        </Slider>
      </div>
    </>
  );
};

export default Carouselo;
