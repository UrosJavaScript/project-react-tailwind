import React, { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "86aa051a22372d7a7098d67b5968335f";

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=metric&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log(error));
    }, 1000);
  }, []);

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return <WiDaySunny />;
      case "02d":
      case "03d":
      case "04d":
        return <WiCloudy />;
      case "09d":
      case "10d":
        return <WiRain />;
      case "13d":
        return <WiSnow />;
      case "11d":
        return <WiThunderstorm />;
      default:
        return null;
    }
  };

  return (
    <div>
      {weatherData ? (
        <div className="flex flex-col text-primaryColor">
          <h3>
            Weather in:&nbsp;
            <span className="font-semibold">{weatherData.name}</span>
          </h3>
          <p>
            Temperature:&nbsp;
            <span className="font-semibold">{weatherData.main.temp}°C</span>
          </p>
          <p>
            Description:&nbsp;
            <span className="font-semibold">
              {weatherData.weather[0].description}
            </span>
          </p>
          <div className="flex flex-row items-center">
            Icon:
            <span className="text-[50px]">
              {getWeatherIcon(weatherData.weather[0].icon)}
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
