/* QUICK NOTES
    Grid must be a square nummber of user input
    Auto-grid used for both row/column in grid-template

*/

// Create input bar for users to add the number of grid boxes
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const output = document.createElement('output');
input.setAttribute('id', 'quantity');
input.setAttribute('type', 'range');
input.setAttribute('min', '1');
input.setAttribute('max', '100');
input.setAttribute('value', '1');
input.setAttribute('onchange', 'rangeValue.value=value');
label.setAttribute('for', 'quantity');
label.textContent = 'Set number :  ';
output.setAttribute('id', 'rangeValue');
output.textContent = '1';
form.append(label, output, input);



// Create user input div and button, also add eventLiserner to button
// Button will create the grid object
const button = document.createElement('button');
button.classList.add('.btn');
button.textContent = 'Create Grid'
button.addEventListener('click', () => {
    // Remove all childNodes of grid before creating new grid
    clear();
    
    // Assign user input to variable and create grid template string of autos 
    let userNumber = Number(input.value);
    let gridSize = 'auto '.repeat(userNumber);
   
    // Re-write grid info object
    gridInfo = {
        'display': 'grid',
        'grid-template': `${gridSize} / ${gridSize}`,
        'flex': 'wrap'
    }

    Object.assign(gridDiv.style, gridInfo);

    for (let i=0; i <= userNumber-1; i++) {
        for (let j=0; j <= userNumber-1; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('gridDiv');
            newDiv.setAttribute('style', 'background-color: yellow');
            newDiv.textContent = '';
            gridDiv.append(newDiv);
        }
    }

    createHoverEffect();
    
});

// Create divs from user input and append to grid at end of script
const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');
inputContainer.setAttribute('style', 'display: flex; justify-content: space-between; ;width: 500px; background-color: blue;');
inputContainer.append(form, button);


// Create Grid Area info as global variable
// retrieve main div box and create grid div to build etch-a-sketch.
let gridInfo = {    
    "display": "grid",
    "grid-template": "auto"/ "auto", 
    "height": "inherit",
    "width": "inherit",
    "gap": "1px"
}

const container = document.querySelector('.container');
const gridDiv = document.createElement('div');
gridDiv.classList.add('grid')
Object.assign(gridDiv.style, gridInfo);
container.append(gridDiv);


// Create hover effect using onMouseOver event (bind to each div in grid)
function basicHoverEffect() {
const boxes = document.querySelector('.grid').querySelectorAll('div');
//var x = document.getElementById("myDIV").querySelectorAll(".example"); 
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.setAttribute('style', 'background-color: black;');
    });
});

// Create onMouseLeave event to rever the colour back to origina state
boxes.forEach(box => {
    box.addEventListener('mouseout', () => {
        box.setAttribute('style', 'background-color: white;');
    });
});
}

function RainbowHoverEffect() {

    const boxes = document.querySelector('.grid').querySelectorAll('div');
    //var x = document.getElementById("myDIV").querySelectorAll(".example"); 
    boxes.forEach(box => {
        let r = Math.floor(Math.random() *255);
        let g = Math.floor(Math.random() *255);
        let b = Math.floor(Math.random() *255);
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', `background-color: ${r}${g}${b};`);
        });
    });
    
    // Create onMouseLeave event to rever the colour back to origina state
    boxes.forEach(box => {
        box.addEventListener('mouseout', () => {
            box.setAttribute('style', 'background-color: white;');
        });
    });
    
    }

function clear() {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.lastChild);
    }
}

const body = document.querySelector('body');

body.insertBefore(inputContainer, container);


