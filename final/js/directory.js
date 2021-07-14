const directoryURL = `https://tsukasamuto55.github.io/final/json/data.json`;

fetch(directoryURL)
  .then((response) => response.json())
  .then((data) => {
    const directory = data["directories"];

    for (ele of directory) {
      const card = document.createElement("div");
      card.classList.add("directory-card");

      const link = document.createElement("a");
      link.setAttribute("href", `${ele.website}`);

      const image = document.createElement("img");
      image.setAttribute("src", `${ele.logo}`);
      image.setAttribute("alt", `${ele.name}`);
      image.setAttribute("class", `directory-icon`);
      image.setAttribute("width", `150`);
      image.setAttribute("height", `150`);

      link.appendChild(image);
      card.appendChild(link);

      const name = document.createElement("h3");
      name.classList.add("directory-name");
      name.textContent = ele.name;
      card.appendChild(name);

      const url = document.createElement("p");
      url.classList.add("directory-url");
      url.textContent = ele.website;
      link.appendChild(url);

      const address = document.createElement("p");
      address.classList.add("directory-address");
      address.textContent = ele.address;
      card.appendChild(address);

      const phone = document.createElement("p");
      phone.classList.add("directory-phone");
      phone.textContent = ele.phone;
      card.appendChild(phone);

      const description = document.createElement("p");
      description.classList.add("directory-description");
      description.textContent = ele.description;
      card.appendChild(description);

      const directoryContainer = document.querySelector(".directory-card-container");

      directoryContainer.appendChild(card);
    }

    const gridBtn = document.getElementById("grid-icon");
    const listBtn = document.getElementById("list-icon");
    const directoryCard = document.querySelectorAll(".directory-card");
    const directoryCardContainer = document.querySelector(".directory-card-container");
    const businessIcons = document.querySelectorAll(".directory-icon");

    for (let i = 0; i < businessIcons.length; i++) {
      gridBtn.addEventListener("click", () => {
        directoryCardContainer.classList.remove("list-card-container");
        directoryCard[i].classList.remove("list-card");
        // businessIcons[i].style.display = "inline";
      });

      listBtn.addEventListener("click", () => {
        directoryCardContainer.classList.add("list-card-container");
        directoryCard[i].classList.add("list-card");
        // businessIcons[i].style.display = "none";
      });
    }
  });
