const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

const phrases = [
    'abracadabra',
    'lickety split',
    'strapped for cash',
    'reality check',
    'the matrix'
];

// return a random phrase from an array
function getRandomPhraseAsArray(array) {
    let randNum = Math.floor(Math.random() * array.length);
    let randPhrase = array[randNum];
    return randPhrase;
}

console.log(getRandomPhraseAsArray(phrases));

// adds the letters of a string to the display
function addPhraseToDisplay(array) {
    const ul = document.querySelector('#phrase ul');
    for (let i = 0, i < array.length, i++) {
        const li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
        if (array[i] !== '') {
            li.className = ('letter');
        } else {
            li.className = ('space');
        }
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