/**
 * To display the game status
 */
const gameStatus = document.querySelector('#status');

/**
 * To check the game progress
 */
let gameIsActive = true;

/**
 * Player Variable
 */
let currentPlayer = 'DikDns';

/**
 * To store game state data here
 */
let gameState = ["","","","","","","","",""];


/**
 * Status Messages Functions
 */
const winStatus = () => '<div class="status-messages" id="win"><p>Player ' + currentPlayer + ' Win!</p></div>';
const drawStatus = () => '<div class="status-messages" id="draw"><p>Draw!</p></div>';
const currentPlayerTurn = () => '<div class="status-messages" id="current"><p>It\'s ' + currentPlayer + '\'s turn.</p></div>';


/**
 * Initial Messages
 */
gameStatus.innerHTML = currentPlayerTurn();


/**
 * main function list
 */
function handleCellPlayed() {
    
};

function handlePlayerChange() {
    
};

function handleResultValidation() {
    
};

function handleCellClicked() {

};

function handleRestartGame() {

};



/**
 * Select elements and Add event
 */
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClicked));
document.querySelector('#resetButton').addEventListener('click', handleRestartGame);