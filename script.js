//DOM elements
const boardDiv = document.querySelector(".drawBoard");
const slider = document.getElementById("boardSize");
const boardSize = document.getElementById("sizeValue");

// Initialize board
createBoard(16);
setupSlider();

function createBoard(sizeValue) {
    // Remove all rows of squares
    const rows = document.querySelectorAll(".board-row");
    rows.forEach((row) => {
        boardDiv.removeChild(row);
    });

    for (i = 0; i  < sizeValue; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("board-row");
        boardDiv.appendChild(boardRow);

        for (j = 0; j < sizeValue; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            boardRow.appendChild(square);
        }

    }
    addPaintListener();
}

//Get value from range slider
function setupSlider () {
    slider.addEventListener("input", () => {
        boardSize.textContent = `${slider.value} x ${slider.value}`;
    });
}

//Reload button listening and function
const reloadButton = document.querySelector(".reloadButton");
reloadButton.addEventListener("click", reloadBoard);

function reloadBoard () {
    createBoard(Number(slider.value));
}

//Hover on squared listening and coloring
function addPaintListener () {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

//Clear Button listener and function
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
    clearBoard();
});

function clearBoard() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = 'antiquewhite';
    });
}

//Generate random color
function getRandomColor () {
    let letters = '0123456789ABCDEF'
    let color ='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}