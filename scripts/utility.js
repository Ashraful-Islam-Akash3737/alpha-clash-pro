function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#ffa500]');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#ffa500]');
}

function getTextElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet(){
    //1: get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // 2: get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    //3: find a random alphabet
    const alphabet = alphabets[index];
    // console.log(alphabet);
    return alphabet;
}