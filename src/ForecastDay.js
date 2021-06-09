import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
          className="icon"
        />
      </div>
      <div className="Forecast-temps">
        <span className="Forecast-max">{Math.round(props.data.temp.max)}°</span>
        <span className="Forecast-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
