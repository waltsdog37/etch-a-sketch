function createColumn(size) {
    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        newDiv.style.width = 600 / size + "px";
        document.getElementById("grid-container").appendChild(newDiv);
        createRow(size, i);
    }
    drawing(color);
}

function createRow(size, i) {
    for (let j = 0; j < size; j++) {
        let newRow = document.createElement("div");
        newRow.classList.add("cell-row");
        newRow.style.height = 600 / size + "px";
        let columns = document.querySelectorAll(".column");
        columns[i].appendChild(newRow);
    }
}

function drawing(color) {
    let draw = document.getElementById("grid-container");
    draw.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = color;
    });
}

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
    createColumn(size);
    drawing(color);
}

let color = "black";
createColumn(10);