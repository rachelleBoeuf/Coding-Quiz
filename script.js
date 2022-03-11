var startButton = document.querySelector('.button');
var quizQuestions = document.querySelector('.quizQuestions');
var currentQuestion = 0;



// Arrays use indexes, ex: questions[0] === {question: "q1", ...}
var questions = [

  // Objects use keys, ex: questions[0].question === "q1"
  { // index 0
    question: "q1",
    answers: ["a", "b", "c", "d"],
    correct: "b"
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
  console.log("is my function working");
  startButton.setAttribute("class", "button hidden");
  questions.addEventListener("button").addEventListener("click", startButton);
}








var questionTitle = document.createElement('h1');
questionTitle.textContent = questions[0].question;
quizQuestions.appendChild(questionTitle);

var questionTitle = [
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: ""
    },
    correctAnswer: ""
  }
];








startButton.addEventListener("click", beginQuiz);



// var timeleft = 75;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);
