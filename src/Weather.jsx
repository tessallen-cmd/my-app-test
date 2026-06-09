import React from "react";
import "./Weather.css";
export default function Weather(){
    return (
      <div className="Weather">
<form>
    <div className="row">
        <div className="col-9">
   <input 
   type="search" 
   placeholder="Enter a city.." 
   className="form-control"/>
   </div>
   <div className="col-3">
   <input type="submit" value="Search" className="btn btn-primary" />
   </div>
 </div>
</form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"
              alt="Sunny"
              className=""
            />
            23 ℃|℉
          </div>
          <div className="col">
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 39%</li>
                <li>Wind: 9 mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
