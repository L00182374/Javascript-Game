let docStartButton;
let docBoard;

window.onload = function() 
{
    docStartButton = document.getElementById("startButton");
    docBoard = document.getElementById("board");
    docStartButton.onclick = startGame;
    docStartButton.disabled = false; // Enable the button on page load
   
    
}

function startGame() 
{
    docStartButton.disabled = true; // Disable the button after it's clicked
    docStartButton.style.backgroundColor = "gray"; // Change button color to gray

    drawBoard(); // Call the function to draw the board
    drawPieces(); // Call the function to draw the pieces
}

function drawBoard()
{
    docBoard.innerHTML = ""; // Clear the board

    for (let row = 0; row < 8; row++) 
    {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        docBoard.appendChild(rowDiv);

        for (let col = 0; col < 8; col++) 
        {
            const cellDiv = document.createElement("div");
            cellDiv.className = "column";
            if ((row + col) % 2 == 0) 
            {
                cellDiv.classList.add("whiteCell");
            } 
            
            else 
            {
                cellDiv.classList.add("blackCell");
            }
            rowDiv.appendChild(cellDiv);
        }
    }
}

function drawPieces()
{
    const pieces = [
        { color: "black", row: 0, col: 1 },
        { color: "black", row: 0, col: 3 },
        { color: "black", row: 0, col: 5 },
        { color: "black", row: 0, col: 7 },
        { color: "black", row: 1, col: 0 },
        { color: "black", row: 1, col: 2 },
        { color: "black", row: 1, col: 4 },
        { color: "black", row: 1, col: 6 },
        { color: "black", row: 2, col: 1 },
        { color: "black", row: 2, col: 3 },
        { color: "black", row: 2, col: 5 },
        { color: "black", row: 2, col: 7 },
        { color: "white", row: 5, col: 0 },
        { color: "white", row: 5, col: 2 },
        { color: "white", row: 5, col: 4 },
        { color: "white", row: 5, col: 6 },
        { color: "white", row: 6, col: 1 },
        { color: "white", row: 6, col: 3 },
        { color: "white", row: 6, col: 5 },
        { color: "white", row: 6, col: 7 },
        { color: "white", row :7, col :0 },
        {color:  "white", row :7, col :2 },
    ];

    pieces.forEach(piece => {
        const pieceDiv = document.createElement("div");
        pieceDiv.className = `piece ${piece.color}`;
        pieceDiv.style.gridRowStart = piece.row + 1; // Adjust for CSS grid
        pieceDiv.style.gridColumnStart = piece.col + 1; // Adjust for CSS grid
        docBoard.appendChild(pieceDiv);
    });
}