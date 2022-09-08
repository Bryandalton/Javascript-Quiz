
let start = document.getElementById("startbtn")
var gameStarted = false;
var hasWon = false;
var timerEl = document.getElementById("timercount");
var questionCard = document.getElementById('card');
var answerBtn = document.getElementById('answer-buttons')
var titleEl = document.getElementById('title')

let shuffledQuestions, currentQuestionIndex;

function startGame() {
    questionCard.classList.remove('hide');
    document.getElementById('timer').classList.remove('hide');
    if(gameStarted){
        return;
    }
    shuffledQuestions = questions.sort(function () {
        Math.random() - .5
    })
    var timerCount = 60;
    startTime(timerCount);
    gameStarted = true;
    setNextQuestion();
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function startTime(timerCount) {
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0){
            if (hasWon && timerCount > 0) {
                clearInterval(timer);
                winGame();
            } else if (timerCount == 0) {
                clearInterval(timer)
                loseGame();
            }
        }


    }, 1000);
};

function selectAnswer() {

}

function winGame(){
    var hasWon = true;
    if (hasWon){
        console.log("You win!")
        gameStarted = false;
    }
    
};

function loseGame(){
hasWon = false;
console.log('you lose!')
gameStarted = false;
}

function showQuestion() {
    titleEl.innerText = questions.question;
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
    } )
}


start.addEventListener('click', startGame)

const questions = [
    {
      question: 'Which is a primative date value?',
      answers: [
        { text: 'Boolean', correct: false },
         { text: 'Number', correct: false },
         { text: 'String', correct: false },
         { text: 'all the above.', correct: true },

      ]
    },
    {
      question: 'What is a boolean?',
      answers: [
            { text: 'a number in quotations', correct: false },
            { text: 'a series of strings', correct: false },
            { text: 'a value of true/false', correct: true },
            { text: 'a function', correct: false }
      ]
    },
    {
      question: 'A strings value must be enclosed within?',
      answers: [
         { text: 'brackets', correct: false },
         { text: 'quotes', correct: true },
         { text: 'curly brackets', correct: false },
         { text: 'none of the above', correct: false }
      ]
    },
    {
      question: 'is "undefined" a primative date value?',
      answers: [
            { text: 'false', correct: false },
            { text: 'true', correct: true }
      ]
    },
    {
        question: 'Arrays in Javascript are used to...',
        answers: [
            { text: 'hold more than one value', correct: true},
            { text: 'store stings', correct: false},
            { text: 'provide storage in the browser', correct: false},
            { text: 'keep numbers seperate', correct: false}
        ]
    }
  ];

  console.log(questions)