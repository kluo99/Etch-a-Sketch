let gridContainer = document.querySelector('#container');

//changes grid when you input a number
function changeGrid() {
    let answer = prompt("How many boxes do you want on each side for the new grid?");
    if (answer > 100) {
        alert("Limit is 100");
    }
    else if (isNaN(answer)) {
        alert("You must enter a number");
    }
    else {
        deleteGrid();
        createNewGrid(answer);
    }
}

//creates a column of 16 squares
function createColumn(){
    for (let i = 0; i < 16; i++) {
        let column = document.createElement('div');
        column.className = "column";
        for (let j = 0; i < 16; i++){
            let box = document.createElement('div');
            document.querySelectorAll('box');
            box.className = "box";

            //mouse over effect
            box.addEventListener("mouseover", function() {
                box.style.background = 'blue';
            })

            column.appendChild(box);
        }
        gridContainer.appendChild(column);
    }
}

// creates the grid
function createGrid(){
    for (let i = 0; i < 16; i++) {
        createColumn();
    }
}


function createNewColumn(answer) {
    for (let i = 0; i < answer; i++) {
        let column = document.createElement('div');
        column.className = "column";
        for (let j = 0; i < answer; i++){
            let box = document.createElement('div');
            document.querySelectorAll('box');
            box.className = "box";

            //mouse over effect
            box.addEventListener("mouseover", function() {
                box.style.background = 'blue';
            })

            column.appendChild(box);
        }
        gridContainer.appendChild(column);
    }
}

//creates a new grid depending on input from user
function createNewGrid(answer){
    for (let i = 0; i < answer; i++) {
        createNewColumn(answer);
    }
}

function deleteGrid() {
    let destroy = document.getElementById('container');
    while (destroy.hasChildNodes()) {
        destroy.removeChild(destroy.firstChild);
      }
}

createGrid();
