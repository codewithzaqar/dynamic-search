/**
 * Handles the search action when the form is submitted.
 */
function searchGoogle(event) {
    event.preventDefault() // Prevent page reload
    const query = document.getElementById('searchBox').value.trim()
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    } else {
        alert('Please enter a search query.')
    }
}

/**
 * Displays a message for the "I'm Feeling Lucky" button.
 */
function showLuckyMessage() {
    alert("You're feeling lucky today! 😄")
}