const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const computer = document.getElementById('computer');
const whoWon = document.getElementById('winner');

 function rockGame() {
    if ('click') {
        let img = document.createElement('img');
        img.src = './img/rock.png';
        document.body.appendChild(img);
    }
}

function paperGame() {
    if ('click') {
        let img = document.createElement('img');
        img.src = './img/paper.png';
        document.body.appendChild(img);
    }
}

function scissorGame() {
    if ('click') {
        let img = document.createElement('img');
        img.src = './img/scissors.png';
        document.body.appendChild(img);
    }
}



function computerGame() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return rockGame();
        case 1:
            return paperGame();
        case 2:
            return scissorGame();
    }

}

function determineWinner() {
     if ( rock === 'click' && randomNumber === 0) {
        whoWon.value = 'Its a tie';
    }
}

