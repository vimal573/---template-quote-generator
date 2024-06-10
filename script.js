const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loadingSpinner() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function removeSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function showQuote() {
  loadingSpinner();
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

  // set quote hide loader
  removeSpinner();
}

// Get Quote from API
async function getQuote() {
  try {
    loadingSpinner();
    const apiUrl =
      'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    showQuote();

    //   Catch Error Here
  } catch (error) {
    console.log(error);
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', showQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();
loadingSpinner();
