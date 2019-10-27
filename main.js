const rows = 25;
const columns = 25;
const leftInterval = 30;
const topInterval = 30;

var currentMove = null;
var lastId = 0;
var currentId = 0;

const randomColor = () => {
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return randomColor;
}

const createGrid = () => {
    document.addEventListener('keydown', function(e) {
        var code = e.which || e.keyCode;
        if (code == '38') {
            currentMove = "up" 
            move();
        }
        else if (code == '40') {
            currentMove = "down" 
            move();
        }
        else if (code == '37') {
            currentMove = "left" 
            move();
        }
        else if (code == '39') {
            currentMove = "right" 
            move();
        }
    })

    const container = document.querySelector(".container");
    var idCounter = 0;
    var top = 0;
    for (let i = 0; i < columns; i++) {
       
        for (let j = 0; j < rows; j++) {
            const box = document.createElement("div");
            box.id = idCounter
            idCounter++;
            box.style.left = leftInterval * j + "px"
            box.style.top = top + "px"
            box.classList.add('box');
            
            box.addEventListener("mouseover", function () {
               addEffectOnElement(box);
            })

            box.addEventListener("mouseout", function () {
               RemoveEffectOnElement(box);
            })

            container.appendChild(box);
        }
        top += topInterval;
    }
}

const move = () => {

    lastId = currentId;

    switch(currentMove) {
        case "up":
            if(currentId - columns < 0) {
                currentId = currentId + 600;
            } else {
                currentId -= columns;
            }
            break;
        case "down":
            if(currentId + columns > rows * columns - 1) {
                currentId = currentId - 600;
            } else {
                currentId += columns;
            }
            break;
        case "left":
            if(currentId - 1 < 0) {
                currentId =  currentId + rows - 1;
            } else {
                currentId -= 1;
            }
            break;
        case "right":
            currentId += 1; 
            break;
        default:
            break;
      }

    var box = document.getElementById(currentId);
    var lastbox = document.getElementById(lastId);
    RemoveEffectOnElement(lastbox);
    addEffectOnElement(box);
}

const addEffectOnElement = (box) => {
    let color = randomColor();
    box.style.transition = "";
    box.style.backgroundColor = color;
    box.style.boxShadow = "0 0 5px 2px " + color
}

const RemoveEffectOnElement = (box) => {
    box.style.backgroundColor = "rgb(29, 29, 29)";
    box.style.transition = "background-color 0s 0s, 1.5s ease-out"
    box.style.boxShadow = "none"
}
var colorArray = [
    '#08c1ff', // lightblue
    '#ff08f7', // pink
    '#ff0808', // red
    '#ff6b08', //orange
    '#ffe208', //yellow
    '#56ff08', //green
];


