console.log("main File connected");
// main.js

// Function to load header
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => document.querySelector('header').innerHTML = html);
}

// Function to load footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(html => document.querySelector('footer').innerHTML = html);
}

// Call the functions to load header and footer when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});
