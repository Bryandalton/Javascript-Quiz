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
let shuffledQuestions; 
var currentQuestionIndex = 0;
var scoresToggle = document.getElementById('scores-toggle')
var highScores = document.getElementById('highscore')
var scoreList = document.getElementById('scorelist')
var totalScore = 100;
var timerCount = 60;

//starts game and calls timer
function startGame() {
    questionCard.classList.remove('hide');
    document.getElementById('timer').classList.remove('hide');
    //disables start button during game
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
//
function setNextQuestion() {
    if (currentQuestionIndex < questions.length) {
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else if (currentQuestionIndex == 4) {
        setScore()
    }
}

function startTime(timerCount) {
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0 || currentQuestionIndex == questions.length){
            clearInterval(timer)
            endGame()
        }


    }, 1000);
};

function endGame(){
questionCard.textContent = 'QUIZ OVER!';
setScore();
console.log('Game Over!')
gameStarted = false;
};
//allows user to input and save own score
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
        userName.textContent = [localStorage.getItem('Name') +' '+ localStorage.getItem('score')];
        var currentHighScore = localStorage.getItem('score')
        localStorage.setItem('Name' , inputField.value)
        if (currentHighScore < totalScore) {
            localStorage.setItem('score', totalScore)
        } //not overwriting scores or storing multipul names
    });
};  
//displays questions and answer buttons
function showQuestion(currentQuestion) {
    titleEl.innerText = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        answerBtn[i].textContent = currentQuestion.answers[i]['text'];
    }
}
//identifies selection of answer button
function selectAnswer () {
    for(let i = 0; i < answerBtn.length; i++)
    {
      answerBtn[i].addEventListener('click', () => isCorrect(i))
    }
}

selectAnswer()
//determines if answer.correct = true/false
function isCorrect (btnIndex) {
  let currentQuestion = shuffledQuestions[currentQuestionIndex];

  let correctClicked = currentQuestion.answers[btnIndex].correct;
  console.log('correct answer clicked?', correctClicked);
  currentQuestionIndex++;
  setTimeout(() => setNextQuestion(), 300)
  if (!correctClicked) {
    timerCount -= 12; //not working
    totalScore -= 20;

  }
};

//starts game on click of 'start' button
start.addEventListener('click', startGame)

//toggles highscores on click of highscores button
scoresToggle.addEventListener('click', () => {
    highScores.classList.toggle('hide')
    
})