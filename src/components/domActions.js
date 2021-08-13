const updateDom = (weather) => {
  document.querySelector('#location').textContent = `${weather.city}, ${weather.country}`;
  document.querySelector('#weather-desc').textContent = weather.desc.toUpperCase();
  document.querySelector('#wind-speed').textContent = `${weather.windSpeed} km/h`;
  document.querySelector('#weather-icon').src = weather.iconurl;
  document.querySelector('#temp').textContent = `${weather.temp}`;
  document.querySelector('#unit').textContent = '°c';
  document.querySelector('#latitude').textContent = weather.latitude;
  document.querySelector('#longitude').textContent = weather.longitude;
  document.querySelector('#time-city').textContent = `${weather.city} Time`;
  document.querySelector('#switch').checked = null;
};

const setDefaultBg = () => {
  document.body.classList.add('default-bg');
};
export { updateDom, setDefaultBg };