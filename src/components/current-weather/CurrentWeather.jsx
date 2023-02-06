import React from "react";
import "./CurrentWeather.scss";
import { useDate } from '../utilities/useDate';
import WeatherIcon from "../utilities/WeatherIcon";

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
          {data.weather[0].icon && <WeatherIcon svgdata={data.weather[0].icon}/>}
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
              <i className="bi bi-wind"></i>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <i className="bi bi-droplet"></i>
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