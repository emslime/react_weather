import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

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
          <div className="clearfix">
            <div className="weather-temperature float-left">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="icon"
              />
              <Temperature imperial={Math.round(props.data.temperature)} />
            </div>
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
