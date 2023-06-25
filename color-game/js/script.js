let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor = "";

squares.forEach(function(square){
    square.addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "¡Correcto!";
            colorDisplay.style.color = pickedColor;
            changeColors(pickedColor);
            reset.textContent = "Jugar otra vez";
        }
        else {
            this.style.backgroundColor = document.body.style.backgroundColor;
            message.textContent ="Inténtalo nuevamente!";
        }
    });
});

reset.addEventListener("click", function() {
    startGame();
});

easyButton.addEventListener("click", function() {
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    startGame();
});

hardButton.addEventListener("click", function() {
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    startGame();
});

startGame();

function startGame() {
    let difficulty = getDifficulty();
    colors = generateRandomColors(difficulty);
    pickedColor = pickColor();

    for (let i = 0; i < squares.length; i++) {
        if (i < difficulty) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    }

    message.textContent = "";
    reset.textContent = "Nuevos colores";
}

function getDifficulty() {
    if (easyButton.classList.contains("selected"))
        return 3;
    return 6;
}

function changeColors(color) {
    squares.forEach(function(square){
        square.style.backgroundColor = color;
    })
}

function random(len) {
    return Math.floor(Math.random() * len);
}

function pickColor() {
    let randomIndex = random(colors.length);
    return colors[randomIndex];
}

function randomColor() {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateRandomColors(len) {
    let colors = [];
    for (var i = 0; i < len; i++) {
        colors.push(randomColor());
    }
    return colors;
}