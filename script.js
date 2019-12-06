const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");
const scoreBoard = document.getElementById("scoreBoard");

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
 
function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

