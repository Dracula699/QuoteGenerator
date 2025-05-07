const quotes = {
    inspirational: [
      "The best way to get started is to quit talking and begin doing. – Walt Disney",
      "Don’t let yesterday take up too much of today. – Will Rogers",
      "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
      "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
      "Believe you can and you're halfway there. – Theodore Roosevelt",
      "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
      "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
      "Do one thing every day that scares you. – Eleanor Roosevelt",
      "The only way to do great work is to love what you do. – Steve Jobs"
    ],
    funny: [
      "I am on a seafood diet. I see food and I eat it.",
      "I’m not arguing, I’m just explaining why I’m right.",
      "If life gives you lemons, make lemonade. Then find someone whose life gave them vodka, and have a party.",
      "I always carry a knife in my purse, just in case we’re having cake.",
      "My wallet is like an onion. When I open it, it makes me cry.",
      "A balanced diet means a cupcake in each hand.",
      "I’m on a whiskey diet. I’ve lost three days already.",
      "Why don’t scientists trust atoms? Because they make up everything!",
      "I used to think I was indecisive, but now I'm not so sure.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised."
    ],
    life: [
      "Life is what happens when you’re busy making other plans. – John Lennon",
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
      "Get busy living or get busy dying. – Stephen King",
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
      "In the end, it’s not the years in your life that count. It’s the life in your years. – Abraham Lincoln",
      "You only live once, but if you do it right, once is enough. – Mae West",
      "Life isn’t about finding yourself. It’s about creating yourself. – George Bernard Shaw",
      "Difficulties in life are intended to make us better, not bitter.",
      "The meaning of life is to find your gift. The purpose of life is to give it away. – Pablo Picasso",
      "Don’t watch the clock; do what it does. Keep going. – Sam Levenson"
    ]
  };
  
  const quoteElement = document.getElementById('quote');
  const newQuoteBtn = document.getElementById('new-quote-btn');
  const toggleMode = document.getElementById('toggle-mode');
  let currentCategory = 'inspirational';
  
  function getRandomQuote() {
    const categoryQuotes = quotes[currentCategory];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    return categoryQuotes[randomIndex];
  }
  
  function setCategory(category) {
    currentCategory = category;
    updateQuote();
  }
  
  function updateQuote() {
    quoteElement.textContent = getRandomQuote();
    quoteElement.style.animation = 'fadeInQuote 0.8s ease-in-out';
  }
  
  newQuoteBtn.addEventListener('click', updateQuote);
  
  toggleMode.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    const toggleText = document.querySelector('.toggle-text');
    toggleText.textContent = toggleMode.checked ? "Light Mode" : "Dark Mode";
  });
  