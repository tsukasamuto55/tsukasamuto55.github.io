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

    const humidity = currentData.humidity;
    document.querySelector(".humidity").textContent = humidity;

    // Retrieve the forecast data for 3 days by looping the list three times.
    for (let i = 0; i < 3; i++) {
      const dailyForecast = data.daily[i];

      // Create a forecast box(card) to contain 3 day forecast information
      const forecastCard = document.createElement("div");
      forecastCard.classList.add("forecast-card");

      const dayOfWeek = document.createElement("div");
      dayOfWeek.classList.add("day");
      const days = new Date(dailyForecast.dt * 1000);
      daysToString = days.toUTCString();
      dayOfWeek.textContent = daysToString.slice(0, 11);
      forecastCard.appendChild(dayOfWeek);

      const forecastHighTemp = document.createElement("div");
      forecastHighTemp.classList.add("high-temp");
      forecastHighTemp.innerHTML = dailyForecast.temp.max.toFixed(0) + "&deg;F / ";
      forecastCard.appendChild(forecastHighTemp);

      const forecastLowTemp = document.createElement("div");
      forecastLowTemp.classList.add("low-temp");
      forecastLowTemp.innerHTML = dailyForecast.temp.min.toFixed(0) + "&deg;F";
      forecastCard.appendChild(forecastLowTemp);

      const image = document.createElement("img");
      image.setAttribute(
        "src",
        "images/icon-sets/" + dailyForecast.weather[0].icon + ".png"
      );

      image.setAttribute("alt", dailyForecast.weather[0].description);
      forecastCard.appendChild(image);

      const forecastCondition = document.createElement("div");
      forecastCondition.classList.add("forecast-condition");
      let forecastWeather = dailyForecast.weather[0].description;
      let formattedWeather =
        forecastWeather.charAt(0).toUpperCase() + forecastWeather.slice(1);
      forecastCondition.textContent = formattedWeather;
      forecastCard.appendChild(forecastCondition);

      const forecast = document.querySelector(".forecast-container");
      forecast.appendChild(forecastCard);

      const weatherAlerts = document.getElementById("alerts-title");
      weatherAlerts.textContent = data.alerts[0].event;

      const alertsContent = document.getElementById("alerts-content");
      alertsContent.textContent = data.alerts[0].description;
    }
  });
