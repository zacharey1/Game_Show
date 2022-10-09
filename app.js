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
const randomPhrase = getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
function addPhraseToDisplay(array) {
    const ul = document.querySelector('#phrase ul');
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
        if (array[i] !== '') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

addPhraseToDisplay(randomPhrase);

// check if a letter is in the phrase
const checkLetter = button => {
    const checkLetter = document.querySelector('li');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
        if (checkLetter[i].textContent === button.textContent) {
            li.className = 'show';
            let match = button.textContent;
        }
    }
    return match;
}

// check if the game has been won or lost
const checkWin = () => {
    const letter = document.querySelector('.letter');
    const show = document.querySelector('.show');
    const overlay = document.querySelector('#overlay');
    const headline = document.querySelector('.title');
    if (letter.length === show.length) {
        overlay.className = 'win';
        headline.textContent = 'You win!';
        overlay.style.display = 'flex';
    } else if (missed > 4) {
        overlay.className = 'lose';
        headline.textContent = 'You lose.';
        overlay.style.display = 'flex';
    }
}

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
qwerty.addEvenetListener('click', e => {
    if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        e.target.className = 'chosen';
        const checked = checkLetter();
        if (checked === null) {
            const heart = document.querySelector('.tries');
            const scoreBoard = document.querySelector('.scoreboard ol');
            heart.removeChild(scoreboard.firstChild);
            missed ++;
        }
    }
});