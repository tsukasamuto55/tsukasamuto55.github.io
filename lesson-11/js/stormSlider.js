/*****************Storm Center Page ***********************/
stormSlider = document.querySelector("#storm-slider");
stormOutput = document.querySelector("#storm-output");

stormSlider.oninput = () => {
  stormOutput.textContent = stormSlider.value;
};
