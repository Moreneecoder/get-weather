import startTime from "./time";

const getWeather = async (location = 'Loburo') => {
  let data;
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=a724f51917c1f090a2c33698937540c3`;
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

const weatherFormatted = (response) => {
  const iconCode = response.weather[0].icon;

  return ({
    city: response.name,
    country: response.sys.country,
    temp: response.main.temp,
    desc: response.weather[0].description,
    iconurl: `http://openweathermap.org/img/w/${iconCode}.png`,
    cityTimeStamp: parseInt(response.dt, 10),
    cityTimeZone: parseInt(response.timezone, 10),
    latitude: response.coord.lat,
    longitude: response.coord.lon,
    windSpeed: response.wind.speed,    
  });
};

const displayWeather = (response) => {
  const errorMsg = document.querySelector('#error-message');

  if (response.cod === '404') {    
    errorMsg.textContent = "CITY NOT FOUND. PLEASE CROSSCHECK YOUR INPUT";
    errorMsg.style.display = 'block';
    return;
  }

  const weather = weatherFormatted(response);

  document.querySelector('#location').textContent = `${weather.city}, ${weather.country}`;
  document.querySelector('#weather-desc').textContent = weather.desc.toUpperCase();
  document.querySelector('#wind-speed').textContent = `${weather.windSpeed} km/h`;
  document.querySelector('#weather-icon').src = weather.iconurl;
  document.querySelector('#temp').textContent = `${weather.temp}°c`;
  document.querySelector('#latitude').textContent = weather.latitude;
  document.querySelector('#longitude').textContent = weather.longitude;
  document.querySelector('#time-city').textContent = `${weather.city} Time`;
  startTime()

  errorMsg.style.display = 'none';
};

export { getWeather, displayWeather };