var userFullname = document.getElementById("user-fullname");

var savedFullname = localStorage.getItem("fullname");


if (savedFullname == null || savedFullname == "") {
  userFullname.innerText = "Hello"

}
else {
  userFullname.innerText = `👋 Hello ${savedFullname}`;
  userFullname.style.textTransform = "capitalize";
  userFullname.style.position = "sticky-top";
}


var ul = document.getElementById("chat-list");


var input1 = [
  "hi", "hello", "hey", "what’s up", "how are you", "yo", "hii", "hy",
  "salam", "assalamualaikum", "asalam o alaikum","assalam u alaikum", "salam alaikum", "walaikum salam"
];
var reply1 = "Wa Alaikum Salam 🌸 Hey 👋 I’m doing great! I’m here to tell you about Kaneez. Want to know her story?";

var input2 = [
  "who are you","who", "tell me about yourself", "introduce yourself", "what’s your name",
  "about you", "who is this", "ap kon hain", "ap kia karti ho"
];
var reply2 = "I’m Kaneez’s chatbot assistant 🌸. She’s a 19 y/o web development student, passionate about learning and building projects.";

var input3 = [
  "where are you from", "where do you live", "where are you located", "your city", "location", "place",
  "ap kahan se ho", "ap kaha rehti ho"
];
var reply3 = "She’s from Pakistan 🇵🇰 and currently studying Web Development at SMIT.";

// 4. Age
var input4 = [
  "your age", "how old are you", "what is your age", "age please", "current age",
  "ap ki age", "ap ki umar", "umar kia hai"
];
var reply4 = "She just turned 19 this year 🎂";

// 5. Education
var input5 = [
  "what are you studying", "education", "course", "degree", "what do you study", "study",
  "ap kya parh rahi ho", "ap ka taleem", "ap ki education"
];
var reply5 = "She’s currently pursuing a diploma in Web Development at Saylani Mass IT Training.";

// 6. Future Plans
var input6 = [
  "what’s next in your studies", "future plans", "goals", "next step", "study plans",
  "apke future ka plan", "apka mustaqbil", "apke goals"
];
var reply6 = "InshaAllah ✨ After completing her diploma, she plans to pursue a Bachelor’s degree in Computer Science.";

// 7. Skills
var input7 = [
  "skills", "what can you do", "abilities", "your skills", "expertise", "what do you know",
  "ap kya karti ho", "apke skills"
];
var reply7 = "She can design beautiful responsive websites using HTML, CSS, Bootstrap, Tailwind, and JavaScript. Also exploring MERN.";

// 8. Favorite Language
var input8 = [
  "favorite language", "best programming language", "which programming language do you like",
  "fav language", "coding language", "pasandeeda zuban"
];
var reply8 = "Right now, she enjoys JavaScript ✨";

// 9. Projects
var input9 = [
  "projects", "show me your work", "portfolio", "your work", "examples", "samples",
  "apke projects", "apka kaam"
];
var reply9 = "She has created a Burger Website 🍔, Foodix website, and a Weather App ☀️.";

// 10. Favorite Project
var input10 = [
  "which project is your favorite", "best project", "favorite work", "fav project",
  "sabse acha project", "apko konsa project pasand hai"
];
var reply10 = "She loved making the Burger Website 🍔 because it had a fun theme.";

// 11. Hobbies
var input11 = [
  "hobbies", "free time", "interests", "what do you do for fun", "things you like",
  "pastime", "activities", "apke shouq", "ap kya pasand karti ho"
];
var reply11 = "She likes designing, coding, learning new tech, and cooking.";


// 7. Favorites
var input12 = [
  "favorite color", "fav color", "your color", "which color you like", "colors you like",
  "apka fav color", "apko konsa rang pasand hai", "pasandeeda rang", "fav rang"
];
var reply12 = "Light pastel shades 💜, they look calm and aesthetic.";

var input13 = [
  "favorite food", "fav food", "your favorite dish", "fav dish", "what do you like to eat",
  "what’s your food", "apko konsa khana pasand hai", "apka fav khana", "pasandeeda khana"
];
var reply13 = "She’s a foodie 😋 and can never say no to pizza or burgers.";

var input14 = [
  "do you like traveling", "traveling", "love travel", "do you travel", "like trips",
  "do you like trips", "apko safar pasand hai", "apko travel karna acha lagta hai", "apko ghoomna pasand hai"
];
var reply14 = "Yes! She enjoys exploring new places 🌍.";

// 8. Fun / Entertainment
var input15 = [
  "tell me a joke", "make me laugh", "joke", "say something funny", "funny joke",
  "apko koi joke ata hai", "mujhe hasao", "joke sunao"
];
var reply15 = "Why don’t programmers like nature?… Too many bugs 🐞😂.";

var input16 = [
  "fun fact", "interesting fact", "did you know", "random fact", "kuch interesting btao",
  "mazedaar baat", "ajeeb fact"
];
var reply16 = "Fun fact: Kaneez once built a full website in one night before submission 😅.";

// 9. Future & Goals
var input17 = [
  "future", "goals", "dreams", "aim", "plans", "career plan",
  "apka mustaqbil", "apke goals", "apke khuwab", "apke irade"
];
var reply17 = "InshaAllah ✨ she wants to be a professional Full-Stack Developer and explore Agentic AI. Maybe even launch her own startup.";

var input18 = [
  "where do you see yourself in 5 years", "5 years", "career future", "your future", "after 5 years",
  "paanch saal baad", "5 saal baad ap kaha hongi", "apne mustaqbil me apko kahan dekhti ho"
];
var reply18 = "Working as a successful developer, contributing to big projects 🚀.";

// 10. Contact
var input19 = [
  "contact", "email", "linkedin", "github", "reach you", "your contact", "socials",
  "apka email", "apka contact", "apke links", "apke social media"
];
var reply19 = "You can reach her at [your email] 📩, GitHub: [your GitHub], LinkedIn: [your LinkedIn].";

// 11. Closing
var input20 = [
  "bye", "goodbye", "see you", "thanks", "thank you", "see ya", "tata",
  "khuda hafiz", "Allah hafiz", "jazakallah", "shukriya"
];
var reply20 = "Allah Hafiz 🤲👋 Thanks for stopping by! Have an amazing day 🌸.";

function send(e) {
  if (e.key === "Enter") {
    var userValue = e.target.value.toLowerCase();
    ul.insertAdjacentHTML("beforeend", `<li class="user-li">${userValue}</li>`);
    e.target.value = "";

    if (input1.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply1}</li>`);
      }, 3000)
    }
    else if (input2.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply2}</li>`);
      }, 3000)
    }
    else if (input3.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply3}</li>`);
      }, 3000);
    }
    else if (input4.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply4}</li>`);
      }, 3000);
    }
    else if (input5.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply5}</li>`);
      }, 3000);
    }
    else if (input6.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply6}</li>`);
      }, 3000);
    }
    else if (input7.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply7}</li>`);
      }, 3000);
    }
    else if (input8.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply8}</li>`);
      }, 3000);
    }
    else if (input9.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply9}</li>`);
      }, 3000);
    }
    else if (input10.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply10}</li>`);
      }, 3000);
    }
    else if (input11.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply11}</li>`);
      }, 3000);
    }
    else if (input12.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply12}</li>`);
      }, 3000);
    }
    else if (input13.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply13}</li>`);
      }, 3000);
    }
    else if (input14.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply14}</li>`);
      }, 3000);
    }
    else if (input15.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply15}</li>`);
      }, 3000);
    }
    else if (input16.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply16}</li>`);
      }, 3000);
    }
    else if (input17.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply17}</li>`);
      }, 3000);
    }
    else if (input18.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply18}</li>`);
      }, 3000);
    }
    else if (input19.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply19}</li>`);
      }, 3000);
    }
    else if (input20.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply20}</li>`);
      }, 3000);
    }
    else {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">I’m sorry, I didn’t understand that.</li>`);
      }, 3000);
    }
  }
}