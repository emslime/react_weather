import React from "react";

export default function Temperature(props) {
  return (
    <span className="Temperature">
      <strong>{props.imperial}</strong>
      <span className="units">°F</span>
    </span>
  );
}
