const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usernameField.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        alert("Password must contain an uppercase letter, a number, and @.");
        return;
    }
    console.log("Login successful!");
});

function forgotPassword() {
    alert("You need to reset the password!");

}
