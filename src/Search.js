import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setName] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [string, setString] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [speed, setSpeed] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateName(event) {
    setName(event.target.value);
  }

  function Submit(event) {
    event.preventDefault();
    setString(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e5b57c35b922297644dec58a82f602c&units=metric`;
    axios.get(url).then(showWeather);
    function showWeather(response) {
      setLoaded(true);
      setTemperature(response.data.main.temp);
      setHumidity(response.data.main.humidity);
      setDescription(response.data.weather[0].description);
      setSpeed(response.data.wind.speed);
      setIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    }
  }
  let form = (
    <div>
      <form onSubmit={Submit}>
        <input type="search" placeholder="Tape a city" onChange={updateName} />
        <button type="Submit">Search</button>
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div className="Search">
        {form}
        <ul>
          <h2>{string}</h2>
          <li>Temperature: {Math.round(temperature)}°C </li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {speed}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
