function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}

function handleKeyBoardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log(playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // checked match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you win');
        // update score
        // 1:get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // 2: increase the score by 1
        const newScore = currentScore + 1;
        console.log(newScore);
        // 3:show the updated score 
        currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // 1:get the life count
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2:reduce the life count
        const newLife = currentLife - 1;
        // 3: update the life count
        currentLifeElement.innerText = newLife;
        alert('Please, press the right key...');
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