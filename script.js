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
const questionTime = 15;
const gaugeWidth = 175;
let count = 0;
const gaugeProgress = gaugeWidth / questionTime;

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

// Start Quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    timer = setInterval(renderCounter, 1500);
}
function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function correctAnswer() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
function wrongAnswer() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

function counterRender() {
    if( count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count ++;
    }
    else{
        count = 0;
        wrongAnswer();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            questionRender();
        }
        else {
            clearInterval(timer);
        }
        scoreRender();
    }
}