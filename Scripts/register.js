document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Password validation
    if (!isValidPassword(password)) {
        document.getElementById('registerError').innerText = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
        return;  // This will stop the form submission
    }

    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('registerError').innerText = data.error;
        } else if (data.redirect) {
            window.location.href = data.redirect;
        }
    })
    .catch(error => console.error('Error registering:', error));
});

function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}