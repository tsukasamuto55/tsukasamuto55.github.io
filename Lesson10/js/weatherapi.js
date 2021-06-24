///////////////// Weather API for Preston //////////////////
const prestonURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=836d037508b2397deaea6c8b8b8b90d9";

fetch(prestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    temp = jsObject.main.temp;
    document.getElementById("current-temp").textContent = temp.toFixed(0);

    const currentWeather = jsObject.weather[0].main;
    document.getElementById("description").textContent = currentWeather;

    const highTemp = jsObject.main.temp_max;
    document.getElementById("high-temp").textContent = highTemp.toFixed(0);

    const lowTemp = jsObject.main.temp_min;
    document.getElementById("low-temp").textContent = lowTemp.toFixed(0);

    const humidity = jsObject.main.humidity;
    document.getElementById("humidity").textContent = humidity;

    const windSpeed = jsObject.wind.speed;
    document.querySelector(".wind-speed").textContent = windSpeed.toFixed(0);

    if (temp <= 50 && windSpeed > 3) {
      windChillFactor(temp, windSpeed);
    } else {
      windChill.textContent = "N/A";
    }
  });

// //////// Forecast API ////////////////
const prestonForecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=836d037508b2397deaea6c8b8b8b90d9";

fetch(prestonForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const dataLists = jsObject.list;

    for (data of dataLists) {
      if (data.dt_txt.includes("18:00:00")) {
        // Create a forecast box(card) to contain 5day forecast information
        const forecastBox = document.createElement("div");
        forecastBox.classList.add("forecast-box");

        const dayOfWeek = document.createElement("div");
        dayOfWeek.classList.add("day");
        const days = new Date(data.dt_txt);
        dayOfWeek.textContent = days.toString().slice(0, 3);
        forecastBox.appendChild(dayOfWeek);

        const image = document.createElement("img");
        image.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        image.setAttribute("alt", "The weather icon");
        forecastBox.appendChild(image);

        const forecastTemp = document.createElement("div");
        forecastTemp.innerHTML = data.main.temp.toFixed(0) + "&deg;F";
        forecastBox.appendChild(forecastTemp);

        const forecast = document.querySelector(".forecast-container");
        forecast.appendChild(forecastBox);
      }
    }
  });