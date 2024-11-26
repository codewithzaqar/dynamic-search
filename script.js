function searchGoogle(event) {
    event.preventDefault() // Prevent page reload
    const query = document.getElementById('searchBox').value.trim()
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    } else {
        // Alert if no query is provided
        alert('Please enter a search query.')
    }
}