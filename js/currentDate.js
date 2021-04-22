// // // Different way to display the last modified date
// const options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// };

// const lastModified = new Date().toLocaleDateString("en-US", options);

// document.querySelector("span").textContent = lastModified;

const lastModif = new Date(document.lastModified);
document.querySelector("span").textContent = lastModif;

alert(document.lastModified);
