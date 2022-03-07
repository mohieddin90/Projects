// import
import { imageLoaded, setAttr } from "./utilities.js";

// selection

// display function
const display = (photos) => {
  imgLoaded = 0;
  totalImages = photos.length;
  photos.forEach((photo) => {
    const link = photo.links.html;
    const src = photo.urls.regular;
    const title = photo.location.name ? photo.location.name : "";
    const element = document.createElement("a");
    const img = document.createElement("img");
    setAttr(element, { href: link, target: "_blank" });
    setAttr(img, { src, class: "img", title, alt: title });
    element.appendChild(img);
    imgContainer.appendChild(element);
    img.addEventListener("load", imageLoaded);
  });
};
export default display;
