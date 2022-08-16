const gameBoard = document.querySelector('.game-board');

const gridPosition1 = document.querySelector('#grid-position1');
const gridPosition2 = document.querySelector('#grid-position2');
const gridPosition3 = document.querySelector('#grid-position3');
const gridPosition4 = document.querySelector('#grid-position4');
const gridPosition5 = document.querySelector('#grid-position5');
const gridPosition6 = document.querySelector('#grid-position6');
const gridPosition7 = document.querySelector('#grid-position7');
const gridPosition8 = document.querySelector('#grid-position8');
const gridPosition9 = document.querySelector('#grid-position9');

const gridInput1 = document.querySelector('#grid-input1');
const gridInput2 = document.querySelector('#grid-input2');
const gridInput3 = document.querySelector('#grid-input3');
const gridInput4 = document.querySelector('#grid-input4');
const gridInput5 = document.querySelector('#grid-input5');
const gridInput6 = document.querySelector('#grid-input6');
const gridInput7 = document.querySelector('#grid-input7');
const gridInput8 = document.querySelector('#grid-input8');
const gridInput9 = document.querySelector('#grid-input9');



const gridInputs = document.querySelectorAll('input');
let allGridInputs = Array.from(gridInputs);

function arrayRemove(arr, value){
    return arr.filter((e) => {return e != value});
};


function playerInput(){
    allGridInputs.forEach(
        (e) =>{
            e.addEventListener('click', ()=>{
                e.parentElement.innerHTML = 'X';
                allGridInputs = arrayRemove(allGridInputs, e);
                console.log(allGridInputs);
                computerInput();
            })
        }
    )
}

function computerInput(){
    // Step-by-Step Objectives
    // -Always play middle first if player does not
    // -Prevent easy horizontal wins
    // -Prevent easy vertical wins
    // -Play random

    //Play Middle
    if(gridPosition5.firstElementChild == gridInput5){
        allGridInputs = arrayRemove(allGridInputs, gridInput5);
        gridPosition5.innerHTML = 'O';
    }
    
    //Horizontal
    else if(gridPosition1.textContent == 'X' && gridPosition2.textContent == 'X' && gridPosition3.firstElementChild == gridInput3){
        allGridInputs = arrayRemove(allGridInputs, gridInput3);
        gridPosition3.innerHTML = 'O';
    }else if(gridPosition1.textContent == 'X' && gridPosition3.textContent == 'X' && gridPosition2.firstElementChild == gridInput2){
        allGridInputs = arrayRemove(allGridInputs, gridInput2);
        gridPosition2.innerHTML = 'O';
    }else if(gridPosition2.textContent == 'X' && gridPosition3.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else if(gridPosition4.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition6.firstElementChild == gridInput6){
        allGridInputs = arrayRemove(allGridInputs, gridInput6);
        gridPosition6.innerHTML = 'O';
    }else if(gridPosition4.textContent == 'X' && gridPosition6.textContent == 'X' && gridPosition5.firstElementChild == gridInput5){
        allGridInputs = arrayRemove(allGridInputs, gridInput5);
        gridPosition5.innerHTML = 'O';
    }else if(gridPosition5.textContent == 'X' && gridPosition6.textContent == 'X' && gridPosition4.firstElementChild == gridInput4){
        allGridInputs = arrayRemove(allGridInputs, gridInput4);
        gridPosition4.innerHTML = 'O';
    }else if(gridPosition7.textContent == 'X' && gridPosition8.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';
    }else if(gridPosition7.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition8.firstElementChild == gridInput8){
        allGridInputs = arrayRemove(allGridInputs, gridInput8);
        gridPosition8.innerHTML = 'O';
    }else if(gridPosition8.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }

    //Vertical
    else if(gridPosition1.textContent == 'X' && gridPosition4.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }else if(gridPosition1.textContent == 'X' && gridPosition7.textContent == 'X' && gridPosition4.firstElementChild == gridInput4){
        allGridInputs = arrayRemove(allGridInputs, gridInput4);
        gridPosition4.innerHTML = 'O';
    }

    //Diagonal
    else if(gridPosition1.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';        
    }else if(gridPosition9.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else{
        let compInputIndex = Math.floor(Math.random() * allGridInputs.length);
        let compInput = allGridInputs[compInputIndex];
        compInput.parentElement.innerHTML = 'O';
        allGridInputs = arrayRemove(allGridInputs, compInput);
        console.log(allGridInputs);
        console.log(compInput.type)
    }
}

playerInput();
