const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

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
