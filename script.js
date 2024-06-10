const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

let apiQuotes = [];

// Show New Quote
function showQuote() {
  // Pick a random quote from apiQuote Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //   If quote is unknown
  if (!quote.author) {
    authorText.textContent = 'unknown';
  } else {
    authorText.textContent = quote.author;
  }

  //   Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.add('long-quote');
  }

  quoteText.textContent = quote.text;
  console.log(quote);
}

// Get Quote from API
async function getQuotes() {
  try {
    const apiUrl =
      'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();

    showQuote();
  } catch (error) {
    //   Catch Error Here
    console.log(error);
  }
}

// On Load
getQuotes();
