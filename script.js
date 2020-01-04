const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const sign1 = document.getElementById("sign1");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

var computersPlay = 0;
var playersPlay = 0;
var playerScore = 0;
var computerScore = 0;

function optionClick(id) {
    
    if (id === paper.id) {
        sign1.src="res/paper.png";
        playersPlay = 1;
        compPlay(playersPlay);
    } else if (id === rock.id) {
        sign1.src="res/rock.png";
        playersPlay = 2;
        compPlay(playersPlay);
    } else if (id === scissors.id) {
        sign1.src="res/scissors.png";
        playersPlay = 3;
        compPlay(playersPlay); 
    }
}

function compPlay(playersPlay) {
    const randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum === 1) {
        sign2.src="res/paper.png";
        computersPlay = 1;
        calculateScore(playersPlay, computersPlay);

    } else if (randomNum === 2) {
        sign2.src="res/rock.png";
        computersPlay = 2;
        calculateScore(playersPlay, computersPlay);

    } else if (randomNum === 3) {
        sign2.src="res/scissors.png";
        computersPlay = 3;
        calculateScore(playersPlay, computersPlay);

    }

    function calculateScore(playersPlay, computersPlay) {

        if(playersPlay === 1 && computersPlay === 2) {
            addPointToPlayer();

        } else if (playersPlay === 2 && computersPlay === 3) {
            addPointToPlayer();

        } else if (playersPlay === 2 && computersPlay === 1) {
            addPointToComputer();

        } else if (playersPlay === 3 && computersPlay === 2) {
            addPointToComputer();

        } else if (playersPlay === 1 && computersPlay === 3) {
            addPointToComputer();

        } else if (playersPlay === 3 && computersPlay === 1) {
            addPointToPlayer();
        }

        if (playerScore === 5) {
            resetScores();
            alert("You Won!")
        }

        if (computerScore === 5) {
            resetScores();
            alert("Computer Won!")
        }

        function resetScores() {
            playerScore = 0;
            computerScore = 0;
            playerScoreDisplay.innerText = playerScore;
            computerScoreDisplay.innerText = computerScore;
        }

        function addPointToPlayer() {
            playerScore += 1;
            playerScoreDisplay.innerText = playerScore;
        }

        function addPointToComputer() {
            computerScore += 1;
            computerScoreDisplay.innerText = computerScore;
        }
    }
}
