var dark = document.querySelector(".dark-main");
var light = document.querySelector(".light-main")

function change() {
    dark.style.display = 'none';
    light.style.display = 'flex'

}

function reset() {
    dark.style.display = 'flex';
    light.style.display = 'none'

}

function btn() {
    if (light.style.display === "none") {
        light.style.display = "flex";
        dark.style.display = "none";


    } else {
        light.style.display = "none";
        dark.style.display = "flex";
    }

}