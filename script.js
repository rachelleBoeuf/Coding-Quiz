//CHRONOLOGICAL ORDER
var startButton = document.querySelector('.button');
var quizQuestions = document.querySelector('.quizQuestions');
var timerEl = document.querySelector('#timer');
var possibleAnswer = document.querySelector('#possibleAnswer');
var endQuiz = document.querySelector('#endQuiz');
var initialsInput = document.querySelector('#initials');
var timer = 0;
var MAXTIME = 75;
var newTimer = null;
var currentQuestion = 0;
var currentAnswer = '';


endQuiz.style.display = "none";
function reportAnswer(event) {
  console.log('launch event', event.textContent);
  currentAnswer = event.textContent;
  evaluateAnswer();
  setTimeout(function () {
    nextQuestion();
  }, 1000);

}
function evaluateAnswer() {
  possibleAnswer.style.display = "inline";
  if (questions[currentQuestion].correct === currentAnswer) {
    possibleAnswer.textContent = 'correct';
  } else {
    possibleAnswer.textContent = 'wrong';
    timer -= 5
  }
}
//OBJECT WAS "DESTRUCTERED" IN THE PARAMETER LIST- 
function questionComponent({ question, answers }) {
  var questionText = '<div>' + question + '</div>'
  var buttonList = ''
  for (const answer of answers) {
    buttonList += '<button onclick="reportAnswer(this)">' + answer + '</button><br>'
  }

  return questionText + buttonList

}
// time argument is in milliseconds. 1 = 1000 milliseconds.
function Timer(time) {
  timer = MAXTIME
  return setInterval(function () {
    timerEl.textContent = timer--
  }, time)

}

// Arrays use indexes, ex: questions[0] === {question: "q1", ...}
var questions = [

  // Objects use keys, ex: questions[0].question === "q1"
  { // index 0
    question: "What is the abbrivation for JavaScript?",
    answers: ["J", "JS", "JST", "Java"],
    correct: "JS"
  },

  { // index 1
    question: "q2",
    answers: ["a", "b", "c", "d"],
    correct: "c"
  },

  { // index 2
    question: "q3",
    answers: ["a", "b", "c", "d"],
    correct: "a"
  },

  { // index 3
    question: "q4",
    answers: ["a", "b", "c", "d"],
    correct: "b"
  }
];




function beginQuiz() {
  //Add Timer here
  if (!newTimer) {
    newTimer = Timer(1000)
  }
  quizQuestions.style.display = "block";
  possibleAnswer.textContent= '';
  console.log("is my function working");
  startButton.setAttribute("class", "button hidden");
  console.log(questions.length);
  var aQuestion = questionComponent(questions[currentQuestion])
  quizQuestions.innerHTML = aQuestion




}
function endQuizFN() {
  quizQuestions.style.display = "none";
  possibleAnswer.style.display = "none";
  endQuiz.style.display = "inline";
}


function nextQuestion() {
  currentQuestion++
  if (currentQuestion < questions.length) {
    beginQuiz();
  } else {
    endQuizFN();
  }




}


startButton.addEventListener("click", beginQuiz);