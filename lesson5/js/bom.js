const list = document.querySelector("ul");
const input = document.querySelector("#chapter");
const button = document.querySelector("button");
const label = document.querySelector("label");

button.addEventListener("click", () => {
  if (input.value !== "") {
    label.style.color = "black";
    let inputItem = input.value;

    const newList = document.createElement("li");
    const deleteBtn = document.createElement("button");

    newList.textContent = inputItem;
    deleteBtn.textContent = "\u274C";
    newList.appendChild(deleteBtn);
    list.appendChild(newList);

    deleteBtn.addEventListener("click", () => {
      list.removeChild(newList);
      input.focus();
    });
    input.value = "";
    input.focus();
  } else {
    label.style.color = "red";
    setTimeout(alertMessage, 500);
  }
});

function alertMessage() {
  alert("Please enter your favorite Book of Mormon chapters.");
}
