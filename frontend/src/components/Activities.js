import React from "react";
import { useState, useEffect } from "react";
import "../css/category.css";
import api from "../api";
import { Link } from "react-router-dom";

function Category() {
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    getActivities();
  }, []);

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

  return (
    <>
      <nav className="breadcrumb-divider" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Categories
          </li>
        </ol>
      </nav>
      {/* Breadcrumb */}

      {/* nav links start*/}
      <hr></hr>
      <ul class="nav justify-content-center nav-tabs">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/category">
            All
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Restaurants">
            Restaurants
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Accommodations">
            Accommodations
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Activities">
            Activities
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Landmarks">
            Landmarks
          </Link>
        </li>
      </ul>
      <div className="card-container">
        {activitiesData.map((data) => (
          <div className="card">
            <div className="favorite-icon">
              <svg
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.4)"
                xmlns="http://www.w3.org/2000/svg"
                alt="Favorite icon"
                width="36px"
                height="36px"
                className="icon" // Add this class to the icon
              >
                <path d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4Z"></path>
                <path
                  d="M11 8a1 1 0 1 0 2 0h-2Zm1 12-.486.874a1 1 0 0 0 .972 0L12 20Zm1-12c0-.31.268-1.069 1-1.786A4.215 4.215 0 0 1 17 5V3c-1.896 0-3.39.795-4.4 1.786-.968.95-1.6 2.19-1.6 3.214h2Zm4-3c1.274 0 1.974.508 2.389 1.084.45.627.611 1.41.611 1.916h2c0-.827-.24-2.044-.988-3.084C20.226 3.825 18.926 3 17 3v2Zm3 3c0 3.076-1.994 5.827-4.187 7.898a24.815 24.815 0 0 1-3.948 3.02 14.419 14.419 0 0 1-.333.198l-.015.009a.029.029 0 0 0-.003.001L12 20l.486.874h.001l.002-.002.007-.004a4.127 4.127 0 0 0 .108-.061 24.617 24.617 0 0 0 1.368-.872 26.816 26.816 0 0 0 3.215-2.583C19.494 15.172 22 11.924 22 8h-2Zm-8 12a230.888 230.888 0 0 1 .486-.874l-.003-.002-.015-.008a10.955 10.955 0 0 1-.333-.198 24.81 24.81 0 0 1-3.948-3.02C5.994 13.828 4 11.076 4 8H2c0 3.924 2.506 7.173 4.813 9.352a26.822 26.822 0 0 0 4.279 3.273 16.592 16.592 0 0 0 .412.243l.007.004a.032.032 0 0 1 .003.002L12 20ZM4 8c0-.507.16-1.289.612-1.916C5.026 5.508 5.726 5 7 5V3c-1.926 0-3.226.825-4.012 1.916C2.24 5.956 2 7.173 2 8h2Zm3-3c1.304 0 2.31.538 3 1.214.732.717 1 1.476 1 1.786h2c0-1.023-.632-2.265-1.6-3.214A6.214 6.214 0 0 0 7 3v2Z"
                  fill="#fff"
                ></path>
                {/* Icon path here */}
              </svg>
            </div>
            <div className="image-container">
              <img
                src={data?.Images}
                alt="{data.title}"
                style={{ height: "50%" }}
              />
            </div>
            <div className="card-content">
              <button>
                <p>{data.Name}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
