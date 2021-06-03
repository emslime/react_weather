import React from "react";
import "./search.css";

export default function Search() {
  return (
    <form className="mb-3 search-form">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Start here ..."
            className="form-control city-input"
            autoFocus="on"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-light search-button"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Current Location"
            className="btn btn-outline-light current-location-button"
          />
        </div>
      </div>
    </form>
  );
}
