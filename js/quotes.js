const quotes = [
  {
    quote:
      "무언가를 시작하는 방법은 말하는 것을 그만두고 행위를 시작하는 것이다.",
    author: "Walt Disney",
  },
  {
    quote:
      "세상은 하나의 책이며, 그들은 아직 여행되지 않은 읽기 전용의 한 페이지이다.",
    author: "Saint Augustine",
  },
];

const quote = document.querySelector("#quote p");
const author = document.querySelector("#quote h2");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
