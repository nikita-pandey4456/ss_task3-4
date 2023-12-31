function validateLogin() {
    // Reset errors
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Validate username (email)
    const username = document.getElementById('username').value;
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').innerText = 'Invalid email format';
        return;
    }

    // Validate password
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/;

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = 'Invalid password format';
        return;
    }

    // If validation passes, you can proceed with login logic
    alert('Login successful!');
}
