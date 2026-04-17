// when the start button is clicked, the landing page will be hidden and the game page will be shown
const startButton = document.getElementById('startGame');
startButton.addEventListener('click', function() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
});

let sky = document.querySelector(".sky");


// sky
for (let i = 1; i <= 100; i++) {
let div = document.createElement("div");
div.style.padding = "20px";
div.style.display = "flex";
div.classList.add("sky");
grid.appendChild(div);
}


// grass
for (let i = 1; i <= 20; i++) {
let div = document.createElement("div");
div.style.display = "flex";
div.classList.add("grass");
grid.appendChild(div);

}

// rock
for (let i = 1; i <= 20; i++) {
let div = document.createElement("div");
div.style.display = "flex";
div.classList.add("rock");
grid.appendChild(div);

}

// dirt
for (let i = 1; i <= 60; i++) {
let div = document.createElement("div");
div.style.display = "flex";
div.classList.add("dirt");
grid.appendChild(div);

}

// tree
const rows = 10;
const cols = 20;
const treeCol = 6; 

for (let row = 4; row <= 6; row++) {
    const index = row * cols + treeCol;
    grid.children[index].classList.add("wood");
}

const leaves = [
    [3, 5], [3, 6], [3, 7],[2, 6]
];

leaves.forEach(([row, col]) => {
    const index = row * cols + col;
    grid.children[index].classList.add("leaves");
});