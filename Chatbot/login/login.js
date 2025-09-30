var email = document.getElementById("email");
var password = document.getElementById("password");


function login() {
  var savedEmail = localStorage.getItem("email");
  var savedPassword = localStorage.getItem("password");

  if (email.value === savedEmail && password.value === savedPassword) {

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
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
  title: "Signed in successfully"
});
 
     setTimeout(() => {
    window.location.href = "../chat-section/chat.html";
  }, 3000);

  }
  else {
    document.getElementById("error").innerHTML = "Invalid email or password";
  }
}