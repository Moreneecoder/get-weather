import { startTime, displayDate } from './time';
import getRandomImg from './image';
import { updateDom } from './domActions';

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
    main: response.weather[0].main,
    desc: response.weather[0].description,
    iconurl: `http://openweathermap.org/img/w/${iconCode}.png`,
    cityTimeStamp: parseInt(response.dt, 10),
    cityTimeZone: parseInt(response.timezone, 10),
    latitude: response.coord.lat,
    longitude: response.coord.lon,
    windSpeed: response.wind.speed,
  });
};

const updateBg = (weather) => {
  const img = getRandomImg(weather.main);
  document.body.style.backgroundImage = `url(${img})`;
};

const displayWeather = (response) => {
  const errorMsg = document.querySelector('#error-message');

  if (response.cod === '404') {
    errorMsg.textContent = 'CITY NOT FOUND. PLEASE CROSSCHECK YOUR INPUT';
    errorMsg.style.display = 'block';
    return;
  }

  const weather = weatherFormatted(response);

  updateDom(weather);

  startTime();
  startTime(weather.cityTimeZone, 'local-time');
  displayDate();
  updateBg(weather);

  errorMsg.style.display = 'none';
};

const toFahrenheit = () => {
  const temp = document.querySelector('#temp').textContent;
  document.querySelector('#temp').textContent = ((parseFloat(temp) * (9 / 5)) + 32).toFixed(2);
  document.querySelector('#unit').textContent = '°f';
};

const toCelsius = () => {
  const temp = document.querySelector('#temp').textContent;
  document.querySelector('#temp').textContent = ((parseFloat(temp) - 32) * (5 / 9)).toFixed(2);
  document.querySelector('#unit').textContent = '°c';
};

const convertTempUnit = (switchCheck) => {
  if (switchCheck.checked) {
    toFahrenheit();
    return;
  }

  toCelsius();
};

export { getWeather, displayWeather, convertTempUnit };