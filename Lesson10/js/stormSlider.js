/*****************Storm Center Page ***********************/
stormSlider = document.querySelector("#storm-slider");
stormOutput = document.querySelector("#storm-output");
stormOutput.textContent = stormSlider.value;

stormSlider.oninput = () => {
  stormOutput.textContent = stormSlider.value;
};
