// const lat = document.querySelector("h2").dataset["latitude"];
// const lon = document.querySelector("h2").dataset["longitude"];
// const apiKey = "836d037508b2397deaea6c8b8b8b90d9";

// const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&APPID=${apiKey}`;
const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=43.82602&lon=-111.8766173&units=imperial&APPID=836d037508b2397deaea6c8b8b8b90d9`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    currentTemp = data.current.temp;
    document.getElementById("current-temp").textContent = currentTemp.toFixed(0);

    let currentWeather = data.current.weather[0].description;
    let formattedWeather =
      currentWeather.charAt(0).toUpperCase() + currentWeather.slice(1);
    document.getElementById("current-condition").textContent = formattedWeather;

    const highTemp = data.daily[0].temp.max;
    document.getElementById("high-temp").textContent = highTemp.toFixed(0);

    const lowTemp = data.daily[0].temp.min;
    document.getElementById("low-temp").textContent = lowTemp.toFixed(0);

    const feelsLike = data.current.feels_like;
    document.getElementById("feels-like").textContent = feelsLike.toFixed(0);

    const humidity = data.current.humidity;
    document.getElementById("humidity").textContent = humidity;

    const windSpeed = data.current.wind_speed;
    document.getElementById("wind-speed").textContent = windSpeed.toFixed(0);
  });
