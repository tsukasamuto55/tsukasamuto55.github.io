const directoryURL = `https://github.com/tsukasamuto55/tsukasamuto55.github.io/blob/master/final/json/directory.json`;

fetch(directoryURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
