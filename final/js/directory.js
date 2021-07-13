const directoryURL = `https://tsukasamuto55.github.io/final/json/data.json`;

fetch(directoryURL)
  .then((response) => response.json())
  .then((data) => {
    const directory = data["directories"];

    for (ele of directory) {
      const card = document.getElementById("test");
      const image = document.createElement("img");
      image.setAttribute("src", `${ele.logo}`);
      image.setAttribute("width", `60%`);
      image.setAttribute("height", `auto`);

      card.appendChild(image);
    }
  });
