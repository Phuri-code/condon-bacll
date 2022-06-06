const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "14 nov 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// intail call
countdown();

setInterval(countdown, 1000);
//test BIM

function National_institutes_of_Healthy(weigth, height) {
  var BMI = weigth / height ** 2;
  if (BMI < 18.5) {
    console.log(
      "your weight is ",
      BMI,
      "you are less than 18.5.",
      "it's mean you are underweight."
    );
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("your weight is ", BMI, "It's mean you are ideal.");
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log("your weight is", BMI, "It's mean you are overweight.");
  } else {
    console.log("your weight is", BMI, "It's mean you are obesity");
  }
}
National_institutes_of_Healthy(51, 1.69);
