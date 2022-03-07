// import
import { fetching } from "./utilities.js";
import display from "./display.js";
// main function
const init = async () => {
  photosArray = await fetching(apiUrl);
  display(photosArray);
};

// event listener
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    init();
    ready = false;
  }
});
