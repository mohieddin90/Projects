import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    const data = response.json();
    return data;
  }
};

export default fetchProducts;
