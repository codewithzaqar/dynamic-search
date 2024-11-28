/**
 * Handles the search action when the form is submitted.
 */
function handleSearch(event) {
    event.preventDefault(); // Prevent page reload
    const query = document.getElementById('searchBox').value.trim();
    if (query) {
      // Redirect to Google's search results page
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
      alert('Please enter something to search.');
    }
  }
  
  /**
   * Displays a random fun result for the "I'm Feeling Lucky" button.
   */
  function feelingLucky() {
    const results = [
      "You just found a four-leaf clover! 🍀",
      "The universe is smiling at you today! 🌟",
      "Surprise! You’re destined for greatness! 🚀",
      "A lucky break is heading your way! 🌈",
      "You’re on the path to something amazing! 🌎"
    ];
    const luckyResult = document.getElementById('lucky-result');
    luckyResult.textContent = results[Math.floor(Math.random() * results.length)];
    luckyResult.classList.remove('hidden');
  }
  
  /**
   * Shows credits in an alert dialog.
   */
  function showCredits() {
    alert("Dynamic\nCreated by Zaqar\nInspired by the simplicity of the past.");
  }
  