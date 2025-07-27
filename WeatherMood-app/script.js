var main = document.querySelector('.box-main');
var box = document.querySelector('.box');
var userInput = document.querySelector("input");
var btn = document.querySelector("button");
var mood = document.querySelector("h4");

btn.addEventListener("click", function () {
    var result = Number(userInput.value);

    function applyAnimation() {
        box.style.animation = "fadeInDynamic 0.7s ease-in-out";
        setTimeout(() => {
            box.style.animation = "";
        }, 700);
    }

    if (result < 5) {
        mood.innerHTML = "❄️ Sard hawaein chal rahi hain — garam coffee aur ek soft blanket ka maza lo ☕🧣";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2024/02/12/12/33/snow-8568544_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 5 && result < 15) {
        mood.innerHTML = "🌫️ Thand aur halka fog — lambe coat pehno aur walk pe niklo 🍂";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2020/03/29/06/34/clouds-4979558_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 15 && result < 18) {
        mood.innerHTML = "🌤️ Perfect weather — na zyada garmi na sardi, beach side ka plan banta hai 🏖️";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/12/19/11/52/sky-3027856_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 18 && result < 24) {
        mood.innerHTML = "🌥️ Cooly cloudy weather hai — halki thandi hawa aur badalon ka sukoon, window khol ke music lagao 🎶";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 25 && result < 30) {
        mood.innerHTML = "🌅 Garmi thodi barh rahi hai — Beach pr chalty hain";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2020/07/08/08/04/sunset-5383043_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 30 && result < 35) {
        mood.innerHTML = "🌩️ Bijli aur andhi dono ne mood bana dia — chadar lo aur window ke pass chai piyo ☕";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/12/15/11/07/lightning-3020873_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 35 && result < 40) {
        mood.innerHTML = "🔥 Dhoop intense hai — sunscreen lagao aur hydrate raho 🧴🥤";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/08/24/17/09/sun-1617470_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else if (result >= 40 && result <= 45) {
        mood.innerHTML = "🥵 Heatwave alert — AC chalao, pani peyo aur thandak ki dua karo 💧🧊";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/03/27/21/38/sunset-2180346_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
    else {
        mood.innerHTML = "⚠️ Invalid temperature — zara dobara check karo 📟";
        main.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2020/05/06/06/18/blue-5136251_1280.jpg")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        applyAnimation();
    }
});
