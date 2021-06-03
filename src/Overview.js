import React from "react";
import "./overview.css";

export default function Overview(props) {
  return (
    <div className="overview">
      <div className="row">
        <div className="col-6">
          <h1 className="city">{props.city}</h1>
        </div>
        <div className="col-6">
          <p className="date">{props.value}</p>
        </div>
      </div>
    </div>
  );
}
