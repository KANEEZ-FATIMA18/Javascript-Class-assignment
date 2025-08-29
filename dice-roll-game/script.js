//feature page code
document.getElementById("start-game").addEventListener("click", function () {
  document.getElementById("feature-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";
});

//game page code

var player01 = document.querySelector(".player1")
var player02 = document.querySelector(".player2")

var name1;
var name2;

player01.addEventListener("click", function () {
    name1 = prompt("Player 1 Enter Your Name:");
    player01.innerHTML = name1;

})


player02.addEventListener("click", function () {
    name2 = prompt("Player 2 Enter Your Name:");
    player02.innerHTML = name2;

})

// Scores & turn system
var score1 = 0;
var score2 = 0;
var currentPlayer = 1;

// dice roll 
var rollbtn = document.querySelector(".roll");
var diceContainer = document.querySelector(".dice-container");

rollbtn.addEventListener("click", function () {
    var randomNumber = Math.ceil(Math.random() * 6);
    if (randomNumber === 1) {
        diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path></svg>';
        score1 = 0;
        score2 = 0;

    } else if (randomNumber === 2) {
        diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9ZM16.5 15C16.5 15.8284 15.8284 16.5 15 16.5C14.1716 16.5 13.5 15.8284 13.5 15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 14.1716 16.5 15Z"></path></svg>'
    } else if (randomNumber === 3) {
        diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10ZM15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5C17 16.3284 16.3284 17 15.5 17ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"></path></svg>'
    } else if (randomNumber === 4) {
        diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5ZM10.5 15C10.5 15.8284 9.82843 16.5 9 16.5C8.17157 16.5 7.5 15.8284 7.5 15C7.5 14.1716 8.17157 13.5 9 13.5C9.82843 13.5 10.5 14.1716 10.5 15ZM16.5 15C16.5 15.8284 15.8284 16.5 15 16.5C14.1716 16.5 13.5 15.8284 13.5 15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 14.1716 16.5 15ZM16.5 9C16.5 9.82843 15.8284 10.5 15 10.5C14.1716 10.5 13.5 9.82843 13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9Z"></path></svg>'
    } else if (randomNumber === 5) {
        diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5ZM8.5 17C7.67157 17 7 16.3284 7 15.5C7 14.6716 7.67157 14 8.5 14C9.32843 14 10 14.6716 10 15.5C10 16.3284 9.32843 17 8.5 17ZM15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5C17 16.3284 16.3284 17 15.5 17ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"></path></svg>'
    } else if (randomNumber === 6) {
        diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM9 9.5C8.17157 9.5 7.5 8.82843 7.5 8C7.5 7.17157 8.17157 6.5 9 6.5C9.82843 6.5 10.5 7.17157 10.5 8C10.5 8.82843 9.82843 9.5 9 9.5ZM10.5 12C10.5 12.8284 9.82843 13.5 9 13.5C8.17157 13.5 7.5 12.8284 7.5 12C7.5 11.1716 8.17157 10.5 9 10.5C9.82843 10.5 10.5 11.1716 10.5 12ZM10.5 16C10.5 16.8284 9.82843 17.5 9 17.5C8.17157 17.5 7.5 16.8284 7.5 16C7.5 15.1716 8.17157 14.5 9 14.5C9.82843 14.5 10.5 15.1716 10.5 16ZM15 9.5C14.1716 9.5 13.5 8.82843 13.5 8C13.5 7.17157 14.1716 6.5 15 6.5C15.8284 6.5 16.5 7.17157 16.5 8C16.5 8.82843 15.8284 9.5 15 9.5ZM16.5 12C16.5 12.8284 15.8284 13.5 15 13.5C14.1716 13.5 13.5 12.8284 13.5 12C13.5 11.1716 14.1716 10.5 15 10.5C15.8284 10.5 16.5 11.1716 16.5 12ZM16.5 16C16.5 16.8284 15.8284 17.5 15 17.5C14.1716 17.5 13.5 16.8284 13.5 16C13.5 15.1716 14.1716 14.5 15 14.5C15.8284 14.5 16.5 15.1716 16.5 16Z"></path></svg>'

    }
    //turn
    if (currentPlayer === 1) {
        score1 += randomNumber;
        document.getElementById("score1").innerText = score1;
        if (randomNumber !== 6) {
            currentPlayer = 2;
        }
    } else {
        score2 += randomNumber;
        document.getElementById("score2").innerText = score2;
        if (randomNumber !== 6) {
            currentPlayer = 1;
        }

    }
    //highlight
    function highlight() {
        if (currentPlayer === 1) {
            player01.style.boxShadow = "0 0 20px #fff, 0 0 40px orange";
            player02.style.boxShadow = "none";
        } else {
            player01.style.boxShadow = "none";
            player02.style.boxShadow = "0 0 20px #fff, 0 0 40px magenta";
        }
    }
    highlight();

  
    //result
    if (score1 >= 20) {
        document.querySelector("h3").innerHTML = "Winner: 🎉 Congratulations " + name1 + "! You’re the Champion! 🏆";
        resetGame();
    }
    else if (score2 >= 20) {
        document.querySelector("h3").innerHTML = "Winner: 🎉 Congratulations " + name2 + "! You’re the Champion! 🏆";
        resetGame();

    }


});

  function resetGame() {
    score1 = 0;
    score2 = 0;
    currentPlayer = 1;
    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
    highlight();
    diceContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M10.9979 1.58018C11.6178 1.22132 12.3822 1.22132 13.0021 1.58018L20.5021 5.92229C21.1197 6.27987 21.5 6.93946 21.5 7.65314V16.3469C21.5 17.0606 21.1197 17.7202 20.5021 18.0778L13.0021 22.4199C12.3822 22.7788 11.6178 22.7788 10.9979 22.4199L3.49793 18.0778C2.88029 17.7202 2.5 17.0606 2.5 16.3469V7.65314C2.5 6.93946 2.88029 6.27987 3.49793 5.92229L10.9979 1.58018ZM5.25052 8.09243C4.91718 7.89945 4.5 8.13997 4.5 8.52514V15.1938C4.5 15.9075 4.88029 16.5671 5.49793 16.9247L11.2495 20.2545C11.5828 20.4475 12 20.207 12 19.8218V13.1531C12 12.4395 11.6197 11.7799 11.0021 11.4223L5.25052 8.09243ZM15.7681 5.51719C15.2898 5.24106 14.5143 5.24106 14.036 5.51719C13.5577 5.79332 13.5577 6.24101 14.036 6.51713C14.5143 6.79326 15.2898 6.79326 15.7681 6.51713C16.2464 6.24101 16.2464 5.79332 15.7681 5.51719ZM9.96825 5.51723C9.48995 5.2411 8.71447 5.2411 8.23617 5.51723C7.75787 5.79335 7.75787 6.24104 8.23617 6.51717C8.71447 6.7933 9.48995 6.7933 9.96825 6.51717C10.4466 6.24104 10.4466 5.79335 9.96825 5.51723ZM16.9925 15.8452C17.5903 15.5 18.0749 14.6605 18.075 13.9702C18.075 13.2798 17.5904 13 16.9926 13.3452C16.3948 13.6904 15.9101 14.5299 15.9101 15.2202C15.9101 15.9106 16.3947 16.1904 16.9925 15.8452ZM6.3662 12.2003C6.84448 12.4765 7.2322 12.2526 7.23218 11.7003C7.23216 11.148 6.84442 10.4765 6.36614 10.2003C5.88785 9.92414 5.50014 10.148 5.50016 10.7003C5.50018 11.2526 5.88792 11.9241 6.3662 12.2003ZM10.6951 17.6982C10.6951 18.2505 10.3074 18.4743 9.82909 18.1981C9.35081 17.922 8.96307 17.2504 8.96305 16.6981C8.96303 16.1458 9.35074 15.922 9.82903 16.1981C10.3073 16.4743 10.6951 17.1459 10.6951 17.6982ZM7.23218 15.6993C7.2322 16.2516 6.84448 16.4755 6.3662 16.1993C5.88792 15.9232 5.50018 15.2516 5.50016 14.6993C5.50014 14.147 5.88785 13.9232 6.36614 14.1993C6.84442 14.4755 7.23216 15.1471 7.23218 15.6993ZM10.6946 13.6998C10.6946 14.2521 10.3069 14.476 9.8286 14.1998C9.35032 13.9236 8.96258 13.2521 8.96256 12.6998C8.96254 12.1475 9.35026 11.9237 9.82854 12.1998C10.3068 12.476 10.6946 13.1476 10.6946 13.6998Z"></path></svg>';
}








