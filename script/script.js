/**
 * Select every cell
 */
let cells = document.querySelectorAll('.cell');



/**
 * Select Button
 */
let resetButton = document.querySelector('#resetButton');



/**
 * To display the game status
 */
const gameStatus = document.querySelector('#status');



/**
 * To check the game progress
 */
let gameIsActive = true;



/**
 * Important Variable
 */
let currentPlayer = 'X';
let computerTurn = false;



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
 * Computer Functions
 */
function computer () {
    let emptyIndexCells = [];
    //* Looping to insert the index of the empty cells
    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] !== '') {
            //* Skip the already inserted cell to the next iteration 
            continue;
        } else {
            //* Insert the empty cell to the new variable
            emptyIndexCells.push(cells[i].getAttribute('data-cell-index'));
        }
    } 
    console.log(emptyIndexCells)
    
    //! Generate appropriate random numbers between 0 and emptyIndexCells length
    const randomNum = parseInt(Math.random() * emptyIndexCells.length);
    let computerChoose;

    console.log('comp pick index num: ' + randomNum);

    //* Looping to match the randomNum and the emptyIndexCells index
    for (let i = 0; i < emptyIndexCells.length ; i++) {
        if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        } else if (i === randomNum){
            computerChoose = emptyIndexCells[i];
            break;
        }
    }
    console.log("comp pick cell " + computerChoose);
    console.log(cells[computerChoose]);
    handleCellClicked(cells[computerChoose]);
};

function handleComputerTurn () {
    if (computerTurn){
        computer();
        computerTurn = false;
        console.log(computerTurn);
    }
};



/**
 * main function list
 */
function handleCellPlayed(clickedCell, clickedCellIndex) {
    //* Update the internal state and UI state
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
};

function handlePlayerChange() {
    //* Swap the turn using ternary operator awesome!
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    computerTurn = computerTurn === true ? false : true;
    gameStatus.innerHTML = currentPlayerTurn();
    console.log(computerTurn);
    setTimeout(handleComputerTurn(), '1000');
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
    const clickedCell = clickedCellEvent.target || clickedCellEvent;
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
    cells.forEach(cell => cell.innerHTML = '');
};



/**
 * Select elements and Add event
 */
cells.forEach(cell => cell.addEventListener('click', handleCellClicked));
resetButton.addEventListener('click', handleRestartGame);