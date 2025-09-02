// Password generation logic
var copy = document.getElementById("copyBtn");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*";
var allChars = upperCase + lowerCase + numbers + symbols;

//password generate button & input
var generate = document.getElementById("Password");
var regenerate = document.getElementsByClassName("Regenerate-Password");

//length
var lenVal = document.getElementById("lengthValue");
var len = document.getElementById("length");

//length function
len.oninput = function () {
  lenVal.textContent = this.value;
}


//Generate password function
function generatePassword() {
  var allChars = "";
  if (document.getElementById("includeUppercase").checked) {
    allChars += upperCase;
  }
  if (document.getElementById("includeLowercase").checked) {
    allChars += lowerCase;
  }
  if (document.getElementById("includeNumbers").checked) {
    allChars += numbers;
  }
  if (document.getElementById("includeSymbols").checked) {
    allChars += symbols;
  }

  password = "";

  for (var i = 0; i < len.value; i++) {
    var randomNumber = Math.floor(Math.random() * allChars.length);
    password += allChars[randomNumber]
    generate.innerHTML = password;
  }

  return password;

}


function copyPassword() {
  var passwordBox = document.getElementById("Password");
  var password = passwordBox.textContent;

  navigator.clipboard.writeText(password);

  if (password) {
    alert("Password copied!");
  }
  else {
    alert("Failed Password")
  }

}
