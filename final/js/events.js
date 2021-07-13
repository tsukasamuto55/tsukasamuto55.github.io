const eventsURL = `https://tsukasamuto55.github.io/final/json/data.json`;

fetch(eventsURL)
  .then((response) => response.json())
  .then((data) => {
    const eventsData = data["events"];
    const eventsContainer = document.querySelector(".events-container");

    console.log(eventsData[0]);
    // Retrieve the forecast data for 3 days by looping the list three times.
    for (data of eventsData) {
      const eventsCard = document.createElement("article");
      eventsCard.classList.add("events-card");

      const eventsImg = document.createElement("div");
      eventsImg.classList.add("events-img");

      const image = document.createElement("img");
      console.log(eventsData.name);
      image.setAttribute("src", `${eventsData.pic}`);
      image.setAttribute("alt", `${eventsData.name}`);

      eventsImg.appendChild(image);
      eventsCard.appendChild(eventsImg);

      const eventsContent = document.createElement("h3");
      eventsContent.textContent = eventsData.name;
      eventsCard.appendChild(eventsContent);

      const eventsLocation = document.createElement("div");
      eventsLocation.classList.add("events-location");
      eventsLocation.textContent = eventsData.eventsLocation;
      eventsCard.appendChild(eventsLocation);

      const eventsDate = document.createElement("div");
      eventsDate.classList.add("events-date");
      eventsDate.textContent = eventsData.date;
      eventsCard.appendChild(eventsDate);

      eventsContainer.appendChild(eventsCard);
    }
  });
