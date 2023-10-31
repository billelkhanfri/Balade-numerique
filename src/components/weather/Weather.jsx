import React, { useEffect, useState } from "react";
import {WiHumidity} from 'react-icons/wi';
import {TiWeatherSunny,TiWeatherNight ,TiWeatherCloudy,TiWeatherShower,TiWeatherSnow, TiWeatherPartlySunny, TiWeatherDownpour, TiWeatherWindy} from "react-icons/ti"
import "./weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
 

  const fetchWeatherData = async () => {
    const apiKey = "83c3cee8d38f7fbc3fd7c0afbf7b118b"; 
   
    const apiUrl = `http://localhost:3001/data/2.5/weather?q=Toulon,fr&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
    
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
  const timestamp = 1698738641; 
const date = new Date(timestamp * 1000); 

const formattedDate = date.toLocaleDateString(); 

console.log(formattedDate); 

   
  return (
    <div className="weather-widget ">
      {weatherData ? (
        <div className="weather-container">
          <div className="weather-location"> <h4 > Météo à {weatherData.name}</h4>
          <p> {formattedDate}</p></div>
         <div className="weather-data"> 
         
          <div className="data-container">
          {weatherData.weather[0].icon === "01d" ? (
  <TiWeatherSunny className="weather-icon" />
) : (
  weatherData.weather[0].icon === "01n" ? <TiWeatherNight className="weather-icon"/> : null
)}
          {weatherData.weather[0].icon === "02d" ? (
  <TiWeatherPartlySunny className="weather-icon"/>
) : (
  weatherData.weather[0].icon === "02n" ? <TiWeatherCloudy  className="weather-icon"/> : null
)}
  {weatherData.weather[0].icon === "03d"  ||  weatherData.weather[0].icon === "03n"  ? (
   <TiWeatherDownpour className="weather-icon"/>
) 
 : null
}
{weatherData.weather[0].icon === "09d"  ||  weatherData.weather[0].icon === "09n"  || weatherData.weather[0].icon === "10d"  ||  weatherData.weather[0].icon === "10n"  ? (
  <TiWeatherShower className="weather-icon" /> 
) 
 : null
}
{weatherData.weather[0].icon === "04d"  ||  weatherData.weather[0].icon === "04n"  ? (
   <TiWeatherDownpour className="weather-icon"/>
) 
 : null
}
{weatherData.weather[0].icon === "13d"  ||  weatherData.weather[0].icon === "13n"  ? (
   <TiWeatherSnow className="weather-icon"/>
) 
 : null
}

          <div className="weather-temp">
            <p className="weather-value">
          {Math.floor(weatherData.main.temp)} °C
          </p>
          </div>
          

          </div>
         
          <div className="data-container">
          <div className="weather-image">
     <TiWeatherWindy className="weather-icon"/>
          </div>
          <div className="weather-temp">
            <p className="weather-value">
            {Math.floor(weatherData.wind.speed)} km/h
            </p>
            
          </div>
         
           
          </div>
          <div className="data-container">
          <div className="weather-image">
         <WiHumidity className="weather-icon"/>
          </div>
          <div className="weather-temp">
            <p className="weather-value">
            {Math.floor(weatherData.main.humidity)} %
            </p>
            
          </div>
           
           </div>
           </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
