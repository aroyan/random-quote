const quoteBox = document.getElementById('quote-box');
const text = document.getElementById('text');
const author = document.getElementById('author');
const tweetQuotes = document.getElementById('tweet-quote');

//Fetch for Initial State
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then(
    (data) => (
      (text.textContent = data.content),
      (author.textContent = data.author),
      (tweetQuotes.href =
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + data.content + '" ' + data.author))
    )
  )
  .catch((err) => console.log(err));

//Funtion for generate random when Button onClick
function generateRandom() {
  fetch('https://api.quotable.io/random?minLength=50&maxLength=140')
    .then((response) => response.json())
    .then(
      (data) => (
        (text.textContent = data.content), (author.textContent = data.author)
      )
    )
    .catch((err) => console.log(err));
}
