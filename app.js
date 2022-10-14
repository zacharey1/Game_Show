const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const ul = document.querySelector('#phrase ul');
const heart = document.querySelectorAll('.tries img');
let missed = 0;

const phrases = [
    'abracadabra',
    'lickety split',
    'strapped for cash',
    'reality check',
    'the matrix'
];

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// return a random phrase from an array
function getRandomPhraseAsArray(array) {
    let randNum = array[Math.floor(Math.random() * array.length)];
    return randNum.split('');
}

// adds the letters of a string to the display
function addPhraseToDisplay(array) {
    // const ul = document.querySelector('#phrase ul');
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
        if (array[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

// check if a letter is in the phrase
const checkLetter = button => {
    const checkLetter = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
        if (checkLetter[i].textContent === button) {
            checkLetter[i].classList.add('show');
            match = button;
        }
    }
    return match;
}



//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        e.target.className = 'chosen';
        const checked = checkLetter(e.target.textContent);
        if (checked === null) {
            // const heart = document.querySelectorAll('.tries img');
            heart[missed].src = 'lostHeart.png';
            missed ++;
         }
    }
    checkWin();
});

// check if the game has been won or lost
const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const headline = document.querySelector('.title');
    if (letter.length === show.length) {
        overlay.classList.add('win');
        headline.textContent = 'You win!';
        overlay.style.display = 'flex';
        reset();
    } else if (missed > 4) {
        overlay.classList.add('lose');
        headline.textContent = 'You lose.';
        overlay.style.display = 'flex';
        reset();
    }
}

//reset the game
function reset() {
    missed = 0;
    ul.innerHTML = '';
    const resetPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(resetPhrase);
    const chosenBtn = document.querySelectorAll('button');
    for (let i = 0; i < chosenBtn.length; i++) {
        chosenBtn[i].classList.remove('chosen');
    }
    for (let i = 0; i < heart.length; i++) {
        heart[i].src = 'liveHeart.png';
    }
}