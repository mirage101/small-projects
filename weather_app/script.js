const API_KEY = "83362fd0cf4b362b063720778283fc1b";
const weatherData = document.querySelector("#weather-data");
const cityInputEl = document.querySelector("#city-input");
const weatherForm = document.querySelector("form");
let city = "";
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(city) {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (!data.ok) {
      throw Error(data.message);
    } else {
      const weather = await data.json();
      renderWeather(weather);
      //console.log(weather);
    }
  } catch (error) {
    weatherData.querySelector(".icon").innerHTML = "";
    weatherData.querySelector(".temperature").innerHTML = "";
    weatherData.querySelector(".description").innerHTML = "An error happened, please try again later.";
    weatherData.querySelector(".details").innerHTML = "";
    weatherData.querySelector(".error").innerHTML = error;
  }
}

function renderWeather(weather) {
  weatherData.innerHTML = `
  <h2>${city}</h2>
  <div class="icon">
  <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="Weather Icon">
</div>
<div class="temperature">${Math.round(weather.main.temp)}°C</div>
<div class="description">${weather.weather[0].main}</div>
<div class="details">
  <div>Feels like: ${Math.round(weather.main.feels_like)}°C</div>
  <div>Humidity: ${weather.main.humidity}%</div>
  <div>Wind Speed ${Math.round(weather.wind.speed)} m/s</div>
</div>`;
}

//get current city by geolocation api
getCityName();
function getCityName() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Using Nominatim API to reverse geocode the coordinates
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city = data.address.city || data.address.town || data.address.village;

      getWeatherData(city);
      return city;
    })
    .catch((err) => console.log(err));
}

function error() {
  alert("Unable to retrieve your location.");
}
