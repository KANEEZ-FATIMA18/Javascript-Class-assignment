
var questionText = document.getElementById("questions");
var optionButtons = document.querySelectorAll(".option-btn");
var nextBtn = document.getElementById("next-btn");
var questionInfo = document.querySelector(".question-info");
var timer = document.querySelector("#timer");

var HTML = [
  { question: `What does HTML stand for?`, options: ["Hyper Text Markup Language", "HighText Machine Language", "Hyperlinking Text Management Language", "None"], correct: "Hyper Text Markup Language" },
  { question: `Who is the father of HTML?`, options: ["Tim Berners-Lee", "Brendan Eich", "Dennis Ritchie", "James Gosling"], correct: "Tim Berners-Lee" },
  { question: `Which HTML tag is used to define an internal style sheet?`, options: ["<css>", "<script>", "<style>", "<design>"], correct: "<style>" },
  { question: `Which tag is used to display a picture in a HTML page?`, options: ["<image>", "<img>", "<src>", "<pic>"], correct: "<img>" },
  { question: `Which tag is used to create a hyperlink?`, options: ["<link>", "<a>", "<href>", "<hyper>"], correct: "<a>" },
  { question: `What is the correct HTML element for inserting a line break?`, options: ["<break>", "<br>", "<lb>", "<hr>"], correct: "<br>" },
  { question: `Which attribute specifies an alternate text for an image?`, options: ["title", "alt", "src", "name"], correct: "alt" },
  { question: `Which HTML element is used for the largest heading?`, options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: "<h1>" },
  { question: `Which tag is used to display a numbered list?`, options: ["<ul>", "<ol>", "<dl>", "<li>"], correct: "<ol>" },
  { question: `What does the <hr> tag do?`, options: ["New line", "Horizontal rule", "Break paragraph", "Line space"], correct: "Horizontal rule" },
  { question: `Which attribute is used to open a link in new tab?`, options: ["target='_self'", "target='_blank'", "new='true'", "open='tab'"], correct: "target='_blank'" },
  { question: `HTML comments are placed between?`, options: ["/* */", "<!-- -->", "//", "{ }"], correct: "<!-- -->" },
  { question: `Which tag is used for table rows?`, options: ["<td>", "<th>", "<tr>", "<table>"], correct: "<tr>" },
  { question: `Which HTML element is used for inserting a background image?`, options: ["<body background='img.jpg'>", "<bg>", "<background>", "<image>"], correct: "<body background='img.jpg'>" },
  { question: `Which tag is used to define a list item?`, options: ["<ol>", "<ul>", "<li>", "<list>"], correct: "<li>" },
  { question: `What is the default alignment of text in HTML?`, options: ["left", "right", "center", "justify"], correct: "left" },
  { question: `Which element is used for line separator?`, options: ["<break>", "<line>", "<hr>", "<br>"], correct: "<hr>" },
  { question: `Which HTML attribute is used to define inline styles?`, options: ["style", "font", "design", "class"], correct: "style" },
  { question: `What does <p> tag define?`, options: ["Paragraph", "Picture", "Preformatted text", "Plain text"], correct: "Paragraph" },
  { question: `HTML is a ____ language.`, options: ["Programming", "Markup", "Scripting", "Compiled"], correct: "Markup" }
];

var CSS = [
  { question: `What does CSS stand for?`, options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: "Cascading Style Sheets" },
  { question: `Which HTML tag is used to link CSS?`, options: ["<style>", "<link>", "<css>", "<head>"], correct: "<link>" },
  { question: `Which property changes text color?`, options: ["font-color", "text-color", "color", "font-style"], correct: "color" },
  { question: `How do you add background color in CSS?`, options: ["background-color", "color-background", "bgcolor", "bg"], correct: "background-color" },
  { question: `Which property controls text size?`, options: ["font-style", "text-size", "font-size", "size"], correct: "font-size" },
  { question: `How can you make text bold in CSS?`, options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "weight: bold;"], correct: "font-weight: bold;" },
  { question: `Which property changes font?`, options: ["font-family", "text-font", "font-style", "font-type"], correct: "font-family" },
  { question: `How do you center text horizontally?`, options: ["text-align: center;", "align: center;", "horizontal-align: center;", "center: text;"], correct: "text-align: center;" },
  { question: `Which property is used for spacing inside an element?`, options: ["margin", "padding", "border", "space"], correct: "padding" },
  { question: `Which property adds shadow to text?`, options: ["text-shadow", "font-shadow", "shadow-text", "text-effect"], correct: "text-shadow" },
  { question: `Which value of position makes element relative to viewport?`, options: ["relative", "absolute", "fixed", "sticky"], correct: "fixed" },
  { question: `How to select all <p> elements in CSS?`, options: ["p{}", "#p{}", ".p{}", "<p>"], correct: "p{}" },
  { question: `How to make a list display horizontally?`, options: ["display: inline;", "display: block;", "display: list;", "float: left;"], correct: "display: inline;" },
  { question: `Which unit is relative to font size?`, options: ["px", "em", "%", "vh"], correct: "em" },
  { question: `What is the default position value?`, options: ["relative", "absolute", "static", "inherit"], correct: "static" },
  { question: `Which property sets the outer space of an element?`, options: ["margin", "padding", "border", "outline"], correct: "margin" },
  { question: `Which property adds border color?`, options: ["border-color", "border-style", "border-type", "color-border"], correct: "border-color" },
  { question: `Which shorthand sets margin for all sides?`, options: ["margin: 10px;", "all-margin: 10px;", "margin-all: 10px;", "m:10px;"], correct: "margin: 10px;" },
  { question: `What is the correct syntax for a class selector?`, options: [".classname", "#classname", "classname", "<classname>"], correct: ".classname" },
  { question: `Which property adds rounded corners?`, options: ["border-radius", "border-curve", "corner-round", "radius"], correct: "border-radius" }
];

var Js = [
  { question: `Who invented JavaScript?`, options: ["Tim Berners-Lee", "Brendan Eich", "James Gosling", "Guido van Rossum"], correct: "Brendan Eich" },
  { question: `What is the correct syntax to print in JavaScript console?`, options: ["print()", "console.log()", "echo()", "document.write()"], correct: "console.log()" },
  { question: `Which company developed JavaScript?`, options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"], correct: "Netscape" },
  { question: `Inside which HTML element do we put JavaScript?`, options: ["<js>", "<script>", "<javascript>", "<code>"], correct: "<script>" },
  { question: `How do you write a comment in JavaScript?`, options: ["<!-- -->", "//", "/* */", "** **"], correct: "//" },
  { question: `Which keyword declares a variable in JavaScript?`, options: ["var", "let", "const", "All of these"], correct: "All of these" },
  { question: `Which method converts JSON to object?`, options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "objectify()"], correct: "JSON.parse()" },
  { question: `What will typeof null return?`, options: ["null", "object", "undefined", "number"], correct: "object" },
  { question: `Which symbol is used for comments in JS?`, options: ["//", "#", "!", "<!--"], correct: "//" },
  { question: `Which function displays an alert box?`, options: ["alert()", "msg()", "prompt()", "popup()"], correct: "alert()" },
  { question: `Which operator is used to assign value?`, options: ["=", "==", "===", ":"], correct: "=" },
  { question: `Which operator is used to compare both value and type?`, options: ["=", "==", "===", "!="], correct: "===" },
  { question: `What will 2 + "2" return?`, options: ["4", "22", "Error", "undefined"], correct: "22" },
  { question: `What does DOM stand for?`, options: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"], correct: "Document Object Model" },
  { question: `What is NaN in JavaScript?`, options: ["Not a Name", "Not a Null", "Not a Number", "Name as Number"], correct: "Not a Number" },
  { question: `Which function is used to parse integers?`, options: ["parseInt()", "parseFloat()", "toFixed()", "int()"], correct: "parseInt()" },
  { question: `Which keyword stops a loop?`, options: ["stop", "break", "end", "exit"], correct: "break" },
  { question: `What does the push() method do?`, options: ["Adds to start", "Adds to end", "Removes element", "Reverses array"], correct: "Adds to end" },
  { question: `What will typeof [] return?`, options: ["object", "array", "list", "undefined"], correct: "object" },
  { question: `Which method removes the last element of array?`, options: ["pop()", "shift()", "delete()", "splice()"], correct: "pop()" }
];

var React = [
  { question: `Who developed React?`, options: ["Google", "Facebook", "Microsoft", "Twitter"], correct: "Facebook" },
  { question: `React is mainly used for building _____.`, options: ["Databases", "User Interface", "Servers", "Networking"], correct: "User Interface" },
  { question: `Everything in React is a _____.`, options: ["Function", "Class", "Component", "Module"], correct: "Component" },
  { question: `What is used to pass data to components in React?`, options: ["props", "data", "arguments", "methods"], correct: "props" },
  { question: `What is the correct syntax to create component?`, options: ["function MyComp()", "component MyComp()", "render MyComp()", "createComponent()"], correct: "function MyComp()" },
  { question: `Which hook is used to manage state in functional components?`, options: ["useEffect", "useState", "useReducer", "useRef"], correct: "useState" },
  { question: `Which hook runs after every render by default?`, options: ["useMemo", "useEffect", "useState", "useContext"], correct: "useEffect" },
  { question: `JSX stands for _____.`, options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript X"], correct: "JavaScript XML" },
  { question: `Which method is used to render React element?`, options: ["React.render()", "ReactDOM.render()", "render.React()", "DOMReact()"], correct: "ReactDOM.render()" },
  { question: `Which keyword is used to export component?`, options: ["share", "send", "export", "return"], correct: "export" },
  { question: `Which keyword is used to import React?`, options: ["require React", "import React", "get React", "load React"], correct: "import React" },
  { question: `What is the default parent of every React component?`, options: ["div", "fragment", "section", "component"], correct: "fragment" },
  { question: `What is virtual DOM?`, options: ["Real DOM", "Copy of real DOM", "Lightweight copy of real DOM", "Shadow DOM"], correct: "Lightweight copy of real DOM" },
  { question: `Keys in React help in _____.`, options: ["Performance", "CSS Styling", "Debugging", "Routing"], correct: "Performance" },
  { question: `React components should return _____.`, options: ["CSS", "HTML", "JSX", "DOM"], correct: "JSX" },
  { question: `Which hook replaces lifecycle methods?`, options: ["useState", "useEffect", "useRef", "useLayoutEffect"], correct: "useEffect" },
  { question: `How can data flow in React?`, options: ["One way", "Two way", "Both ways", "No flow"], correct: "One way" },
  { question: `What is the command to create React app?`, options: ["create-react", "npx create-react-app", "npm create react", "new react app"], correct: "npx create-react-app" },
  { question: `React uses _____.`, options: ["Real DOM", "Virtual DOM", "Both", "None"], correct: "Virtual DOM" },
  { question: `Which file runs first in React app?`, options: ["index.js", "App.js", "main.js", "root.js"], correct: "index.js" }
];

var Python = [
  { question: `Who developed Python language?`, options: ["Guido van Rossum", "James Gosling", "Brendan Eich", "Tim Berners-Lee"], correct: "Guido van Rossum" },
  { question: `Python is a ____ language.`, options: ["Compiled", "Scripting", "Markup", "Machine"], correct: "Scripting" },
  { question: `Which symbol is used for comments?`, options: ["//", "#", "/* */", "--"], correct: "#" },
  { question: `What is the file extension of Python files?`, options: [".p", ".py", ".python", ".pt"], correct: ".py" },
  { question: `Which keyword defines a function?`, options: ["function", "def", "fun", "lambda"], correct: "def" },
  { question: `Which function is used for output?`, options: ["display()", "print()", "echo()", "out()"], correct: "print()" },
  { question: `How do you insert comments in Python?`, options: ["/* comment */", "# comment", "<!-- comment -->", "// comment"], correct: "# comment" },
  { question: `Which data type is immutable?`, options: ["list", "tuple", "set", "dictionary"], correct: "tuple" },
  { question: `Which operator is used for exponentiation?`, options: ["^", "**", "exp", "pow"], correct: "**" },
  { question: `Which function gives length of string?`, options: ["count()", "length()", "len()", "size()"], correct: "len()" },
  { question: `Which keyword is used for loop?`, options: ["loop", "iterate", "for", "each"], correct: "for" },
  { question: `Which method adds element to list?`, options: ["add()", "append()", "insert()", "push()"], correct: "append()" },
  { question: `What does break do?`, options: ["Skip iteration", "Exit loop", "Pause loop", "Restart loop"], correct: "Exit loop" },
  { question: `What is indentation used for?`, options: ["Readability", "Block definition", "Decoration", "None"], correct: "Block definition" },
  { question: `What is a correct variable name?`, options: ["2num", "num2", "num-2", "num 2"], correct: "num2" },
  { question: `Which function converts string to int?`, options: ["int()", "str()", "float()", "eval()"], correct: "int()" },
  { question: `Which keyword is used for conditions?`, options: ["for", "if", "when", "switch"], correct: "if" },
  { question: `Which keyword defines a class?`, options: ["object", "define", "class", "new"], correct: "class" },
  { question: `Which operator checks equality?`, options: ["=", "==", "===", "!="], correct: "==" },
  { question: `Which function reads input?`, options: ["read()", "input()", "scan()", "get()"], correct: "input()" }
];

var General = [
  { question: `What is the capital of Pakistan?`, options: ["Karachi", "Islamabad", "Lahore", "Quetta"], correct: "Islamabad" },
  { question: `Which planet is known as Red Planet?`, options: ["Earth", "Mars", "Venus", "Jupiter"], correct: "Mars" },
  { question: `How many continents are there?`, options: ["5", "6", "7", "8"], correct: "7" },
  { question: `Which ocean is largest?`, options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: "Pacific" },
  { question: `Who wrote 'Hamlet'?`, options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: "William Shakespeare" },
  { question: `Which gas do plants absorb during photosynthesis?`, options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: "Carbon Dioxide" },
  { question: `What is the national animal of Pakistan?`, options: ["Lion", "Markhor", "Tiger", "Elephant"], correct: "Markhor" },
  { question: `Which country is known as Land of Rising Sun?`, options: ["China", "Japan", "Thailand", "Korea"], correct: "Japan" },
  { question: `How many colors are in a rainbow?`, options: ["5", "6", "7", "8"], correct: "7" },
  { question: `Which is the largest desert in the world?`, options: ["Sahara", "Arabian", "Gobi", "Thar"], correct: "Sahara" },
  { question: `Which is the longest river in the world?`, options: ["Amazon", "Nile", "Yangtze", "Indus"], correct: "Nile" },
  { question: `Who was the first man on the moon?`, options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], correct: "Neil Armstrong" },
  { question: `What is H2O?`, options: ["Oxygen", "Hydrogen", "Water", "Salt"], correct: "Water" },
  { question: `Which language is spoken in Brazil?`, options: ["Spanish", "Portuguese", "English", "French"], correct: "Portuguese" },
  { question: `What is the currency of Japan?`, options: ["Yen", "Won", "Dollar", "Peso"], correct: "Yen" },
  { question: `Which metal is liquid at room temperature?`, options: ["Mercury", "Iron", "Gold", "Aluminum"], correct: "Mercury" },
  { question: `Which planet is closest to the Sun?`, options: ["Earth", "Mercury", "Venus", "Mars"], correct: "Mercury" },
  { question: `Who invented the telephone?`, options: ["Alexander Graham Bell", "Thomas Edison", "Einstein", "Newton"], correct: "Alexander Graham Bell" },
  { question: `What is the chemical symbol of Gold?`, options: ["Go", "Au", "Ag", "Gd"], correct: "Au" },
  { question: `Which is the smallest continent?`, options: ["Europe", "Australia", "Antarctica", "Asia"], correct: "Australia" }
];


// Load Selected Category
var selectedCategory = localStorage.getItem("selectedCategory");
if (selectedCategory === "HTML") {
  selectedCategory = HTML;
} else if (selectedCategory === "CSS") {
  selectedCategory = CSS;
} else if (selectedCategory === "React") {
  selectedCategory = React;
} else if (selectedCategory === "JavaScript" || selectedCategory === "JS") {
  selectedCategory = Js;
} else if (selectedCategory === "Python") {
  selectedCategory = Python;
} else {
  selectedCategory = General;
}



var index = 0;
var score = 0;
var current;
var timeLeft = 35 * 60;
var countdown;

// showQuestion function
function showQuestion() {
  clearInterval(countdown);

  countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (timeLeft > 0) {
      timer.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      timeLeft--;
    } else {
      clearInterval(countdown);
      Swal.fire({
        title: "⏰ Time’s up!",
        text: "Your quiz time has ended!",
        icon: "warning",
      }).then(() => {
        location.href = "../loose/loose.html";
      });
    }
  }, 1000);

  current = selectedCategory[index];
  questionInfo.innerHTML = `Question ${index + 1} of ${selectedCategory.length}`;
  questionText.innerHTML = `${index + 1}. ${current.question}`;

  for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i].textContent = current.options[i];
    optionButtons[i].classList.remove("select");
    optionButtons[i].classList.remove("answered");
    optionButtons[i].style.backgroundColor = "";
  }

  nextBtn.style.display = "none";
}


// Option selection 
for (var i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", function (e) {
    var selectedText = e.target.textContent;
    var correctAnswer = current.correct;

    for (var j = 0; j < optionButtons.length; j++) {
      optionButtons[j].classList.remove("select");
      optionButtons[j].style.backgroundColor = "";
    }

    this.classList.add("select");

    // score update 
    if (!this.classList.contains("answered")) {
      if (selectedText === correctAnswer) {
        score++;
      } else {
        score += 0;
      }
      this.classList.add("answered");
    }

    nextBtn.style.display = "block";
  });
}


// Next button
nextBtn.addEventListener("click", function () {
  if (index < selectedCategory.length - 1) {
    index++;
    showQuestion();
  } else {
    clearInterval(countdown);
    localStorage.setItem("quizScore", score);

    if (score >= 15) {
      Swal.fire({
        title: "Congrats!",
        text: `You scored ${score} out of ${selectedCategory.length}!`,
        imageUrl: "../images/trophy.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Trophy",
        confirmButtonText: "Play Again",
      }).then(function () {
        location.href = "../Categories/category.html";
      });
    } else {
      Swal.fire({
        title: "YOU LOSE!",
        text: `You scored ${score} out of ${selectedCategory.length}.`,
        imageUrl: "../images/loose.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "LOSE",
        confirmButtonText: "Try Again",
      }).then(function () {
        location.href = "../Categories/category.html";
      });
    }
  }
});

showQuestion();