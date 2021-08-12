import cloud1 from '../assets/images/cloud1.jpg';
import cloud2 from '../assets/images/cloud2.jpg';
import cloud3 from '../assets/images/cloud3.jpg';

import clear1 from '../assets/images/clear1.jpg';
import clear2 from '../assets/images/clear2.jpg';
import clear3 from '../assets/images/clear3.jpg';

import rain1 from '../assets/images/rain1.jpg';
import rain2 from '../assets/images/rain2.jpg';
import rain3 from '../assets/images/rain3.jpg';

import thunderstorm1 from '../assets/images/thunderstorm1.jpg';
import thunderstorm2 from '../assets/images/thunderstorm2.jpg';
import thunderstorm3 from '../assets/images/thunderstorm3.jpg';

import snow1 from '../assets/images/snow1.jpg';
import snow2 from '../assets/images/snow2.jpg';
import snow3 from '../assets/images/snow3.jpg';

import drizzle1 from '../assets/images/drizzle1.jpg';
import drizzle2 from '../assets/images/drizzle2.jpg';
import drizzle3 from '../assets/images/drizzle3.jpg';

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomImg = (weather) => {
  const cloudImages = [cloud1, cloud2, cloud3];
  const clearImages = [clear1, clear2, clear3];
  const rainImages = [rain1, rain2, rain3];
  const thunderstormImages = [thunderstorm1, thunderstorm2, thunderstorm3];
  const snowImages = [snow1, snow2, snow3];
  const drizzleImages = [drizzle1, drizzle2, drizzle3];

  let imageUrl;
  let randNum;

  if (weather === 'Clouds') {
    randNum = getRndInteger(1, cloudImages.length);
    imageUrl = cloudImages[randNum - 1];
  }

  if (weather === 'Clear') {
    randNum = getRndInteger(1, clearImages.length);
    imageUrl = clearImages[randNum - 1];
  }

  if (weather === 'Rain') {
    randNum = getRndInteger(1, rainImages.length);
    imageUrl = rainImages[randNum - 1];
  }

  if (weather === 'Thunderstorm') {
    randNum = getRndInteger(1, thunderstormImages.length);
    imageUrl = thunderstormImages[randNum - 1];
  }

  if (weather === 'Snow') {
    randNum = getRndInteger(1, snowImages.length);
    imageUrl = snowImages[randNum - 1];
  }

  if (weather === 'Drizzle') {
    randNum = getRndInteger(1, drizzleImages.length);
    imageUrl = drizzleImages[randNum - 1];
  }

  return imageUrl;
};

export default getRandomImg;