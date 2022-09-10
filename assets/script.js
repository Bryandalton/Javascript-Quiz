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
      question: 'is "undefined" a primative data value?',
      answers: [
            { text: 'false', correct: false },
            { text: 'true', correct: true },
            { text: 'It\'s case dependent', correct: false},
            { text: 'Trick question', correct: false}
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

let start = document.getElementById("startbtn")
var gameStarted = false;
var hasWon = false;
var timerEl = document.getElementById("timercount");
var questionCard = document.getElementById('card');
var answerBtn = document.querySelectorAll('.answer-buttons') //is this the right selector?
var titleEl = document.getElementById('title')
let shuffledQuestions, currentQuestionIndex = 0;
var scoresToggle = document.getElementById('scores-toggle')
var highScores = document.getElementById('highscore')
var scoreList = document.getElementById('scorelist')
var totalScore = 100;
var timerCount = 2;


function startGame() {
    questionCard.classList.remove('hide');
    document.getElementById('timer').classList.remove('hide');
    if(gameStarted){
        return;
    }
    shuffledQuestions = questions.sort(function () {
        Math.random() - .5
    })
    
    startTime(timerCount);
    gameStarted = true;
    setNextQuestion();
};


function setNextQuestion() {
    // console.log(shuffledQuestions, 'set next question function')

    showQuestion(shuffledQuestions[currentQuestionIndex]);
    //to do:
    //incriment currentQuestionIndex
    //add conditional statement once currentQuestionIndex is > questions.length stop quiz
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
//add functionality to choose answer
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
questionCard.textContent = 'GAME OVER!'
var inputField = document.createElement('input')
var submitBtn = document.createElement('button')
var userName = document.createElement('li')
userName.setAttribute('id', 'userInput')
inputField.setAttribute('id', 'nameInput')
submitBtn.textContent = 'Submit my score.'
submitBtn.setAttribute('class', 'scoreBtn')
questionCard.appendChild(inputField)
questionCard.appendChild(submitBtn)
submitBtn.addEventListener('click', function () {
    scoreList.appendChild(userName)
    document.getElementById('userInput') = document.getElementById('nameInput').nodeValue
    console.log('click heard')})
console.log('you lose!')
gameStarted = false;
}

function showQuestion(currentQuestion) {
    titleEl.innerText = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        answerBtn[i].textContent = currentQuestion.answers[i]['text'];
    }
    // currentQuestion.answers.forEach(answer => {
    //     console.log(answer.text)
    //     answerBtn.innerText = answer.text;
    //     //why are buttons not displaying correct text
    // // console.log(currentQuestion.answer, 'answers')
    // } )
}

//starts game on click of start button
start.addEventListener('click', startGame)

//shows highscores
scoresToggle.addEventListener('click', () => {
    highScores.classList.toggle('hide')
    
})
//todo:
//add input for user to log name/score append li to ol #scorelist
//add local storage for name/score
console.log(answerBtn)