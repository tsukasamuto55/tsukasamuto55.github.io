const eventsURL = `https://tsukasamuto55.github.io/final/json/data.json`;

fetch(eventsURL)
  .then((response) => response.json())
  .then((data) => {
    const eventsData = data["events"];
    const eventsContainer = document.querySelector(".events-container");

    // Retrieve the forecast data for 3 days by looping the list three times.
    for (data of eventsData) {
      const eventsCard = document.createElement("article");
      eventsCard.classList.add("events-card");

      const eventsImg = document.createElement("div");
      eventsImg.classList.add("events-img");

      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", `${data.url}`);

      const image = document.createElement("img");
      console.log(eventsData.name);
      image.setAttribute("src", `${data.pic}`);
      image.setAttribute("alt", `${data.name}`);

      imageLink.appendChild(image);
      eventsImg.appendChild(imageLink);
      eventsCard.appendChild(eventsImg);

      const eventsContent = document.createElement("h3");
      eventsContent.textContent = data.name;
      eventsCard.appendChild(eventsContent);

      const eventsLocation = document.createElement("div");
      eventsLocation.classList.add("events-location");
      eventsLocation.textContent = data.eventsLocation;
      eventsCard.appendChild(eventsLocation);

      const eventsDate = document.createElement("div");
      eventsDate.classList.add("events-date");
      eventsDate.textContent = data.date;
      eventsCard.appendChild(eventsDate);

      eventsContainer.appendChild(eventsCard);
    }
  });
