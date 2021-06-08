import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: "https://openweathermap.org/img/wn/10d@2x.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3 search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Start here ..."
                className="form-control city-input"
                autoFocus="off"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-light search-button"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{weatherData.city}</h1>
            </div>
            <div className="col-6">
              <h2 className="date">
                <FormattedDate date={weatherData.date} />
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left icon"
              />
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/" className="fahrenheit">
                  °F
                </a>{" "}
                |
                <a href="/" className="celsius">
                  °C
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul className="conditions">
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
        <div className="location">
          <p>
            <button className="btn btn-outline-light current-button">
              Click here
            </button>{" "}
            to see the weather at your current location
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "db51b5a53faf37133eab9327ddad8802";
    let city = "Las Vegas";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return <div className="loader">Loading...</div>;
  }
}
