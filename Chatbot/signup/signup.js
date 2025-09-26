var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm_password");

var fullnameError = document.getElementById("fullname-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var confirmError = document.getElementById("confirm-error");

function clearErrors() {
    fullnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
}

function signup() {
    clearErrors();
    let valid = true;

    if (fullname.value === "") {
        fullnameError.textContent = "Full Name is required";
        valid = false;
    }

    if (email.value === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    if (password.value === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    if (confirmPassword.value === "") {
        confirmError.textContent = " Confirm Password is required";
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmError.textContent = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("fullname", fullname.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        window.location.href = "/login/login.html";
    }
}

var eyeIcon = document.querySelectorAll("i");

function eyePass() {
    if (password.type === "password" && confirmPassword.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        for (let i = 0; i < eyeIcon.length; i++) {
            eyeIcon[i].classList.remove("fa-eye");
            eyeIcon[i].classList.add("fa-eye-slash");
        }
    } else {
        password.type = "password";
        confirmPassword.type = "password";
        for (let i = 0; i < eyeIcon.length; i++) {
            eyeIcon[i].classList.remove("fa-eye-slash");
            eyeIcon[i].classList.add("fa-eye");
        }
    }
}
