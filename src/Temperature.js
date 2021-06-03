import React from "react";
import "./temperature.css";

export default function Temperature(props) {
  return (
    <div className="col-6">
      <div className="clearfix weather-temperature">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          className="float-left icon"
        />
        <strong>{Math.round(props.value)}</strong>
        <span className="units">
          <a href="/">°F</a> |<a href="/">°C</a>
        </span>
      </div>
    </div>
  );
}
