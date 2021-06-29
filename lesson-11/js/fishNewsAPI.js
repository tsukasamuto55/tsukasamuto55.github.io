// const newsapiKey = "74dab407fa3042b79355cb6bb5d85ea2";

// const url = `https://newsapi.org/v2/everything?q=idaho+("fish"+"haven")&sortBy=popularity&apiKey=${newsapiKey}`;

const newsapiKey = "80786e58dc1c8cb0cc8f96aed97419fd";
const url = `https://gnews.io/api/v4/search?q=idaho&token=${newsapiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < 2; i++) {
      const articleInfo = data.articles[i];

      const articleContainer = document.querySelector(".article-container");

      const articleBox = document.createElement("article");
      articleBox.classList.add("article-box", "clearfix");

      const image = document.createElement("img");
      image.setAttribute("class", "article-img");
      image.setAttribute("src", articleInfo.image);
      image.setAttribute("alt", articleInfo.description);

      const title = document.createElement("h3");
      title.setAttribute("class", "title");
      title.textContent = articleInfo.title;

      const author = document.createElement("h4");
      author.classList.add("author");
      author.textContent = "By " + articleInfo.author;

      const articleContent = document.createElement("p");
      articleContent.classList.add("headline");
      articleContent.innerHTML = `${articleInfo.description} <a href='${articleInfo.url}' target='_blank'>...<br>click here to read the full story.</a>`;

      articleBox.appendChild(image);
      articleBox.appendChild(title);
      articleBox.appendChild(author);
      articleBox.appendChild(articleContent);

      articleContainer.appendChild(articleBox);
    }
  });
