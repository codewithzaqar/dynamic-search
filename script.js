/**
 * Handles the search action when the form is submitted.
 */
function searchGoogle(event) {
    event.preventDefault() // Prevent page reload
    const query = document.getElementById('searchBox').value.trim()
    if (query) {
        // Redirect to Dynamic's search results page
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    } else {
        alert('Please enter something to search.')
    }
}

/**
 * Displays a message for the "I'm Feeling Lucky" button.
 */
function feelingLucky() {
    const messages = [
        "You hit the jackpot!",
        "Feeling lucky today?",
        "Surprise! 🎉",
        "Adventure awaits!",
        "The answer is closer than you think!"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    alert(randomMessage)
}