const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const url = `http://api.weatherapi.com/v1/current.json?key=0319956a507e473dbff24415222002&q=seoul&aqi=yes`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.location.name;
      weather.innerText = data.current.condition.text;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
