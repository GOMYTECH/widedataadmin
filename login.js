document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Map of emails and passwords to their respective pages
    const validCredentials = {
        'wideventures78@gmail.com': { password: 'widedatas.12345', page: 'homepage.html' },
        
    };

    // Check if credentials are valid and redirect
    if (validCredentials[email] && validCredentials[email].password === password) {
        window.location.href = validCredentials[email].page;
    } else {
        alert('Invalid email or password');
    }
});