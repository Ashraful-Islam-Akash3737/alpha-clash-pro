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
        continueGame();
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