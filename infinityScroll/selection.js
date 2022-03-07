const get = (item) => {
  const element = document.querySelector(item);
  if (element) return element;
  throw new Error("no such item exist");
};
const apiKey = "0vbugZ0AF0rvpFs4ImPgQCIUnORSZnJM0sZRi-iUEZ8";
const imgContainer = get(".img-container");
const loader = get(".loader");
let photosArray = [];
let count = 5;
let imgLoaded = 0;
let totalImages = 0;
let ready = false;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
