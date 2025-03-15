document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let fullName = document.getElementById("full-name").value;
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let age = document.getElementById("age").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm-password").value;

            let signupMessage = document.getElementById("signup-message");

            // Validate Password
            if (password !== confirmPassword) {
                signupMessage.textContent = "Passwords do not match!";
                signupMessage.style.color = "red";
                return;
            }

            // Check if Username Exists
            if (localStorage.getItem(username)) {
                signupMessage.textContent = "Username already exists!";
                signupMessage.style.color = "red";
                return;
            }

            // Store Data in localStorage
            let userData = {
                fullName: fullName,
                username: username,
                email: email,
                phone: phone,
                age: age,
                password: password
            };

            localStorage.setItem(username, JSON.stringify(userData));
            signupMessage.textContent = "Signup successful! Redirecting...";
            signupMessage.style.color = "green";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        });
    }
});
