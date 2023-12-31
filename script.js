const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usernameField.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation (allow @ but not other special characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        alert("Password must contain an uppercase letter, a number, and @.");
        return;
    }

    // Handle successful validation (e.g., send login data to a server)
    console.log("Login successful!");
    // Implement server-side logic here
});

function forgotPassword() {
    // Implement the logic for handling the "Forgot Password" action
    alert("Forgot Password functionality is not implemented yet!");
    // You can redirect the user to a password recovery page or implement your logic here
}
