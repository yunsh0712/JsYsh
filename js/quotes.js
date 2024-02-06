const quotes = [
    {
        quote: "Man is his own worst enemy.",
        author: "YJ.K",
    },
    {
        quote: "2_Man is his own worst enemy.",
        author: "2_YJ",
    },
    {
        quote: "3_Man is his own worst enemy.",
        author: "3_YJ",
    },
    {
        quote: "4_Man is his own worst enemy.",
        author: "4_YJ",
    },
    {
        quote: "5_Man is his own worst enemy.",
        author: "5_YJ",
    },
    {
        quote: "6_Man is his own worst enemy.",
        author: "6_YJ",
    },
    {
        quote: "7_Man is his own worst enemy.",
        author: "7_YJ",
    },
    {
        quote: "8_Man is his own worst enemy.",
        author: "8_YJ",
    },
    {
        quote: "9_Man is his own worst enemy.",
        author: "9_YJ",
    },
    {
        quote: "10_Man is his own worst enemy.",
        author: "10_YJ",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
