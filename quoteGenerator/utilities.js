export const tweet = () => {
  const tweetUrl = "https://twitter.com/intent/tweet";
  window.open(tweetUrl, "_blank");
};

export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("your selection does nnot much");
};
const quoteContainer = getElement(".quote-container");
const loader = getElement(".loader");

export const loading = () => {
  loader.style.display = "block";
  quoteContainer.style.display = "none";
};
export const unloading = () => {
  loader.style.display = "none";
  quoteContainer.style.display = "block";
};
