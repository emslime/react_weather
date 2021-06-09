import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("imperial");

  if (unit === "imperial") {
    return (
      <span className="Temperature">
        <strong>{props.imperial}</strong>
        <span className="units">
          °F |{" "}
          <a href="/" className="celsius" onClick={showMetric}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <strong>{Math.round(((props.imperial - 32) * 5) / 9)}</strong>
        <span className="units">
          <a href="/" className="fahrenheit" onClick={showImperial}>
            °F{" "}
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
}
