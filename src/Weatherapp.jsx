import React, { useState, useEffect } from 'react';
import clear from './Assets/clear.png';
import cloud from './Assets/cloud.png';
import drizzle from './Assets/drizzle.png';
import rain from './Assets/rain.png';
import snow from './Assets/snow.png';
import axios from 'axios';
import './Weatherapp.css'
function Weatherapp() {
  const [city, setCity] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const API_KEY = "dd94f859a0e52d6e4767fddf735f04a7";

  const searchLocation = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`);
      setCity(response.data);
    } catch (err) {
      alert("Not Found");
    }
  };

  useEffect(() => {
    console.log(city.weather?.[0].icon);
  }, [city]);

  return (
    
    
    <div className='jj'>
      <div className='jjj'>
      <input 
        type="text"
        id="search"
        
        placeholder="Search city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit btn  border-rounded" onClick={searchLocation}>
        Search
      </button>
      </div>

      {
      city.weather && (
        <div>
          <div className='contentdark'>
          <h2>{city.name}, {city.sys.country}</h2>
          <p> {city.weather[0].description}</p>
          <p>Temperature: {city.main.temp} °C</p>
          <p>Humidity: {city.main.humidity} %</p>
          <p>Wind: {city.wind.speed} km/h</p>
          </div>

          <div className="weather-image" >
            {city.weather.map((obj, index) => (
              <img
                key={index}
                src={
                  obj.icon === "04d" || obj.icon === "04n"
                    ? cloud
                    : obj.icon === "10d" || obj.icon === "10n"
                    ? drizzle
                    : obj.icon === "13d" || obj.icon === "13n"
                    ? snow
                    : obj.icon === "11d" || obj.icon === "11n"
                    ? rain
                    : clear
                }
                alt="Weather Icon"
              />
            ))}
          </div>
        </div>
      )}<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    
  );
}

export default Weatherapp;
