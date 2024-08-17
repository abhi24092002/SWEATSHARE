document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "pass") {
        document.getElementById('message').style.color = "limegreen";
        document.getElementById('message').textContent = "Login successful!";
        // You can redirect to another page or perform another action here
    } else {
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Invalid username or password.";
    }
});
