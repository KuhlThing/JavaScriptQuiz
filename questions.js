function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "/10" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("How tall was Andre the Giant?", ["6'11", "5'7","7'4", "7'11"], "7'4"),
    new Question("Which album was X Japan's third release?", ["Jealousy", "Blue Blood", "Dahlia", "Vanishing Vision"], "Jealousy"),
    new Question("Which of the following was NOT a character in Chrono Trigger:", ["Magus", "Lara","Hestia", "Nadia"], "Hestia"),
    new Question("On an electric guitar, the part under the strings that transmits sound is called:", ["Bridge", "Nut", "Headstock", "Pickup"], "Pickup"),
    new Question("Amanda Palmer's husband is:", ["Elon Musk", "Neil Gaiman", "Alan Moore", "Brian Viglione"], "Neil Gaiman"),
    new Question("Which trading card game has been shown to be Turing complete?", ["Pokemon", "Yu-Gi-Oh", "Magic: the Gathering", "Legend of the Five Rings"], "Magic: the Gathering"),
    new Question("Iron Man officially kicked off the Marvel Cinematic Universe in 2008. Who was the director?", ["Martin Scorsese", "Jon Favreau", "Ang Lee", "Taika Waititi"], "Jon Favreau"),
    new Question("The best actor in the 2003 film \"The Room\" was undoubtedly", ["Greg Sestero", "Tommy Wisseau", "Doggy", "Juliette Danielle"], "Doggy"),
    new Question("Which of the following actors has not appeared in films based on Marvel and DC properties?", ["Willem Dafoe", "Jaleel White", "Halle Berry", "Tommy Lee Jones"], "Jaleel White"),
    new Question("Which Western classic was based on an Akira Kurosawa samurai epic?", ["The Good, the Bad, and the Ugly", "The Searchers", "The Magnificent Seven", "A Fistful of Dollars"], "The Magnificent Seven")
];

var quiz = new Quiz(questions);

populate();