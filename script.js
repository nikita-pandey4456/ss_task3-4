
function validateLogin() {

    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';


    const username = document.getElementById('username').value;
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').innerText = 'Invalid email format';
        return;
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/;

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = 'Invalid password format';
        return;
    }

    alert('Login successful!');
}
