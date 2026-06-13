import React, {useState} from "react";
import axios from"axios";
import "./Weather.css";


export default function Weather(){
  const [ready,setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    
    setWeatherData({
temperature:response.data.temperature.current,
wind: response.data.wind.speed,
city: response.data.city,
humidity: response.data.humidity,




    });
    setReady (true);
  }

  if (ready) {
   
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 ">
            <div className="clearfix">
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"
                alt="Sunny"
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">℃|℉ </span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
const apiKey = "9117d16f27ad34748062df20bto34069";
let city = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);


    return "Loading....";
  }
}


