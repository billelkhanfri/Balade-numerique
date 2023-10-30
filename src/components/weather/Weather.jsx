import React, { useEffect, useState } from "react";
import Clear from "../../assets/weather-icons/clear.png";
import Cloud from "../../assets/weather-icons/cloud.png";
import Drizzle from "../../assets/weather-icons/drizzle.png";
import Humidity from "../../assets/weather-icons/humidity.png";
import Rain from "../../assets/weather-icons/rain.png";
import Snow from "../../assets/weather-icons/snow.png";
import Wind from "../../assets/weather-icons/wind.png";
import "./weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [wicon, setWicon] = useState(Clear);

  const fetchWeatherData = async () => {
    const apiKey = "83c3cee8d38f7fbc3fd7c0afbf7b118b"; // Replace with your OpenWeatherMap API key
    // const lon = "5.928";
    // const lat = "43.124228";
    const apiUrl = `http://localhost:3001/data/2.5/weather?q=Lyon,fr&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        // Check the weather icon and update wicon accordingly
        if (data.weather && data.weather.length > 0) {
          const icon = data.weather[0].icon;
          if (icon === "01d" || icon === "01n") {
            setWicon(Clear);
          } else if (icon === "02d" || icon === "02n") {
            setWicon(Cloud);
          } else if (icon === "03d" || icon === "03n") {
            setWicon(Drizzle);
          } else if (icon === "04d" || icon === "04n") {
            setWicon(Drizzle);
          } else if (icon === "09d" || icon === "09n") {
            setWicon(Rain);
          } else if (icon === "10d" || icon === "10n") {
            setWicon(Rain);
          } else if (icon === "13d" || icon === "13n") {
            setWicon(Snow);
          } else {
            setWicon(Clear);
          }
        }
      } else {
        console.error(
          "Failed to fetch weather data. Check your API key and endpoint."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="weather-widget">
      {weatherData ? (
        <div className="weather-container">
          <div className="weather-image">
            <img src={wicon} alt="" />
          </div>
          <div className="weather-temp">
            {Math.floor(weatherData.main.temp)} °C
          </div>
          <div className="weather-location">{weatherData.name}</div>
          <div className="data-container">
            {/* Add other weather data elements here */}
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
