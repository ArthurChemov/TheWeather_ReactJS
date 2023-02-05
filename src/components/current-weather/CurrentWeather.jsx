import React from "react";
import "./CurrentWeather.scss";
import { useDate } from '../utilities/useDate';

const CurrentWeather = ({ data }) => {


  return (
    <div className="weather">
      <div className="curr">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="date">{useDate().date.toUpperCase()} {useDate().time.toUpperCase()}</p>
            <p className="weather-description">{data.weather[0].description.toUpperCase()}</p>
          </div>
          <i className="bi bi-brightness-high-fill"></i>
          {/* <img
            alt="weather"
            className="weather-icon"
            src={icon}
            // src={`../../assets/icons/${data.weather[0].icon}.png`}
          /> */}
          {/* <div className="icon">
            <i className="bi bi-brightness-high"></i>
          </div> */}
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <i class="bi bi-wind"></i>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <i class="bi bi-droplet"></i>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;