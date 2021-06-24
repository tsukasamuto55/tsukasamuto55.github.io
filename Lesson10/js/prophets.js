const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const prophets = jsonObject["prophets"];
    for (let prophet of prophets) {
      const card = document.createElement("section");
      const h2 = document.createElement("h2");
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      const para3 = document.createElement("p");
      const img = document.createElement("img");

      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      para1.textContent = `Date of Birth: ${prophet.birthdate}`;
      para2.textContent = "Date of Death: " + prophet.death;
      para3.textContent = "Place of Birth: " + prophet.birthplace;
      img.setAttribute("src", prophet.imageurl);
      img.setAttribute(
        "alt",
        prophet.name + " " + prophet.lastname + "-" + prophet.order
      );

      card.appendChild(h2);
      card.appendChild(para1);
      card.appendChild(para2);
      card.appendChild(para3);
      card.appendChild(img);
      document.querySelector("div.cards").appendChild(card);
    }
  });
