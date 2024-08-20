// js/script.js
// Example script to handle form validation
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("All fields are required.");
    }
});
