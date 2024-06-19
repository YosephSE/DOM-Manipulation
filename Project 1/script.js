const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    quote: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    author: "Henry Ford",
  },
  {
    quote: "In order to write about life first you must live it.",
    author: "Ernest Hemingway",
  },
  {
    quote:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
    author: "Mark Twain",
  },
  {
    quote:
      "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    author: "Leo Burnett",
  },
  {
    quote:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  { quote: "The unexamined life is not worth living.", author: "Socrates" },
  { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    quote:
      "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton",
  },
  {
    quote:
      "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
    author: "Hillary Clinton",
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "What we think, we become.", author: "Buddha" },
  {
    quote: "May you live all the days of your life.",
    author: "Jonathan Swift",
  },
  {
    quote: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen",
  },
];


let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let newQuote = document.querySelector("#new-quote");


newQuote.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
})