function play() {
    // hide and show
    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset life and score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function handleKeyBoardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log(playerPressed);
    // stop the game if pressed 'Esc'
    if (playerPressed === "Escape") {
        gameOver();
        
    }


    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // checked match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you win');
        // update score
        // 1:get the current score
        const currentScore = getTextElementValueById('current-score');

        // 2: increase the score by 1
        const updatedScore = currentScore + 1;

        // 3:show the updated score 
        setTextElementValueById('current-score', updatedScore);


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // update score
        // 1:get the current score
        const currentLife = getTextElementValueById('current-life');

        // 2: decrease the score by 1
        const updatedLife = currentLife - 1;

        // 3:show the updated score 
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();

        }




        // ------------------------------------------------------------
        // // 1:get the life count
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2:reduce the life count
        // const newLife = currentLife - 1;
        // // 3: update the life count
        // currentLifeElement.innerText = newLife;
        // alert('Please, press the right key...');
        // ----------------------------------------------------------
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function continueGame() {
    // 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set random alphabet bg color
    setBackgroundColorById(alphabet);
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1:get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
