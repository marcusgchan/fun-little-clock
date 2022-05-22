const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

setInterval(positionHand, 1000);

function positionHand() {
  const date = new Date();
  const hour = convertTo12H(date.getHours());
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const hourInDegrees = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourInDegrees}deg)`;
  const minuteInDegrees = (minute / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteInDegrees}deg)`;
  const secondInDegrees = (second / 60) * 360;
  secondHand.style.transform = `rotate(${secondInDegrees}deg)`;
}

function convertTo12H(hour) {
  return hour <= 12 ? hour : hour - 12;
}
