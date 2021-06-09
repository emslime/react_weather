import axios from "axios";
import React from "react";
import "./forecast.css";

export default function Forecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  const apiKey = "db51b5a53faf37133eab9327ddad8802";
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showForecast);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <div className="Forecast-icon">
            <img src={props.icon} alt={props.description} className="icon" />
          </div>
          <div className="Forecast-temps">
            <span className="Forecast-max">66°</span>
            <span className="Forecast-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
