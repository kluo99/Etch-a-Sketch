const gridContainer = document.querySelector('#container');


// creates a column of 16 squares
function createRow(){
    for (let i = 0; i < 16; i++) {
        const column = document.createElement('div');
        column.className = "column";
        for (let j = 0; i < 16; i++){
            const box = document.createElement('div');
            box.className = "box";
            column.appendChild(box);
        }
        gridContainer.appendChild(column);
    }
}


//gridContainer.setAttribute('style', 'display: flex; align-items: center; justify-content: center;flex-direction: row');
function createGrid(){
    for (let i = 0; i < 16; i++) {
        createRow();
    }
}


createGrid();



