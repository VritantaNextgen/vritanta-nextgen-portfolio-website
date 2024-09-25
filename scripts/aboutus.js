// Define the list of words to choose from
const words = [
    'JAVASCRIPT',
    'HTML',
    'CSS',
    'NODE',
    'REACT',
    'ANGULAR',
    'JQUERY',
    'VUE'
];

// Define the maximum number of incorrect guesses allowed
const maxWrongGuesses = 6;

let wordToGuess = '';
let guessedLetters = [];
let wrongGuesses = 0;
let imageCount = 1;

// Select random word from the list
function selectRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Initialize the game
function initializeGame() {
    wordToGuess = selectRandomWord();
    guessedLetters = Array(wordToGuess.length).fill('_');
    wrongGuesses = 0;

    // Update the word display
    updateWordDisplay();

    updateMeltingSnowmanGraphic();

    // Remove any previously generated buttons
    const lettersContainer = document.querySelector('.letters');
    while (lettersContainer.firstChild) {
        lettersContainer.removeChild(lettersContainer.firstChild);
    }

    // Generate the letter buttons
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const button = document.createElement('button');
        button.innerText = letter;
        button.addEventListener('click', function () {
            handleGuess(letter);
        });
        lettersContainer.appendChild(button);
    }

    // Clear any previous win/lose message
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';
}

// Update the word display
function updateWordDisplay() {
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = guessedLetters.join(' ');
}

// Handle a letter guess
function handleGuess(letter) {
    // Check if the letter is in the word
    let correctGuess = false;
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letter) {
            guessedLetters[i] = letter;
            correctGuess = true;
        }
    }

    // Update the word display
    updateWordDisplay();

    // Check if the user has won
    if (!guessedLetters.includes('_')) {
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'Congratulations! You won!';
        return;
    }

    // If the guess was incorrect, increment the wrong guesses count
    if (!correctGuess) {
        wrongGuesses++;
        updateMeltingSnowmanGraphic();
    }

    // Check if the user has lost
    if (wrongGuesses >= maxWrongGuesses) {
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'Sorry, you lost! The word was ' + wordToGuess;
    }
}

// Update the Melting Snowman graphic
function updateMeltingSnowmanGraphic() {
 const MeltingSnowmanContainer = document.querySelector('.MeltingSnowman');
    MeltingSnowmanContainer.style.backgroundImage = `url('MeltingSnowman-${imageCount}.png')`;
    imageCount++;
}

// Initialize the game
initializeGame();