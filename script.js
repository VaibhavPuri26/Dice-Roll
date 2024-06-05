let player1Score = 0;
let player2Score = 0;

function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    console.log(`Rolling dice: dice1=${dice1}, dice2=${dice2}`);

    const dice1Image = document.getElementById('dice1');
    const dice2Image = document.getElementById('dice2');

    dice1Image.src = `images/dice${dice1}.png`;
    dice2Image.src = `images/dice${dice2}.png`;

    console.log(`Updated images: dice1=${dice1Image.src}, dice2=${dice2Image.src}`);

    player1Score += dice1;
    player2Score += dice2;

    document.getElementById('player1-score').innerText = `${document.getElementById('player1').value} Score: ${player1Score}`;
    document.getElementById('player2-score').innerText = `${document.getElementById('player2').value} Score: ${player2Score}`;

    // Determine the winner for the round
    if (dice1 > dice2) {
        document.getElementById('player1-winner').innerText = "Winner!";
        document.getElementById('player2-winner').innerText = "";
    } else if (dice2 > dice1) {
        document.getElementById('player2-winner').innerText = "Winner!";
        document.getElementById('player1-winner').innerText = "";
    } else {
        document.getElementById('player1-winner').innerText = "Tie!";
        document.getElementById('player2-winner').innerText = "Tie!";
    }
}

function resetScores() {
    player1Score = 0;
    player2Score = 0;

    document.getElementById('player1-score').innerText = `${document.getElementById('player1').value} Score: 0`;
    document.getElementById('player2-score').innerText = `${document.getElementById('player2').value} Score: 0`;
    
    document.getElementById('player1-winner').innerText = "";
    document.getElementById('player2-winner').innerText = "";
}

