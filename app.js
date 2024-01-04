function toggleSearchButton() {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');

    if (searchInput.value.trim() !== '') {
        searchButton.disabled = false;
    } else {
        searchButton.disabled = true;
    }
}

function search() {
    var searchTerm = document.getElementById('searchInput').value;

    // Your existing search logic here

    alert('You searched for: ' + searchTerm);
}