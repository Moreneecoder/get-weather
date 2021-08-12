import './assets/stylesheets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import './assets/images/sheyi-lagos.jpg';
import { getWeather, displayWeather } from './components/weather';

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('#main');
  mainContent.classList.add('default-bg');

  getWeather().then((res) => displayWeather(res));
});