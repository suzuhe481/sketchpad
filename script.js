// Gets the sketchpad container.
const sketchContainer = document.getElementById("sketch-container");

// Length of a side
let sizeInput = 5;

// Sets the size of the container so the border doesn't overflow.
// Also set as if each pixel is 20x20.
// sketchContainer.style.width = sizeInput*100 + "px";
sketchContainer.style.width = "1000px";
sketchContainer.style.height = "1000px";

createSketchCanvas();


// Creates the sketch area.
function createSketchCanvas() {
    let prevSketchCanvas = document.getElementById("sketch-canvas");
    
    // Deltes previous sketch canvas if it exists.
    if (prevSketchCanvas != null) {
        prevSketchCanvas.remove();
    }

    const sketchCanvas = document.createElement("div");
    sketchCanvas.id = "sketch-canvas";

    console.log(`${4*sizeInput}`);

    // Sets the sketch area to a grid and makes the number of rows 
    // and columns according to the users input.
    // Rows/columns are currently 100x100 pixels each.
    sketchCanvas.style = `display: grid;
                        grid-template-columns: repeat(${sizeInput}, ${1000/sizeInput}px);
                        grid-template-rows: repeat(${sizeInput}, ${1000/sizeInput}px);
                        `;

    sketchContainer.appendChild(sketchCanvas);

    // Creates the drawable divs.
    for (let i = 0; i < (Math.pow(sizeInput, 2)); i++) {
        const singleSquare = document.createElement("div");
        singleSquare.className = "single-block";
        sketchCanvas.appendChild(singleSquare);
    }

    // Event listener. When mouse leaves a square, square turns black.
    const allSquares = document.querySelectorAll(".single-block");
    allSquares.forEach(square => square.addEventListener("mouseenter", function() {
        square.style = "background-color: black";
    }));
}


// Clears board.
function clearBoard() {
    const allSquares = document.querySelectorAll(".single-block");
    allSquares.forEach(square => square.style = "background-color: white");
}


// Changes the drawing size of the pencil.
function resizePencil() {
    let sideLength = 0;
    sideLength = prompt("Input the length per side: ");

    
    if(sideLength == 0 || sideLength > 100) {
        alert("Number too large. Pick a number under 100.");
    }
    else {
        sizeInput = sideLength;
        clearBoard();
        createSketchCanvas();
    }
}