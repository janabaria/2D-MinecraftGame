let selectedTool = '', selectedElement = null;
let grassCnt = document.querySelector("#grassCount");
let dirtCnt = document.querySelector("#dirtCount");
let rockCnt = document.querySelector("#rockCount");
let woodCnt = document.querySelector("#woodCount");
let leavesCnt = document.querySelector("#leavesCount");
let clickable = document.querySelectorAll(".clickable");

let  dirtCounter = grassCounter =  leavesCounter = woodCounter = rockCounter = 0; 
const Pickaxe = document.querySelector(".Pickaxe");
const Axe = document.querySelector(".Axe");
const Shovel = document.querySelector(".Shovel");
const grid = document.getElementById("grid");

function itemClick() {
   const currentBlockTree = this.classList[1];
   const currentBlockType = [...this.classList].find(c =>
    ['grass','dirt','rock','sky'].includes(c)
);

   
    if (selectedTool === 'Pickaxe' && currentBlockType === 'rock') {
        rockCounter++;
        rockCnt.textContent = rockCounter;
        updateclass(this, 'rock', 'sky');
    } 
    else if (selectedTool === 'Axe') {
        if (currentBlockTree === 'wood') {
            woodCounter++;
            woodCnt.textContent = woodCounter;
            updateclass(this, 'wood', 'sky');
        } else if (currentBlockTree === 'leaves') {
            leavesCounter++;
            leavesCnt.textContent = leavesCounter;
            updateclass(this, 'leaves', 'sky');
        }
    } 
    else if (selectedTool === 'Shovel') {
        if (currentBlockType === 'dirt') {
            dirtCounter++;
            dirtCnt.textContent = dirtCounter;
            updateclass(this, 'dirt', 'sky');
        } else if (currentBlockType === 'grass') {
            grassCounter++;
            grassCnt.textContent = grassCounter;
            updateclass(this, 'grass', 'sky');
        }
    }
   
    if (selectedElement && currentBlockType === 'sky') {
      const typeToPlace = selectedElement.classList[1];

        
        if (typeToPlace === 'dirt' && dirtCounter > 0) {
            dirtCounter--;
            dirtCnt.textContent = dirtCounter;
            updateclass(this, 'sky', 'dirt');
        } else if (typeToPlace === 'grass' && grassCounter > 0) {
            grassCounter--;
            grassCnt.textContent = grassCounter;
            updateclass(this, 'sky', 'grass');
        } else if (typeToPlace === 'wood' && woodCounter > 0) {
            woodCounter--;
            woodCnt.textContent = woodCounter;
            updateclass(this, 'sky', 'wood');
        } else if (typeToPlace === 'leaves' && leavesCounter > 0) {
            leavesCounter--;
            leavesCnt.textContent = leavesCounter;
            updateclass(this, 'sky', 'leaves');
        } else if (typeToPlace === 'rock' && rockCounter > 0) {
            rockCounter--;
            rockCnt.textContent = rockCounter;
            updateclass(this, 'sky', 'rock');
        }
    }
}

clickable.forEach((element) => {
    element.addEventListener('click', () => {
        if (selectedElement) 
            selectedElement.classList.remove('selectedElement');
        
        element.classList.add('selectedElement');
        selectedElement = element;
        selectedTool = element.classList[1]; 
        console.log("Selected:", selectedTool);

    });
});



clickable.forEach((element) => {
    element.addEventListener('click', () => {
        if (selectedElement) 
            selectedElement.classList.remove('selectedElement');
        
        element.classList.add('selectedElement');
        selectedElement = element;
        selectedTool = element.classList[1]; 
        console.log("Selected:", selectedTool);

    });
});


function updateclass(obj, toRemove, toAdd) {
    obj.classList.remove('grass','dirt','rock','wood','leaves','sky');
    obj.classList.add(toAdd);
}



grid.addEventListener("click", function(e) {
    if (e.target && e.target !== grid) {
        itemClick.call(e.target);
    }
});