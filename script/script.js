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
let currentPlayer = 'X';



/**
 * To store game state data here
 */
let gameState = ["","","","","","","","",""];



/**
 * Winning Condition Array
 */
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



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
function handleCellPlayed(clickedCell, clickedCellIndex) {
    //* Update the internal state and UI state
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    console.log(gameState);
};

function handlePlayerChange() {
    //* Swap the turn using ternary operator awesome!
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.innerHTML = currentPlayerTurn();
};

function handleResultValidation() {
    //* Set won boolean
    let roundWon = false;

    //* Iterate into all the winningConditions Array
    for (let i = 0; i <= 7; i++){
        //* Get the wincondition sub array
        const winCondition = winningConditions[i];
        //* Put the wincondition coordinate into the gameState array number
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        
        //* Skip the loop if one of the cell is not the correct combinations
        if (a === '' || b === '' || c === '') {
            continue;
        }

        //* Break the loop if the cell is correct combination and change the won boolean value
        if (a === b && b === c){
            roundWon = true;
            break;
        }
    }

    //* If the winner in this round
    if (roundWon){
        gameStatus.innerHTML = winStatus();
        gameIsActive = false;
        return;
    }

    //* If this round tie
    if (!gameState.includes("")){
        gameStatus.innerHTML = drawStatus();
        gameIsActive= false;
        return;
    }

    //* Change Turn
    handlePlayerChange();
};

function handleCellClicked(clickedCellEvent) {
    //* Select the clicked cell
    const clickedCell = clickedCellEvent.target;
    //* Select the data-cell-index
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    //* Check if the cell is already clicked or game paused
    if (gameState[clickedCellIndex] !== "" || !gameIsActive) {
        return;
    }


    //* Continue to the next step function
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
};

function handleRestartGame() {
    //* Overwrite the global variable
    gameIsActive = true;
    currentPlayer = 'X';
    gameStatus.innerHTML = currentPlayerTurn();
    gameState = ["","","","","","","","",""];

    //* Change the cell condition to normal 
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
};



/**
 * Computer Functions
 */
function handleComputerTurn () {

};

function computer () {

};



/**
 * Select elements and Add event
 */
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClicked));
document.querySelector('#resetButton').addEventListener('click', handleRestartGame);