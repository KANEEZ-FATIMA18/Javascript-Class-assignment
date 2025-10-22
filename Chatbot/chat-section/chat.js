var loader = document.querySelector(".loader");
var childpage = document.querySelector(".child");

setTimeout(function () {
  loader.style.display = "none";  
  childpage.style.display = "flex"; 
}, 5000); 


var userFullname = document.getElementById("user-fullname");

var savedFullname = localStorage.getItem("fullname");


if (savedFullname == null || savedFullname == "") {
  userFullname.innerText = "Hello"

}
else {
  userFullname.innerText = `Hello ${savedFullname}`;
  userFullname.style.textTransform = "capitalize";
  userFullname.style.position = "sticky-top";
}

var ul = document.getElementById("chat-list");
var i = document.querySelector("i")

// 1. Greetings
var input1 = [
  "hi", "hello", "hey", "hii", "hy", "yo", "heyy", "helloo",
  "what’s up", "whatsup", "sup", "how are you", "how r u",
  "kese ho", "kesi ho", "how are you doing", "salam", "assalamualaikum", 
  "asalam o alaikum", "assalam u alaikum", "salam alaikum"
];
var reply1 = "Hey 👋 I’m doing great! I’m here to tell you about Kaneez. Want to know her story? (yes/no)";

// 2. Introduction
var input2 = [
  "who are you", "who is this", "introduce yourself", "tell me about yourself",
  "what’s your name", "about you", "ap kon ho", "ap kon hain",
  "tum koun ho", "ap kia karti ho", "who r u", "what are you"
];
var reply2 = "I’m Kaneez’s chatbot assistant 🌸. She’s a 19 y/o web development student, passionate about learning and building projects.";

// 3. Location
var input3 = [
  "where are you from", "where do you live", "where are you located",
  "your city", "location", "place", "ap kahan se ho", "kaha rehti ho",
  "ap kaha hoti ho", "ap kaha rahte ho", "tum kahan ki ho"
];
var reply3 = "She’s from Pakistan 🇵🇰 and currently studying Web Development at SMIT.";

// 4. Age
var input4 = [
  "your age", "how old are you", "what is your age", "age please", "current age",
  "apki age", "ap ki umar", "umar kya hai", "ap ki age kya hai", "kitni age hai"
];
var reply4 = "She just turned 20 this year 🎂";

// 5. Education
var input5 = [
  "what are you studying", "education", "course", "degree", "what do you study",
  "study", "ap kya parh rahi ho", "ap ka taleem", "apki education", 
  "ap kya seekh rahi ho", "apka course"
];
var reply5 = "She’s currently pursuing a diploma in Web Development at Saylani Mass IT Training.";

// 6. Future Plans
var input6 = [
  "what’s next in your studies", "future plans", "goals", "next step",
  "study plans", "apke future ka plan", "apka mustaqbil", "apke goals",
  "apke aims", "aage kya karna hai", "future me kya socha hai"
];
var reply6 = "InshaAllah ✨ After completing her diploma, she plans to pursue a Bachelor’s degree in Computer Science.";

// 7. Skills
var input7 = [
  "skills", "what can you do", "abilities", "your skills", "expertise",
  "what do you know", "ap kya karti ho", "apke skills", "apko kya ata hai",
  "ap ki expertise"
];
var reply7 = "She can design beautiful responsive websites using HTML, CSS, Bootstrap, Tailwind, and JavaScript. Also exploring MERN.";

// 8. Favorite Language
var input8 = [
  "favorite language", "best programming language", "which programming language do you like",
  "fav language", "coding language", "pasandeeda zuban", "fav lang"
];
var reply8 = "Right now, she enjoys JavaScript ✨";

// 9. Projects
var input9 = [
  "projects", "show me your work", "portfolio", "your work", "examples",
  "samples", "apke projects", "apka kaam", "apne kya banaya hai",
  "apki website", "kya project kiye hain"
];
var reply9 = "She has created a Burger Website 🍔, Foodix website, and a Weather App ☀️.";

// 10. Favorite Project
var input10 = [
  "which project is your favorite", "best project", "favorite work", "fav project",
  "sabse acha project", "apko konsa project pasand hai", "apka fav project"
];
var reply10 = "She loved making the Burger Website 🍔 because it had a fun theme.";

// 11. Hobbies
var input11 = [
  "hobbies", "free time", "interests", "what do you do for fun", "things you like",
  "pastime", "activities", "apke shouq", "ap kya pasand karti ho", "apke hobbies"
];
var reply11 = "She likes designing, coding, learning new tech, and cooking.";

// 12. Favorite Color
var input12 = [
  "favorite color", "fav color", "your color", "which color you like",
  "colors you like", "apka fav color", "apko konsa rang pasand hai",
  "pasandeeda rang", "fav rang"
];
var reply12 = "Light pastel shades 💜, they look calm and aesthetic.";

// 13. Favorite Food
var input13 = [
  "favorite food", "fav food", "your favorite dish", "fav dish",
  "what do you like to eat", "what’s your food", "apko konsa khana pasand hai",
  "apka fav khana", "pasandeeda khana", "apko kya khana pasand hai"
];
var reply13 = "She’s a foodie 😋 and can never say no to pizza, burgers, or pasta.";

// 14. Traveling
var input14 = [
  "do you like traveling", "traveling", "love travel", "do you travel",
  "like trips", "do you like trips", "apko safar pasand hai", 
  "apko travel karna acha lagta hai", "apko ghoomna pasand hai"
];
var reply14 = "Yes! She enjoys exploring new places 🌍.";

// 15. Fun / Jokes
var input15 = [
  "tell me a joke", "make me laugh", "joke", "say something funny", "funny joke",
  "apko koi joke ata hai", "mujhe hasao", "joke sunao", "make joke"
];
var reply15 = "Why don’t programmers like nature?… Too many bugs 🐞😂.";

// 16. Fun Fact
var input16 = [
  "fun fact", "interesting fact", "did you know", "random fact",
  "kuch interesting btao", "mazedaar baat", "ajeeb fact"
];
var reply16 = "Fun fact: Kaneez once built a full website in one night before submission 😅.";

// 17. Future & Goals
var input17 = [
  "future", "goals", "future goals", "dreams", "aim", "plans", "career plan",
  "future career", "apka mustaqbil", "apke goals", "apke khuwab", "apke irade"
];
var reply17 = "InshaAllah ✨ she wants to be a professional Full-Stack Developer and explore Agentic AI. Maybe even launch her own startup.";

// 18. 5 Years Plan
var input18 = [
  "where do you see yourself in 5 years", "5 years", "career future", "your future",
  "after 5 years", "paanch saal baad", "5 saal baad ap kaha hongi",
  "apne mustaqbil me apko kahan dekhti ho"
];
var reply18 = "Working as a successful developer, contributing to big projects 🚀.";

// 19. Contact
var input19 = [
  "contact", "email", "linkedin", "github", "reach you", "your contact", "socials",
  "apka email", "apka contact", "apke links", "apke social media", "apki id"
];
var reply19 = "You can reach her at 📩 kaneez.fatimaattaria18@gmail.com, GitHub: [KANEEZ-FATIMA18], LinkedIn: [kaneezfatima18].";

// 20. Closing
var input20 = [
  "bye", "goodbye", "see you", "thanks", "thank you", "see ya", "tata",
  "khuda hafiz", "Allah hafiz", "jazakallah", "shukriya", "take care"
];
var reply20 = "Allah Hafiz 🤲👋 Thanks for stopping by! Have an amazing day 🌸.";

// 21. Yes / Positive
var input21 = [
  "yes", "haan", "han", "ji haan", "of course", "bilkul", "yeah", "yup", "ok"
];
var reply21 = "Awesome! 🌸 Kaneez is a 19 y/o Web Development student from Pakistan 🇵🇰. Do you want to know her skills? (yes/no)";

// 22. No / Negative
var input22 = [
  "no", "nahi", "nope", "not now", "nah", "chodo", "abhi nahi"
];
var reply22 = "Alright 🌸 No problem! You can ask me anything else.";


// function 

function send(e) {

  if (e && e.key === "Enter") {
    var userValue = e.target.value.toLowerCase();
    if (userValue === "") {
      return;
    }
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
    else if (input21.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply21}</li>`);
      }, 3000);
    }
    else if (input22.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply22}</li>`);
      }, 3000);
    }
    else if (input23.includes(userValue)) {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">${reply23}</li>`);
      }, 3000);
    }
    else {
      setTimeout(function () {
        ul.insertAdjacentHTML("beforeend", `<li class="bot-li">You can try asking about skills, projects, or education.</li>`);
      }, 3000);
    }
  }
}

i.addEventListener("click", function () {
  send()
})
