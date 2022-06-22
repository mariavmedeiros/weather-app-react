import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className=" btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> Sao Paulo</h1>{" "}
      <ul>
        <li>Sunday 05:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudy"
              className="float-left"
            />

            <span className="temperature">10</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:40%</li>
            <li>Wind: 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
