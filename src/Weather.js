import React from "react";
import "./weather.css";

export default function Weather() {
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
            <h1 className="city">Cincinnati</h1>
          </div>
          <div className="col-6">
            <p className="date">Wednesday 11:11</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              className="float-left icon"
            />
            <strong>66</strong>
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
            <li>broken clouds</li>
            <li>Humidity: 77%</li>
            <li>Wind: 11 mph</li>
          </ul>
        </div>
      </div>
      <div className="location">
        <p>
          <button className="btn btn-outline-light current-button">
            Click here
          </button>{" "}
          to see the weather for your current location
        </p>
      </div>
    </div>
  );
}
