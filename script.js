/**
 * Handles the search action when the form is submitted.
 */
function handleSearch(event) {
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
 * Displays a random fun message for the "I'm Feeling Lucky" button.
 */
function feelingLucky() {
    const messages = [
        "You’re feeling lucky! 🎉",
        "Surprise time! 🥳",
        "Adventure awaits! 🚀",
        "Let’s see where this takes you! 🌟",
        "Feeling adventurous? Let’s go!"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    alert(randomMessage)
}