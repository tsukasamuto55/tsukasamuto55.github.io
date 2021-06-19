const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const towns = jsonObject["towns"];

    for (let town of towns) {
      // create an anchor element for a link to a town page
      const townLink = document.createElement("a");

      const card = document.createElement("section");

      const townInfo = document.createElement("div");
      townInfo.classList.add("town-info");

      // Remove a space from a town name >> ex. Soda Springs > SodaSprings
      const idName = town.name.split(" ").join("");
      //Lowercase the first letter of the town name >> ex. SodaSprings > sodaSprings
      const formattedIdName = idName.charAt(0).toLowerCase() + idName.slice(1);
      // Adding an id to each anchor element based on the town name.
      townLink.setAttribute("id", formattedIdName);

      const townName = document.createElement("h2");

      const townMotto = document.createElement("div");

      const yearFounded = document.createElement("p");

      const currentPopulation = document.createElement("p");

      const averageRainFall = document.createElement("p");

      const img = document.createElement("img");

      townName.innerHTML = `<bold>${town.name}</bold>`;
      townMotto.innerHTML = `<strong><em>${town.motto}</em></strong>`;
      yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
      currentPopulation.textContent = `Population: ${town.currentPopulation}`;
      averageRainFall.textContent = `Average Rain Fall: ${town.averageRainfall}`;

      if (town.name === "Preston") {
        // Adding an href attribute to each anchor element.
        townLink.setAttribute("href", "preston-6.html");
        appendChild();
      }

      if (town.name === "Soda Springs") {
        // Adding an href attribute to each anchor element.
        townLink.setAttribute("href", "soda-springs.html");
        appendChild();
      }

      if (town.name === "Fish Haven") {
        // Adding an href attribute to each anchor element.
        townLink.setAttribute("href", "fish-haven.html");
        appendChild();
      }

      function appendChild() {
        img.setAttribute("src", "images/" + town.photo);
        img.setAttribute("alt", `a picture of ${town.name}`);

        card.appendChild(townInfo);
        townInfo.appendChild(townName);
        townInfo.appendChild(townMotto);
        townInfo.appendChild(yearFounded);
        townInfo.appendChild(currentPopulation);
        townInfo.appendChild(averageRainFall);
        card.appendChild(img);

        // adding all elements above to each anchor element so that you can click it to jump to the designated town page.
        townLink.appendChild(card);

        return document.querySelector(".town-containers").appendChild(townLink);
      }
    }
  });
