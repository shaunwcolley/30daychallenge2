const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date()
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`

  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`

  const hour = now.getHours();
  const hourDegrees = (hour / 24) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  console.log(`hour: ${hour} mins: ${minutes} seconds: ${seconds}`);
};

setInterval(setDate, 1000);
