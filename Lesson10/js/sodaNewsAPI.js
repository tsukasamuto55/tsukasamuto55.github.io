const url = `https://newsapi.org/v2/everything?q=idaho+('soda'+'springs')&sortBy=popularity&apiKey=74dab407fa3042b79355cb6bb5d85ea2`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articleInfo = data.articles[0];

    const articleContainer = document.querySelector(".article-container");

    const articleBox = document.createElement("article");
    articleBox.classList.add("article-box", "clearfix");

    const image = document.createElement("img");
    image.setAttribute("class", "article-img");
    image.setAttribute("src", articleInfo.urlToImage);
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
  });
