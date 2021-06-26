// var url =
//   "https://newsapi.org/v2/everything?q=Apple&from=2021-06-23&sortBy=popularity&apiKey=74dab407fa3042b79355cb6bb5d85ea2";

const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".input-box");
const articleContainer = document.querySelector(".article-container");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  apiKey = "74dab407fa3042b79355cb6bb5d85ea2";

  let keyword = input.value;
  input.value = "";

  let url = `https://newsapi.org/v2/everything?q=${keyword.toLowerCase()}&sortBy=publishedAt&apiKey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const articleInfo = data.articles[1];

      const title = document.querySelector(".title");
      title.textContent = articleInfo.title;

      const author = document.querySelector(".author");
      author.textContent = "By " + articleInfo.author;

      const articleContent = document.querySelector(".content");
      articleContent.innerHTML = `<a href='${articleInfo.url}' target='_blank'>`;

      const image = document.querySelector(".article-image");
      image.setAttribute("src", articleInfo.urlToImage);
      image.setAttribute("alt", articleInfo.description);

      localStorage.setItem("currentSite", url);
      localStorage.setItem("imageSrc", articleInfo.urlToImage);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  currentURL = localStorage.getItem("currentSite");
  imageSrc = localStorage.getItem("imageSrc");
  fetch(currentURL)
    .then((response) => response.json())
    .then((data) => {
      const articleInfo = data.articles[0];

      const title = document.querySelector(".title");
      title.textContent = articleInfo.title;

      const author = document.querySelector(".author");
      author.textContent = "By " + articleInfo.author;

      const articleContent = document.querySelector(".content");
      articleContent.innerHTML = `<a href='${imageSrc}' target='_blank'>... continue to read.</a>`;

      const image = document.querySelector(".article-image");
      console.log(imageSrc);
      image.setAttribute("src", imageSrc);
      image.setAttribute("alt", articleInfo.description);

      localStorage.setItem("currentSite", currentURL);
    });
});
