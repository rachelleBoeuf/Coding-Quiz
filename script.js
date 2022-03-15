//CHRONOLOGICAL ORDER
var startButton = document.querySelector('.button');
var quizQuestions = document.querySelector('.quizQuestions');
var timerEl = document.querySelector('#timer');
var possibleAnswer = document.querySelector('#possibleAnswer');
var endQuiz = document.querySelector('#endQuiz');
var finalScore = document.querySelector('#finalScore');
var initialsInputEl = document.querySelector('#initials');
var submitButtonEl = document.querySelector('#submit');
var timer = 0;
var seconds = 75;
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
  timer = seconds
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
    question: "What is my favorite band",
    answers: ["Aerosmith", "Justin Bieber", "Black Sabbath", "Etta James"],
    correct: "Etta James"
  },

  { // index 2
    question: "Do I like the beach? Select the BEST answer",
    answers: ["yes", "probably", "without a shadow of a doubt", "no"],
    correct: "without a shadow of a doubt"
  },

  { // index 3
    question: "What kind of pet do I have",
    answers: ["bird", "cow", "cat", "the best dog in the world"],
    correct: "the best dog in the world"
  }
];




function beginQuiz() {
  //Add Timer here
  if (!newTimer) {
    newTimer = Timer(1000)
  }
  quizQuestions.style.display = "block";
  possibleAnswer.textContent = '';
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

clearInterval(timer);
  finalScore.textContent = seconds

}
// SUBMIT TO LOCAL STORAGE FUNCTION
function handleSubmit(event) {
  event.preventDefault();
  
  var finalScore = finalScore.textContent;
  var initialsInputEl = document.querySelector('#initials');


localStorage.setItem("finalScore", JSON.stringify(finalScore));
localStorage.setItem('initials', JSON.stringify(initialsInputEl));
seconds = 75;
initialsInputEl = '';

};






startButton.addEventListener("click", beginQuiz);
submitButtonEl.addEventListener("submit", handleSubmit);