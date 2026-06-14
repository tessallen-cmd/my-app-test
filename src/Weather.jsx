import React, {useState} from "react";
import axios from"axios";
import "./Weather.css";


export default function Weather(){
  
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      date: "Wednesday 07:00",
    });
    
  }

  if (weatherData.ready) {
   
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="true"
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
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 ">
            <div className="clearfix">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                alt={weatherData.description}
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
              <li>
                <li> Humidity:{weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} kmph</li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
const apiKey = "9117d16f27ad34748062df20bto34069";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${prop.defaultCity}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse); 


    return "Loading....";
  }
}


