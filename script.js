// Gets the sketchpad container.
const sketchContainer = document.getElementById("sketch-container");

// Default length of a side.
let sizeInput = 64;

// Delfaul pencil color.
let colorInput = "black";

// Sets the size of the container sat 1000 by 1000 pixels.
sketchContainer.style.width = "1000px";
sketchContainer.style.height = "1000px";

createSketchCanvas();

changePencilColor();


// Creates the sketch area.
function createSketchCanvas() {
    let prevSketchCanvas = document.getElementById("sketch-canvas");
    
    // Deltes previous sketch canvas if it exists.
    if (prevSketchCanvas != null) {
        prevSketchCanvas.remove();
    }

    const sketchCanvas = document.createElement("div");
    sketchCanvas.id = "sketch-canvas";

    // Sets the sketch area to a grid and makes the number of rows 
    // and columns according to the users input.
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


    // Event listener. When mouse leaves a square, square turns to the selected color.
    const allSquares = document.querySelectorAll(".single-block");
    allSquares.forEach(square => square.addEventListener("mouseenter", function() {
        square.style = `background-color:${colorInput}`;
    }));


    // changePencilColor();
}


// Clears board.
function clearBoard() {
    const allSquares = document.querySelectorAll(".single-block");
    allSquares.forEach(square => square.style = "background-color: white");
}


// Changes the drawing size of the pencil.
function resizePencil() {
    let sideLength;
    sideLength = prompt("Input the length per side: ");


    
    if(sideLength > 100) {
        alert("Number too large. Pick a number under 100.");
    }
    else if (sideLength == null || sideLength == 0) {
        console.log("null length");
        return;
    }
    else {
        sizeInput = sideLength;
        clearBoard();
        createSketchCanvas();
        changePencilColor();
    }
}

// Changes pencil color.
function changePencilColor() {
    let colorElement = document.getElementById("pencil-color");

    colorInput = colorElement.value;
}