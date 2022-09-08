let question = {
    title: 'Question 1',
    alternative: ['op1', 'op2', 'op3', 'op4'],
    correctAnswer: 2 //op3
};
let start = document.getElementById("startbtn")
var gameStarted = false;
// var timer;
var hasWon = false;
var timerEl = document.getElementById("timercount");
var hidden = document.querySelectorAll(".hide")


function startGame() {
    hidden.classList.remove('hide');
    if(gameStarted){
        return;
    }
    var timerCount = 60;
    startTime(timerCount);
    gameStarted = true;
};

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


function showQuestion(question) {
//select dom element
var titleDiv = document.getElementById("title");
//modify it
titleDiv.textContent = question.title;
let alts = document.querySelectorAll('.alternatives')
alts.forEach(function(element, index) {
element.textContent = question.alternative[index]
});
console.log(alts)
}

showQuestion(question)

start.addEventListener('click', startGame)

