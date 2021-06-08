import React from "react";
import FormattedDate from "./FormattedDate";

export default function Results(props) {
  return (
    <div className="results">
      <div className="overview">
        <div className="row">
          <div className="col-6">
            <h1 className="city">{props.data.city}</h1>
          </div>
          <div className="col-6">
            <h2 className="date">
              <FormattedDate date={props.data.date} />
            </h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left icon"
            />
            <strong>{Math.round(props.data.temperature)}</strong>
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
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
