let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameEnded = false;

function makeMove(index) {
    if (board[index] || gameEnded) return;

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    document.getElementsByClassName('cell')[index].classList.add(currentPlayer);

    if (checkWinner()) {
        document.getElementById('status').innerText = currentPlayer + " wins!";
        gameEnded = true;
    } else if (board.every(cell => cell)) {
        document.getElementById('status').innerText = "It's a draw!";
        gameEnded = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').innerText = currentPlayer + "'s turn";
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (board[combination[0]] && board[combination[0]] === board[combination[1]] && board[combination[0]] === board[combination[2]]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameEnded = false;
    document.getElementById('status').innerText = currentPlayer + "'s turn";
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].classList.remove('X', 'O');
    }
}

resetGame();
