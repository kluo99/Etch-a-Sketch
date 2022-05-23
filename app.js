const gridContainer = document.querySelector('#container');


//creates a column of 16 squares
function createColumn(){
    for (let i = 0; i < 16; i++) {
        let column = document.createElement('div');
        column.className = "column";
        for (let j = 0; i < 16; i++){
            let box = document.createElement('div');
            document.querySelectorAll('box');
            box.className = "box";
            box.addEventListener("mouseover", function() {
                box.style.background = 'red';
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

createGrid();
