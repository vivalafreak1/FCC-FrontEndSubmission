document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('text');
    const quoteAuthor = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote');
    const tweetQuoteBtn = document.getElementById('tweet-quote');
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function updateStyles() {
      const color = getRandomColor();
  
      document.body.style.color = color;
      newQuoteBtn.style.backgroundColor = color;
      document.body.style.backgroundColor = color;
    }
  
    function getNewQuote() {
      updateStyles(); // Call this function to update styles when a new quote is fetched
  
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteText.textContent = data.content;
          quoteAuthor.textContent = `- ${data.author}`;
          tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" - ${data.author}`)}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
    }
  
    newQuoteBtn.addEventListener('click', getNewQuote);
  
    // Load a quote on initial page load
    getNewQuote();
  });
  