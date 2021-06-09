import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Forecast from "./Forecast";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coords: response.data.coord,
    });
  }

  function search() {
    const apiKey = "db51b5a53faf37133eab9327ddad8802";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function pressSearch(event) {
    event.preventDefault();
    search();
  }

  function showSearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3 search-form" onSubmit={pressSearch}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Start here ..."
                className="form-control city-input"
                autoFocus="off"
                autoComplete="off"
                onChange={showSearch}
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
        <Results data={weatherData} />
        <Forecast
          icon={weatherData.icon}
          alt={weatherData.description}
          coords={weatherData.coords}
        />
      </div>
    );
  } else {
    search();
    return <div className="loader">Loading...</div>;
  }
}
