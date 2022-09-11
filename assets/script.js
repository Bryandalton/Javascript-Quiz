const questions = [
    {
      question: 'Which is a primative date value?',
      answers: [
        { text: 'Boolean',
         correct: false },
         { text: 'Number',
          correct: false },
         { text: 'String',
          correct: false },
         { text: 'all the above.',
          correct: true },
      ]
    },
    {
      question: 'What is a boolean?',
      answers: [
            { text: 'a number in quotations',
             correct: false },
            { text: 'a series of strings',
             correct: false },
            { text: 'a value of true/false',
             correct: true },
            { text: 'a function',
             correct: false }
      ]
    },
    {
      question: 'A strings value must be enclosed within?',
      answers: [
         { text: 'brackets',
          correct: false },
         { text: 'quotes',
          correct: true },
         { text: 'curly brackets',
          correct: false },
         { text: 'none of the above',
          correct: false }
      ]
    },
    {
      question: 'is "undefined" a primative data value?',
      answers: [
            { text: 'false',
             correct: false },
            { text: 'true',
             correct: true },
            { text: 'It\'s case dependent',
             correct: false},
            { text: 'Trick question',
             correct: false}
      ]
    },
    {
        question: 'Arrays in Javascript are used to...',
        answers: [
            { text: 'hold more than one value',
             correct: true},
            { text: 'store stings',
             correct: false},
            { text: 'provide storage in the browser',
             correct: false},
            { text: 'keep numbers seperate',
             correct: false}
        ]
    }
  ];

let start = document.getElementById("startbtn");
var gameStarted = false;
var hasWon = false;
var timerEl = document.getElementById("timercount");
var questionCard = document.getElementById('card');
var answerBtn = document.querySelectorAll('.answer-buttons');
var titleEl = document.getElementById('title')
let shuffledQuestions, currentQuestionIndex = 0;
var scoresToggle = document.getElementById('scores-toggle')
var highScores = document.getElementById('highscore')
var scoreList = document.getElementById('scorelist')
var totalScore = 100;
var timerCount = 60;


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


function winGame(){
    var hasWon = true;
    if (hasWon){
        console.log("You win!")
        gameStarted = false;
    }
    
};

function loseGame(){
hasWon = false;
questionCard.textContent = 'GAME OVER!';
setScore();
console.log('you lose!');
gameStarted = false;
};

function setScore() {
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
        userName.textContent = [inputField.value, totalScore];
    });
};  

function showQuestion(currentQuestion) {
    titleEl.innerText = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        answerBtn[i].textContent = currentQuestion.answers[i]['text'];
    }
}

function selectAnswer (currentQuestion) {
    for(let i = 0; i < answerBtn.length; i++)
    {
        answerBtn[i].addEventListener('click', isCorrect)
    }
}

selectAnswer()
function isCorrect (currentQuestion) {
for (i = 0; i < questions.length; i++) {
    questions[i].answers.forEach()
    }
// }
// if (currentQuestion.answers[i].correct) {
//     answerBtn.classList.remove('btn')
//     answerBtn.classList.add()
// }
};
// console.log(i)

// console.log(questions[0].answers[0]['correct'])


//starts game on click of 'start' button
start.addEventListener('click', startGame)

//shows highscores
scoresToggle.addEventListener('click', () => {
    highScores.classList.toggle('hide')
    
})

function testFunction () {
    console.log('Test success!')
}

console.log(questions[0].answers[0].correct)

// to do:
//index questions, index answers, and get the boolean value of correct for given button pressed