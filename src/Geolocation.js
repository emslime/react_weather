import React from "react";
import "./geolocation.css";

export default function Geolocation() {
  return (
    <div className="location">
      <p>
        <button className="btn btn-outline-light current-button">
          Click here
        </button>{" "}
        to see the weather for your current location
      </p>
    </div>
  );
}
