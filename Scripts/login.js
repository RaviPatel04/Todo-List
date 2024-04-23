document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('loginError').innerText = data.error;
        } else if (data.redirect) {
            window.location.href = data.redirect;
        }
    })
    .catch(error => console.error('Error logging in:', error));
});