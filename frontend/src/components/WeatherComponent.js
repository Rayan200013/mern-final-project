import React, { useState, useEffect } from "react";
import weathersection from "../images/weathersection.jpg";

const WeatherComponent = () => {
  const [location, setLocation] = useState("Lebanon"); // Default location is Lebanon
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const apiKey = "7f876c297f0259b35fd31ef1042bca07"; // Replace with your actual API key

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const fetchWeatherData = (location) => {
    // Clear previous error message
    setErrorMessage(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          // Handle the case when the response status is not OK (e.g., 404 Not Found)
          throw new Error("Location not found");
        }
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
        setErrorMessage("Location not found. Please check the name.");
      });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <div class="container col-xxl-8 px-4 py-5">
        <h2 class="pb-2 border-bottom h2-rayan">Check Weather</h2>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={weathersection}
              class="d-block mx-lg-auto img-fluid about-section-in-home"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>

          <div class="col-lg-6">
            <div className="weather-form">
              {/* User input form */}
              <h2>Check Weather</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={handleLocationChange}
                />
              </form>
              {/* Display error message if location not found */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="weather-display">
              {/* Display weather information here */}
              {weatherData && weatherData.main && (
                <div>
                  <h2>Weather in {location}</h2>
                  <p>Temperature: {weatherData.main.temp}°C</p>
                  <p>Weather: {weatherData.weather[0].description}</p>
                </div>
              )}
              {weatherData && !weatherData.main && !errorMessage && (
                <div>
                  <h2>Loading weather data...</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
