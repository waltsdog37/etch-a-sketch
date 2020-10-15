function createColumn(size) {
    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        document.getElementById("grid-container").appendChild(newDiv);

    };
};

function drawing() {
    let draw = document.getElementById("grid-container");
    draw.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "black";
    });
};

function setGrid() {
    let size = prompt("Choose a new grid size");
    while (size > 100) {
        size = prompt("Please choose a number between 1 and 100");
    };
    let clearGrid = document.getElementById("grid-container");
    clearGrid.remove();
    let newGrid = document.createElement("div")
    newGrid.id = "grid-container";
    document.getElementById("main-container").appendChild(newGrid);

    createColumn(size * size);
};

createColumn(256);
drawing();