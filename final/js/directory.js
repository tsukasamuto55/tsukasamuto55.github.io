const directoryURL = `https://tsukasamuto55.github.io/final/json/data.json`;

fetch(directoryURL)
  .then((response) => response.json())
  .then((data) => {
    const directory = data["directories"];

    for (ele of directory) {
      const card = document.createElement("div");
      card.classList.add("directory-card");
      const image = document.createElement("img");
      image.setAttribute("src", `${ele.logo}`);
      image.setAttribute("alt", `${ele.name}`);
      image.setAttribute("width", `60%`);
      image.setAttribute("height", `auto`);

      card.appendChild(image);

      const name = document.createElement("h3");
      name.classList.add("directory-name");
      name.textContent = ele.name;
      card.appendChild(name);

      const address = document.createElement("p");
      address.classList.add("directory-address");
      address.textContent = ele.address;
      card.appendChild(address);

      const phone = document.createElement("p");
      phone.classList.add("directory-phone");
      phone.textContent = ele.phone;
      card.appendChild(phone);

      const description = document.createElement("p");
      description.classList.add("directory-name");
      description.textContent = ele.description;
      card.appendChild(description);

      const directoryContainer = document.querySelector(".directory-card-container");

      directoryContainer.appendChild(card);
    }
  });
