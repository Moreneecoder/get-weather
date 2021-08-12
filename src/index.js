import './assets/stylesheets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import './assets/images/sheyi-lagos.jpg';
import { getWeather, displayWeather, convertTempUnit } from './components/weather';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('default-bg');

  getWeather().then((res) => displayWeather(res));

  const weatherForm = document.querySelector('#weather-form');

  weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = document.querySelector('#city-name').value;
    getWeather(city).then((res) => displayWeather(res));
    weatherForm.reset();
  });

  const switchCheck = document.querySelector('#switch');

  switchCheck.addEventListener('click', () => {
    convertTempUnit(switchCheck);
  });
});