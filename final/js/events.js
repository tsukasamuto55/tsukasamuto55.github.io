const eventsURL = `https://tsukasamuto55.github.io/final/json/data.json`;

fetch(eventsURL)
  .then((response) => response.json())
  .then((data) => {
    const eventsData = data["events"];
    const eventsContainer = document.querySelector(".events-container");

    for (data of eventsData) {
      const eventsCard = document.createElement("article");
      eventsCard.classList.add("events-card");

      const eventsImg = document.createElement("div");
      eventsImg.classList.add("events-img");

      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", `${data.url}`);

      const image = document.createElement("img");
      image.setAttribute("src", `${data.pic}`);
      image.setAttribute("alt", `${data.name}`);

      imageLink.appendChild(image);
      eventsImg.appendChild(imageLink);
      eventsCard.appendChild(eventsImg);

      const eventsContent = document.createElement("h3");
      eventsContent.classList.add("events-content");
      eventsContent.textContent = data.name;
      eventsCard.appendChild(eventsContent);

      const eventsLocation = document.createElement("div");
      eventsLocation.classList.add("events-location");
      eventsLocation.textContent = data.location;
      eventsCard.appendChild(eventsLocation);

      const eventsDate = document.createElement("div");
      eventsDate.classList.add("events-date");
      eventsDate.textContent = data.date;
      eventsCard.appendChild(eventsDate);

      eventsContainer.appendChild(eventsCard);
    }
  });
