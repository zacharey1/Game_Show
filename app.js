const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

const phrases = [
    'abracadabra',
    'lickety split',
    'strapped for cash',
    'reality check',
    'poetry in motion'
];

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randNum = Math.floor(Math.random() * arr.length);
    let randPhrase = arr[randNum];
    return randPhrase;
}

returnPhrase = getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    for ( let i = 0, i < returnPhrase.length, i++) {
        
    }
}

addPhraseToDisplay(returnPhrase);

// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
qwerty.addEvenetListener('click', e => {
    
});