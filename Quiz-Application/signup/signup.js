var fullnameError = document.getElementById("fullname-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");

function clearErrors() {
    fullnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
}

function submitForm(e) {
    e.preventDefault();
    clearErrors();
    let valid = true;

    // Inputs
    var emailInput = document.getElementById("email");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var email = emailInput.value.trim();
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Reset borders
    emailInput.style.borderColor = "";
    usernameInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    // ---- Email Validation ----
    if (email === "") {
        emailError.textContent = "Enter your email";
        emailInput.style.borderColor = "red";
        valid = false;
    } else if (email.length < 12) {
        emailError.textContent = "Email must be at least 12 characters";
        emailInput.style.borderColor = "red";
        valid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Email must contain @ symbol";
        emailInput.style.borderColor = "red";
        valid = false;
    }

    // ---- Password Validation ----
    if (password === "") {
        passwordError.textContent = "Password is required";
        passwordInput.style.borderColor = "red";
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.style.borderColor = "red";
        valid = false;
    }

    // ---- Username Validation ----
    if (username === "") {
        fullnameError.textContent = "Username is required";
        usernameInput.style.borderColor = "red";
        valid = false;
    } else if (username.length < 6) {
        fullnameError.textContent = "Username must be at least 6 characters";
        usernameInput.style.borderColor = "red";
        valid = false;
    }

    // ---- If All Valid ----
    if (valid) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("username", username);
        location.href ="../categories/category.html"
    }
}
