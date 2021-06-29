const newsapiKey = "a5b701a1f2abe183e1483766dc8465d2";
// const newsapiKey = "80786e58dc1c8cb0cc8f96aed97419fd";
const url = `https://gnews.io/api/v4/search?q=idaho&from=2021-06-01&token=${newsapiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < 3; i++) {
      const articleInfo = data.articles[i + 1];

      const articleContainer = document.querySelector(".home-article-container");

      const articleBox = document.createElement("article");
      articleBox.classList.add("home-article-box", "clearfix");

      const image = document.createElement("img");
      image.setAttribute("class", "home-article-img");
      image.setAttribute("src", articleInfo.image);
      image.setAttribute("alt", articleInfo.description);

      const title = document.createElement("h3");
      title.setAttribute("class", "home-article-title");
      title.textContent = articleInfo.title;

      const articleContent = document.createElement("p");
      articleContent.classList.add("home-headline");
      articleContent.innerHTML = `${articleInfo.description}<a href='${articleInfo.url}' target='_blank'><br>click here to read the full story</a>`;

      articleBox.appendChild(image);
      articleBox.appendChild(title);
      articleBox.appendChild(articleContent);

      articleContainer.appendChild(articleBox);
    }
  });
