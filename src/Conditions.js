import React from "react";
import "./conditions.css";

export default function Conditions(props) {
  return (
    <div className="col-6">
      <ul className="conditions">
        <li>{props.value}</li>
        <li>Humidity: 77%</li>
        <li>Wind: 11 mph</li>
      </ul>
    </div>
  );
}
