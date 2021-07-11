const directoryURL = `https://tsukasamuto55.github.io/final/json/directory.json`;

fetch(directoryURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
