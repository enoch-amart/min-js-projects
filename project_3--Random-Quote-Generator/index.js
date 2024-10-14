const quotes = [
  "You are great",
  "Here we go",
  "Awesome buddy",
  "Goood boyy",
  "ohkayyy",
  "yhep",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
