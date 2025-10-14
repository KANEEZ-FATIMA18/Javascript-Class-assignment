var questionText = document.getElementById("questions");
var optionButtons = document.querySelectorAll(".option-btn");
var nextBtn = document.getElementById("next-btn");
var questionInfo = document.querySelector(".question-info");


// All Quiz Questions – ES5 Compatible

var HTML = [
  { question: `What does HTML stand for?`, options: ["Hyper Text Markup Language", "HighText Machine Language", "Hyperlinking Text Management Language", "None"], correct: 0 },
  { question: `Who is the father of HTML?`, options: ["Tim Berners-Lee", "Brendan Eich", "Dennis Ritchie", "James Gosling"], correct: 0 },
  { question: `Which HTML tag is used to define an internal style sheet?`, options: ["<css>", "<script>", "<style>", "<design>"], correct: 2 },
  { question: `Which tag is used to display a picture in a HTML page?`, options: ["<image>", "<img>", "<src>", "<pic>"], correct: 1 },
  { question: `Which tag is used to create a hyperlink?`, options: ["<link>", "<a>", "<href>", "<hyper>"], correct: 1 },
  { question: `What is the correct HTML element for inserting a line break?`, options: ["<break>", "<br>", "<lb>", "<hr>"], correct: 1 },
  { question: `Which attribute specifies an alternate text for an image?`, options: ["title", "alt", "src", "name"], correct: 1 },
  { question: `Which HTML element is used for the largest heading?`, options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
  { question: `Which tag is used to display a numbered list?`, options: ["<ul>", "<ol>", "<dl>", "<li>"], correct: 1 },
  { question: `What does the <hr> tag do?`, options: ["New line", "Horizontal rule", "Break paragraph", "Line space"], correct: 1 },
  { question: `Which attribute is used to open a link in new tab?`, options: ["target='_self'", "target='_blank'", "new='true'", "open='tab'"], correct: 1 },
  { question: `HTML comments are placed between?`, options: ["/* */", "<!-- -->", "//", "{ }"], correct: 1 },
  { question: `Which tag is used for table rows?`, options: ["<td>", "<th>", "<tr>", "<table>"], correct: 2 },
  { question: `Which HTML element is used for inserting a background image?`, options: ["<body background='img.jpg'>", "<bg>", "<background>", "<image>"], correct: 0 },
  { question: `Which tag is used to define a list item?`, options: ["<ol>", "<ul>", "<li>", "<list>"], correct: 2 },
  { question: `What is the default alignment of text in HTML?`, options: ["left", "right", "center", "justify"], correct: 0 },
  { question: `Which element is used for line separator?`, options: ["<break>", "<line>", "<hr>", "<br>"], correct: 2 },
  { question: `Which HTML attribute is used to define inline styles?`, options: ["style", "font", "design", "class"], correct: 0 },
  { question: `What does <p> tag define?`, options: ["Paragraph", "Picture", "Preformatted text", "Plain text"], correct: 0 },
  { question: `HTML is a ____ language.`, options: ["Programming", "Markup", "Scripting", "Compiled"], correct: 1 }
]

var CSS = [
  { question: `What does CSS stand for?`, options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 1 },
  { question: `Which HTML tag is used to link CSS?`, options: ["<style>", "<link>", "<css>", "<head>"], correct: 1 },
  { question: `Which property changes text color?`, options: ["font-color", "text-color", "color", "font-style"], correct: 2 },
  { question: `How do you add background color in CSS?`, options: ["background-color", "color-background", "bgcolor", "bg"], correct: 0 },
  { question: `Which property controls text size?`, options: ["font-style", "text-size", "font-size", "size"], correct: 2 },
  { question: `How can you make text bold in CSS?`, options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "weight: bold;"], correct: 0 },
  { question: `Which property changes font?`, options: ["font-family", "text-font", "font-style", "font-type"], correct: 0 },
  { question: `How do you center text horizontally?`, options: ["text-align: center;", "align: center;", "horizontal-align: center;", "center: text;"], correct: 0 },
  { question: `Which property is used for spacing inside an element?`, options: ["margin", "padding", "border", "space"], correct: 1 },
  { question: `Which property adds shadow to text?`, options: ["text-shadow", "font-shadow", "shadow-text", "text-effect"], correct: 0 },
  { question: `Which value of position makes element relative to viewport?`, options: ["relative", "absolute", "fixed", "sticky"], correct: 2 },
  { question: `How to select all <p> elements in CSS?`, options: ["p{}", "#p{}", ".p{}", "<p>"], correct: 0 },
  { question: `How to make a list display horizontally?`, options: ["display: inline;", "display: block;", "display: list;", "float: left;"], correct: 0 },
  { question: `Which unit is relative to font size?`, options: ["px", "em", "%", "vh"], correct: 1 },
  { question: `What is the default position value?`, options: ["relative", "absolute", "static", "inherit"], correct: 2 },
  { question: `Which property sets the outer space of an element?`, options: ["margin", "padding", "border", "outline"], correct: 0 },
  { question: `Which property adds border color?`, options: ["border-color", "border-style", "border-type", "color-border"], correct: 0 },
  { question: `Which shorthand sets margin for all sides?`, options: ["margin: 10px;", "all-margin: 10px;", "margin-all: 10px;", "m:10px;"], correct: 0 },
  { question: `What is the correct syntax for a class selector?`, options: [".classname", "#classname", "classname", "<classname>"], correct: 0 },
  { question: `Which property adds rounded corners?`, options: ["border-radius", "border-curve", "corner-round", "radius"], correct: 0 }
]

// ========== JavaScript Questions ==========
var Js = [
  { question: `Who invented JavaScript?`, options: ["Tim Berners-Lee", "Brendan Eich", "James Gosling", "Guido van Rossum"], correct: 1 },
  { question: `What is the correct syntax to print in JavaScript console?`, options: ["print()", "console.log()", "echo()", "document.write()"], correct: 1 },
  { question: `Which company developed JavaScript?`, options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"], correct: 0 },
  { question: `Inside which HTML element do we put JavaScript?`, options: ["<js>", "<script>", "<javascript>", "<code>"], correct: 1 },
  { question: `How do you write a comment in JavaScript?`, options: ["<!-- -->", "//", "/* */", "** **"], correct: 1 },
  { question: `Which keyword declares a variable in JavaScript?`, options: ["var", "let", "const", "All of these"], correct: 3 },
  { question: `Which method converts JSON to object?`, options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "objectify()"], correct: 0 },
  { question: `What will typeof null return?`, options: ["null", "object", "undefined", "number"], correct: 1 },
  { question: `Which symbol is used for comments in JS?`, options: ["//", "#", "!", "<!--"], correct: 0 },
  { question: `Which function displays an alert box?`, options: ["alert()", "msg()", "prompt()", "popup()"], correct: 0 },
  { question: `Which operator is used to assign value?`, options: ["=", "==", "===", ":"], correct: 0 },
  { question: `Which operator is used to compare both value and type?`, options: ["=", "==", "===", "!="], correct: 2 },
  { question: `What will 2 + "2" return?`, options: ["4", "22", "Error", "undefined"], correct: 1 },
  { question: `What does DOM stand for?`, options: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"], correct: 0 },
  { question: `What is NaN in JavaScript?`, options: ["Not a Name", "Not a Null", "Not a Number", "Name as Number"], correct: 2 },
  { question: `Which function is used to parse integers?`, options: ["parseInt()", "parseFloat()", "toFixed()", "int()"], correct: 0 },
  { question: `Which keyword stops a loop?`, options: ["stop", "break", "end", "exit"], correct: 1 },
  { question: `What does the push() method do?`, options: ["Adds to start", "Adds to end", "Removes element", "Reverses array"], correct: 1 },
  { question: `What will typeof [] return?`, options: ["object", "array", "list", "undefined"], correct: 0 },
  { question: `Which method removes the last element of array?`, options: ["pop()", "shift()", "delete()", "splice()"], correct: 0 }
];

// ========== React Questions ==========
var React = [
  { question: `Who developed React?`, options: ["Google", "Facebook", "Microsoft", "Twitter"], correct: 1 },
  { question: `React is mainly used for building _____.`, options: ["Databases", "User Interface", "Servers", "Networking"], correct: 1 },
  { question: `Everything in React is a _____.`, options: ["Function", "Class", "Component", "Module"], correct: 2 },
  { question: `What is used to pass data to components in React?`, options: ["props", "data", "arguments", "methods"], correct: 0 },
  { question: `What is the correct syntax to create component?`, options: ["function MyComp()", "component MyComp()", "render MyComp()", "createComponent()"], correct: 0 },
  { question: `Which hook is used to manage state in functional components?`, options: ["useEffect", "useState", "useReducer", "useRef"], correct: 1 },
  { question: `Which hook runs after every render by default?`, options: ["useMemo", "useEffect", "useState", "useContext"], correct: 1 },
  { question: `JSX stands for _____.`, options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript X"], correct: 0 },
  { question: `Which method is used to render React element?`, options: ["React.render()", "ReactDOM.render()", "render.React()", "DOMReact()"], correct: 1 },
  { question: `Which keyword is used to export component?`, options: ["share", "send", "export", "return"], correct: 2 },
  { question: `Which keyword is used to import React?`, options: ["require React", "import React", "get React", "load React"], correct: 1 },
  { question: `What is the default parent of every React component?`, options: ["div", "fragment", "section", "component"], correct: 1 },
  { question: `What is virtual DOM?`, options: ["Real DOM", "Copy of real DOM", "Lightweight copy of real DOM", "Shadow DOM"], correct: 2 },
  { question: `Keys in React help in _____.`, options: ["Performance", "CSS Styling", "Debugging", "Routing"], correct: 0 },
  { question: `React components should return _____.`, options: ["CSS", "HTML", "JSX", "DOM"], correct: 2 },
  { question: `Which hook replaces lifecycle methods?`, options: ["useState", "useEffect", "useRef", "useLayoutEffect"], correct: 1 },
  { question: `How can data flow in React?`, options: ["One way", "Two way", "Both ways", "No flow"], correct: 0 },
  { question: `What is the command to create React app?`, options: ["create-react", "npx create-react-app", "npm create react", "new react app"], correct: 1 },
  { question: `React uses _____.`, options: ["Real DOM", "Virtual DOM", "Both", "None"], correct: 1 },
  { question: `Which file runs first in React app?`, options: ["index.js", "App.js", "main.js", "root.js"], correct: 0 }
];

// ========== Python Questions ==========
var Python = [
  { question: `Who developed Python language?`, options: ["Guido van Rossum", "James Gosling", "Brendan Eich", "Tim Berners-Lee"], correct: 0 },
  { question: `Python is a ____ language.`, options: ["Compiled", "Scripting", "Markup", "Machine"], correct: 1 },
  { question: `Which symbol is used for comments?`, options: ["//", "#", "/* */", "--"], correct: 1 },
  { question: `What is the file extension of Python files?`, options: [".p", ".py", ".python", ".pt"], correct: 1 },
  { question: `Which keyword defines a function?`, options: ["function", "def", "fun", "lambda"], correct: 1 },
  { question: `Which function is used for output?`, options: ["display()", "print()", "echo()", "out()"], correct: 1 },
  { question: `How do you insert comments in Python?`, options: ["/* comment */", "# comment", "<!-- comment -->", "// comment"], correct: 1 },
  { question: `Which data type is immutable?`, options: ["list", "tuple", "set", "dictionary"], correct: 1 },
  { question: `Which operator is used for exponentiation?`, options: ["^", "**", "exp", "pow"], correct: 1 },
  { question: `Which function gives length of string?`, options: ["count()", "length()", "len()", "size()"], correct: 2 },
  { question: `Which keyword is used for loop?`, options: ["loop", "iterate", "for", "each"], correct: 2 },
  { question: `Which method adds element to list?`, options: ["add()", "append()", "insert()", "push()"], correct: 1 },
  { question: `What does break do?`, options: ["Skip iteration", "Exit loop", "Pause loop", "Restart loop"], correct: 1 },
  { question: `What is indentation used for?`, options: ["Readability", "Block definition", "Decoration", "None"], correct: 1 },
  { question: `What is a correct variable name?`, options: ["2num", "num2", "num-2", "num 2"], correct: 1 },
  { question: `Which function converts string to int?`, options: ["int()", "str()", "float()", "eval()"], correct: 0 },
  { question: `Which keyword is used for conditions?`, options: ["for", "if", "when", "switch"], correct: 1 },
  { question: `Which keyword defines a class?`, options: ["object", "define", "class", "new"], correct: 2 },
  { question: `Which operator checks equality?`, options: ["=", "==", "===", "!="], correct: 1 },
  { question: `Which function reads input?`, options: ["read()", "input()", "scan()", "get()"], correct: 1 }
];

// ========== General Knowledge ==========
var General = [
  { question: `What is the capital of Pakistan?`, options: ["Karachi", "Islamabad", "Lahore", "Quetta"], correct: 1 },
  { question: `Which planet is known as Red Planet?`, options: ["Earth", "Mars", "Venus", "Jupiter"], correct: 1 },
  { question: `How many continents are there?`, options: ["5", "6", "7", "8"], correct: 2 },
  { question: `Which ocean is largest?`, options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1 },
  { question: `Who wrote 'Hamlet'?`, options: ["Charles Dickens", "William Shakespeare", "George Orwell", "Jane Austen"], correct: 1 },
  { question: `Which gas do plants absorb?`, options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
  { question: `Which is the smallest planet?`, options: ["Mercury", "Venus", "Earth", "Pluto"], correct: 0 },
  { question: `Which country invented the computer?`, options: ["USA", "UK", "Germany", "Japan"], correct: 1 },
  { question: `Who discovered gravity?`, options: ["Newton", "Einstein", "Tesla", "Galileo"], correct: 0 },
  { question: `What is the national flower of Pakistan?`, options: ["Rose", "Tulip", "Jasmine", "Sunflower"], correct: 2 },
  { question: `Which planet is closest to Sun?`, options: ["Earth", "Mercury", "Venus", "Mars"], correct: 1 },
  { question: `Who invented telephone?`, options: ["Alexander Graham Bell", "Edison", "Newton", "Tesla"], correct: 0 },
  { question: `Which is the largest desert in the world?`, options: ["Sahara", "Gobi", "Arabian", "Antarctica"], correct: 3 },
  { question: `What is H2O commonly known as?`, options: ["Oxygen", "Hydrogen", "Water", "Salt"], correct: 2 },
  { question: `Which is the fastest land animal?`, options: ["Cheetah", "Lion", "Tiger", "Horse"], correct: 0 },
  { question: `Which device is used to measure temperature?`, options: ["Barometer", "Thermometer", "Altimeter", "Hygrometer"], correct: 1 },
  { question: `Which part of body controls all functions?`, options: ["Heart", "Lungs", "Brain", "Kidneys"], correct: 2 },
  { question: `What is the largest mammal?`, options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: 1 },
  { question: `Who painted the Mona Lisa?`, options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"], correct: 1 },
  { question: `Which is the smallest country?`, options: ["Vatican City", "Malta", "Nepal", "Monaco"], correct: 0 }
];


// Load Selected Category
var selectedCategory = localStorage.getItem("selectedCategory");
if (selectedCategory === "HTML") {
  selectedCategory = HTML;
} else if (selectedCategory === "CSS") {
  selectedCategory = CSS;
}
else if (selectedCategory === "React") {
  selectedCategory = React;
}
else if (selectedCategory === "JavaScript") {
  selectedCategory = Js;
}
else if (selectedCategory === "Python") {
  selectedCategory = Python;
}
else {
  selectedCategory = General;
}


var index = 0;
var score = 0;
var current;

// Show Question
function showQuestion() {
  current = selectedCategory[index];
  questionInfo.innerHTML = `Question ${index + 1} of ${selectedCategory.length}`;
  questionText.innerHTML = `${index + 1}. ${current.question}`;

  for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i].textContent = current.options[i];
    optionButtons[i].classList.remove("select");
    optionButtons[i].style.backgroundColor = "";
  }

  nextBtn.style.display = "none";
}

//Option Select
for (var i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", function (e) {
    var selectedText = e.target.textContent;
    var correctAnswer = current.options[current.correct];

    for (var j = 0; j < optionButtons.length; j++) {
      optionButtons[j].classList.remove("select");
      optionButtons[j].style.backgroundColor = "";
    }
    this.classList.add("select");

    if (selectedText === correctAnswer && !this.classList.contains("answered")) {
      score++;
      this.classList.add("answered");
    }
    else {
      score += 0;
    }

    nextBtn.style.display = "block";
  });


}

// Next Button
nextBtn.addEventListener("click", function () {
  if (index < selectedCategory.length - 1) {
    index++;
    showQuestion();
  } else {
    localStorage.setItem("quizScore", score);
 

    if (score >= 15) {
  Swal.fire({
    title: "Congrats!",
    text: `You scored ${score} out of ${selectedCategory.length}!`,
    imageUrl: "../images/trophy.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Trophy",
    confirmButtonText: "Play Again"
  }).then(function () {
    location.href = "../categories/category.html"; 
  });
} else {
  Swal.fire({
    title: "YOU LOSE!",
    text: `You scored ${score} out of ${selectedCategory.length}.`,
        imageUrl: "../images/loose.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "LOSE",
    confirmButtonText: "Try Again"
  }).then(function () {
    location.href = "../categories/category.html"; 
  });
}

  }
});

// initial call
showQuestion();
