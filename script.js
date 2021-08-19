/*
    User notes go here...............
*/


// Create input bar for users to add the number of grid boxes
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const output = document.createElement('output');

form.setAttribute('style', `display: flex; flex-flow: column; align-items: center; font: 15px Style Script, cursive;`);

input.setAttribute('id', 'quantity');
input.setAttribute('type', 'range');
input.setAttribute('min', '1');
input.setAttribute('max', '100');
input.setAttribute('value', '50');
input.setAttribute('onchange', 'rangeValue.value=value');
input.setAttribute('style', 'width: 80px;');

label.setAttribute('for', 'quantity');
label.textContent = 'Set number :  ';

output.setAttribute('id', 'rangeValue');
output.textContent = '50';

form.append(label, input, output);



// Button Style
const buttonStyle = {
    'border': '0 black solid', 
    'border-radius': '2px', 
    'margin': '2px', 
    'width': '80px',
    'font': '15px/20px Style Script, cursive'
}

// Black Squares Button
const button = document.createElement('button');
button.classList.add('.btn');
button.textContent = 'Black';
button.addEventListener('click', () => {
    basicHoverEffect();
});
Object.assign(button.style, buttonStyle);

// Random Colors Button
const random = document.createElement('button');
random.classList.add('btn');
random.textContent = 'Random';
random.addEventListener('click', () => {
    rainbowHoverEffect();
});
Object.assign(random.style, buttonStyle);

// Pride Pattern Button
const pride = document.createElement('button');
pride.classList.add('btn');
pride.textContent = 'Pride Pattern';
pride.addEventListener('click', () => {
    pridePattern();
});
Object.assign(pride.style, buttonStyle);

/*

// Shading Button
const shade = document.createElement('button');
shade.classList.add('btn');
shade.textContent = 'Shade';
shade.addEventListener('click', () => {
    shading();
});
Object.assign(shade.style, buttonStyle);

// Lighten Button
const lighten = document.createElement('button');
lighten.classList.add('btn');
lighten.textContent = 'Rainbow Squares';
lighten.addEventListener('click', () => {

    
});
Object.assign(lighten.style, buttonStyle);

*/

// Eraser Button
const eraser = document.createElement('button');
eraser.classList.add('btn');
eraser.textContent = 'Eraser';
eraser.addEventListener('click', () => {
    removeBg();
});
Object.assign(eraser.style, buttonStyle);

// Clear Grid Button
const cleanSlate = document.createElement('button');
cleanSlate.classList.add('btn');
cleanSlate.textContent = 'Clear';
cleanSlate.addEventListener('click', () => {
    clear();
    createGrid();
});
Object.assign(cleanSlate.style, buttonStyle);

// User Selections Panel
const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');
inputContainer.setAttribute('style', `display: flex; flex-flow: column; justify-content: space-around; height: 200px; width: 100px;
                            align-items: center; background-color: #dedede; border-radius: 5px 0 0 5px;`);
inputContainer.append(form, button, random, pride, eraser, cleanSlate);


// Grid Attributes - Global.
let gridInfo = {    
    "display": "grid",
    "grid-template": "auto"/ "auto", 
    "height": "200px",
    "width": "251px",
    "border-radius": "5px 5px 5px 5px",
    "background-color": "rgb(233 243 245)"  
}

// Etch-a-Sketch Grid Panel
const container = document.querySelector('.container');
container.setAttribute('style', `display: flex; border: 2px inset grey; border-radius: 7px; justify-content: center; align-items: center;
                        width: 350px;`);
const gridDiv = document.createElement('div');
gridDiv.classList.add('grid')
Object.assign(gridDiv.style, gridInfo);
container.append(gridDiv);


// Etch-a-Sketch container
const outerContainer = document.createElement('div');
outerContainer.classList.add('outerContainer');
outerContainer.setAttribute('style', `display: flex; flex-flow: column; width: 350px; height: 200px; justify-content: center;
                            background-color: #ba301f; padding: 50px;`);
const title = document.createElement('h1');
title.textContent = 'Etch-A-Sketch';
title.setAttribute('style', 'margin:0; padding:0; align-self:center; font: 35px/30px Style Script, cursive;')
outerContainer.append(title);


// FUNCTIONS

function basicHoverEffect() {
    const boxes = document.querySelector('.grid').querySelectorAll('div');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color: rgb(21 25 25);');
        });
    });
}

function rainbowHoverEffect() {
    const boxes = document.querySelector('.grid').querySelectorAll('div');
    boxes.forEach(box => {
        let r = Math.floor(Math.random() *255);
        let g = Math.floor(Math.random() *255);
        let b = Math.floor(Math.random() *255);
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b});`);
        });
    });  
}

function pridePattern() {
    const pattern = ['rgb(230 59 23)', 'rgb(246 139 21)', 'rgb(254 233 4)', 'rgb(62 128 39)', 'rgb(46 121 255)', 'rgb(121 67 134)'];
    let color = 0;
    const boxes = document.querySelector('.grid').querySelectorAll('div');
    boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                box.setAttribute('style', `background-color: ${pattern[color]};`);
                color++;
                    if (color >= pattern.length) {
                        color = 0;
                    }
            });
        
    });
}

/*
function shading() {
    const boxes = document.querySelector('.grid').querySelectorAll('div');
    boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                addShade(box);
                console.log(box.getAttribute('style', `background`));
            });
    });
}

function addShade(item) {
    let boxColor = item.getAttribute('style', 'background-color').split(':')[1].split('rgb')[1].replace('(', '').replace(')', '').replace(';', '').split(' ');
    console.log(boxColor);
    let i = 0;
    boxColor.forEach(color => {
        //console.log(color);
        color = Math.floor(Number(color)*1.1);
        if (color <= 255){
        boxColor.splice(i, 1, color);
        //console.log(color);
        }
        i++;
    });
    //console.log(`rgb(${boxColor})`);
    this.css('background-color', boxColor);
}
*/


function createGrid() {
    // Assign user input to variable and create grid template string of autos 
    let userNumber = Number(input.value);
    let gridSize = 'auto '.repeat(userNumber);
   
    // Re-write grid info object
    gridInfo = {
        'display': 'grid',
        'grid-template': `${gridSize} / ${gridSize}`,
        'flex': 'wrap',
    }

    Object.assign(gridDiv.style, gridInfo);

    for (let i=0; i <= userNumber-1; i++) {
        for (let j=0; j <= userNumber-1; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('gridDiv');
            newDiv.setAttribute('style', 'background-color: rgb(233 243 245)');
            newDiv.classList.add(`${i}${j}`);
            newDiv.textContent = '';
            // Hides top and bottom right corner divs for the curved display.
            if (newDiv.className == `gridDiv 0${userNumber-1}`) {
                newDiv.setAttribute('style', 'background: transparent;');
            }
            if (newDiv.className == `gridDiv ${userNumber-1}${userNumber-1}`) {
                newDiv.setAttribute('style', 'background: transparent;');
            }

            gridDiv.append(newDiv);
        }

    }
    basicHoverEffect();
}

function clear() {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.lastChild);
    }
}

function removeBg() {
    const boxes = document.querySelector('.grid').querySelectorAll('div');
    boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                box.setAttribute('style', 'background-color: rgb(233 243 245);');
            });
    });
}


const body = document.querySelector('body');
body.insertBefore(outerContainer, container);
container.insertBefore(inputContainer, gridDiv);
outerContainer.append(container);
body.append(outerContainer);

createGrid();
