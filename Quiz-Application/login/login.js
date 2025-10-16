var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");

var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

function clearErrors() {
    emailError.textContent = "";
    passwordError.textContent = "";
}

function loginUser(e) {
    e.preventDefault();
    clearErrors();

    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");

    // Reset border colors
    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    if (savedEmail !== email || savedPassword !== password) {
        passwordInput.style.borderColor = "red";
        emailInput.style.borderColor = "red";
        emailError.textContent = "Invalid email or password";
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "success",
            title: "Login successfully"
        }).then(() => {
            location.href = "../Categories/category.html";
        });
    }
}
