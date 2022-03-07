import fetch from "./fetch.js";
import { tweet, getElement, loading, unloading } from "./utilities.js";
const quote = getElement(".quote");
const author = getElement(".author");
const quoteBtn = getElement(".new-quote-btn");
const twitBtn = getElement(".twit-btn");
const quoteContainer = getElement(".quote-container");
const apiUrl = "https://type.fit/api/quotes";

const newQuote = async () => {
  loading();
  const quotes = await fetch(apiUrl);
  unloading();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = randomQuote.text;
  if (randomQuote.author) {
    author.textContent = randomQuote.author;
  } else {
    author.textContent = "Unknown";
  }
};

// event Listener
window.addEventListener("DOMContentLoaded", newQuote);
quoteBtn.addEventListener("click", newQuote);
twitBtn.addEventListener("click", tweet);
