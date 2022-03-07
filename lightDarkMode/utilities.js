export const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("whoops, error here");
};
