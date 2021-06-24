const prestonURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=836d037508b2397deaea6c8b8b8b90d9";

fetch(prestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    tempInKelvin = jsObject.main.temp;
    const kelvinToFahr = (tempInKelvin - 273.15) * (9 / 5) + 32;
    document.querySelector("#current-temp").textContent = kelvinToFahr.toFixed(1);

    const iconImg =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";

    document.getElementById("imagesrc").textContent = iconImg;

    const weatherDescription = jsObject.weather[0].description;

    document.getElementById("icon").setAttribute("src", iconImg);
    document.getElementById("icon").setAttribute("alt", weatherDescription);
  });

// //////// Forecast API ////////////////
const prestonForecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=836d037508b2397deaea6c8b8b8b90d9";

fetch(prestonForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const dataLists = jsObject.list;

    for (data of dataLists) {
      if (data.dt_txt.includes("18:00")) {
        // Create a forecast box(card) to contain 5day forecast information
        const forecastBox = document.createElement("div");
        forecastBox.classList.add("forecast-box");

        const days = document.createElement("div");
        days.classList.add("day");
        days.textContent = data.dt_txt;
        forecastBox.appendChild(days);

        const image = document.createElement("img");
        image.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        image.setAttribute("alt", "The weather icon");
        forecastBox.appendChild(image);

        const forecastTemp = document.createElement("div");
        forecastTemp.innerHTML = data.main.temp + "&deg;F";
        forecastBox.appendChild(forecastTemp);

        const forecast = document.querySelector(".forecast-container");
        forecast.appendChild(forecastBox);
      }
    }
  });
