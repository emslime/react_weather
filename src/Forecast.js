import React from "react";
import "./forecast.css";

export default function Forecast(props) {
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
