function searchGoogle(event) {
    event.preventDefault()
    const query = document.getElementById('searchBox').value.trim()
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    } else {
        alert('Please enter a search query.')
    }
}