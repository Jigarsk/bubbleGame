var score = 0;
var timer = 60;
var hitVal;

function makeBubble() {
    var clutter = "";
    for (var i = 0; i <= 167; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector(".container").innerHTML = clutter;
}

function runTimer() {
    var timerElement = document.querySelector("#timervalue");
    var interval = setInterval(function () {
        if (timer > 0) {
            timer = timer - 1;
            timerElement.innerHTML = timer;
        } else {
            clearInterval(interval);
            resetGame();
        }
    }, 1000);
}

function increaseScore() {
    score += 10;
    document.getElementById("scorevalue").textContent = score;
}

function newHit() {
    hitVal = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = hitVal;
}
var score = 0;
var highScore = 0;
var timer = 60;
var hitVal;
var timerInterval;

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
    }
    localStorage.setItem('highScore', highScore);
}

function getHighScore() {
    var storedHighScore = localStorage.getItem('highScore');
    return storedHighScore ? parseInt(storedHighScore) : 0;
}

function resetGame() {
    clearInterval(timerInterval);
    updateHighScore();
    
    var resetScreenHTML = `
    <div style="text-align: center; padding: 20px;">
        <h1 style="margin-bottom: 20px;">Game Over!</h1>
        <p style="margin-bottom: 20px;">Jitna hath udhar chalta hai itna idhar bhi chala leta 🙂.</p>
        <h2 style="margin-bottom: 10px;">Your Score: ${score}</h2>
        <h2 style="margin-bottom: 20px;">High Score: ${highScore}</h2>
        <div class="reset-timer"></div>
    </div>
`;
    document.querySelector(".container").innerHTML = resetScreenHTML;
    
    document.querySelector("#timervalue").textContent = 0;
    document.querySelector("#scorevalue").textContent = score;
    
    var resetTimercount = 5;
    var resetInterval = setInterval(function() {
        document.querySelector(".reset-timer").innerHTML = `<h3>Game will restart in ${resetTimercount} seconds</h3>`;
        if (resetTimercount > 0) {
            resetTimercount--;
        } else {
            clearInterval(resetInterval);
            startGame();
        }
    }, 1000);
}

function startGame() {
    score = 0;
    timer = 60;
    highScore = getHighScore();
    makeBubble();
    runTimer();
    newHit();
    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.querySelector("#scorevalue").textContent = score;
}

function increaseScore() {
    score += 10;
    updateScoreDisplay();
}

// Other functions (makeBubble, runTimer, newHit) remain the same

document.querySelector(".container").addEventListener("click", function(details) {
    if (details.target.classList.contains("bubble")) {
        var targettedNum = Number(details.target.textContent);
        if (targettedNum === hitVal) {
            increaseScore();
            makeBubble();
            newHit();
        } else {
            resetGame();
        }
    }
});

// Initial game start
startGame();