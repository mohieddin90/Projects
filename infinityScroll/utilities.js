export const imageLoaded = () => {
  imgLoaded++;
  count = 30;
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  if (imgLoaded === totalImages) {
    ready = true;
    loader.style.display = "none";
  }
};
// fetch
export const fetching = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// set Attribute
export const setAttr = (element, attribute) => {
  for (const item in attribute) {
    element.setAttribute(item, attribute[item]);
  }
};
