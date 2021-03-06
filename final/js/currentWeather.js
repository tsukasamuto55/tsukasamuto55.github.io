const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=43.82602&lon=-111.8766173&units=imperial&APPID=836d037508b2397deaea6c8b8b8b90d9`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const currentData = data.current;

    const weatherIcon = document.querySelector(".weather-icon");
    const image = document.createElement("img");
    image.setAttribute("src", "images/icon-sets/" + currentData.weather[0].icon + ".png");
    image.setAttribute("alt", currentData.weather[0].description);
    weatherIcon.appendChild(image);

    const currentTemp = currentData.temp;
    document.getElementById("current-temp").textContent = currentTemp.toFixed(0);

    let currentWeather = currentData.weather[0].description;
    let formattedWeather =
      currentWeather.charAt(0).toUpperCase() + currentWeather.slice(1);
    document.querySelector(".current-condition").textContent = formattedWeather;

    const alerts = data.alerts;
    const alertsTitle = document.querySelector("#alerts-title");
    const alertsContent = document.querySelector("#alerts-content");

    if (alerts !== undefined) {
      alerts.forEach((x) => {
        alertsTitle.textContent = x.event;
        alertsContent.textContent = x.description;
      });
    }

    const humidity = currentData.humidity;
    document.querySelector(".humidity").textContent = humidity;
  });
