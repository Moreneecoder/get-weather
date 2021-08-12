const checkTime = (i) => {
  if (i < 10) { i = `0${i}`; } // add zero in front of numbers < 10
  return i;
};

const startTime = () => {
  const today = new Date();
  const h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  let timeType = 'PM';
  if (h < 12) {
    timeType = 'AM';
  }

  document.getElementById('time').innerHTML = `${h}:${m}:${s} ${timeType}`;
  setInterval(startTime, 500);
};

const displayDate = () => {
  const days = ['Monday', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'Sept', 'October', 'November', 'December',
  ];

  const today = new Date();
  const date = `${days[today.getDay() - 1]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
  document.getElementById('date-display').innerHTML = date;
};

export { startTime, displayDate };