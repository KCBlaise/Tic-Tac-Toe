const restartButton = document.querySelector('.restart-btn');
restartButton.onclick = () =>{
    location.reload()
}


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
let gridPositions = document.getElementsByClassName('grid-position');
let allGridPositions = Array.from(gridPositions);

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
    checkWinner();
    allGridInputs.forEach(
        (e) =>{
            e.addEventListener('click', ()=>{
                e.parentElement.innerHTML = 'X';
                allGridInputs = arrayRemove(allGridInputs, e);
                // console.log(allGridInputs);
                computerInput();
            })
        }
    )
}

function computerInput(){
    checkWinner();
    // Step-by-Step Objectives
    // -Always play middle first if player does not
    // -Win where possible
    // -Prevent easy horizontal wins
    // -Prevent easy vertical wins
    // -Play random

    //Play Middle
    if(gridPosition5.firstElementChild == gridInput5){
        allGridInputs = arrayRemove(allGridInputs, gridInput5);
        gridPosition5.innerHTML = 'O';
    }

    //Try to win
    //Horizontal wins
    else if(gridPosition1.textContent == 'O' && gridPosition2.textContent == 'O' && gridPosition3.firstElementChild == gridInput3){
        allGridInputs = arrayRemove(allGridInputs, gridInput3);
        gridPosition3.innerHTML = 'O';
    }else if(gridPosition1.textContent == 'O' && gridPosition3.textContent == 'O' && gridPosition2.firstElementChild == gridInput2){
        allGridInputs = arrayRemove(allGridInputs, gridInput2);
        gridPosition2.innerHTML = 'O';
    }else if(gridPosition2.textContent == 'O' && gridPosition3.textContent == 'O' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else if(gridPosition4.textContent == 'O' && gridPosition5.textContent == 'O' && gridPosition6.firstElementChild == gridInput6){
        allGridInputs = arrayRemove(allGridInputs, gridInput6);
        gridPosition6.innerHTML = 'O';
    }else if(gridPosition4.textContent == 'O' && gridPosition6.textContent == 'O' && gridPosition5.firstElementChild == gridInput5){
        allGridInputs = arrayRemove(allGridInputs, gridInput5);
        gridPosition5.innerHTML = 'O';
    }else if(gridPosition5.textContent == 'O' && gridPosition6.textContent == 'O' && gridPosition4.firstElementChild == gridInput4){
        allGridInputs = arrayRemove(allGridInputs, gridInput4);
        gridPosition4.innerHTML = 'O';
    }else if(gridPosition7.textContent == 'O' && gridPosition8.textContent == 'O' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';
    }else if(gridPosition7.textContent == 'O' && gridPosition9.textContent == 'O' && gridPosition8.firstElementChild == gridInput8){
        allGridInputs = arrayRemove(allGridInputs, gridInput8);
        gridPosition8.innerHTML = 'O';
    }else if(gridPosition8.textContent == 'O' && gridPosition9.textContent == 'O' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }
    //Vertical wins
    else if(gridPosition1.textContent == 'O' && gridPosition4.textContent == 'O' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }else if(gridPosition1.textContent == 'O' && gridPosition7.textContent == 'O' && gridPosition4.firstElementChild == gridInput4){
        allGridInputs = arrayRemove(allGridInputs, gridInput4);
        gridPosition4.innerHTML = 'O';
    }else if(gridPosition4.textContent == 'O' && gridPosition7.textContent == 'O' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else if(gridPosition2.textContent == 'O' && gridPosition5.textContent == 'O' && gridPosition8.firstElementChild == gridInput8){
        allGridInputs = arrayRemove(allGridInputs, gridInput8);
        gridPosition8.innerHTML = 'O';
    }else if(gridPosition2.textContent == 'O' && gridPosition8.textContent == 'O' && gridPosition5.firstElementChild == gridInput5){
        allGridInputs = arrayRemove(allGridInputs, gridInput5);
        gridPosition5.innerHTML = 'O';
    }else if(gridPosition5.textContent == 'O' && gridPosition8.textContent == 'O' && gridPosition2.firstElementChild == gridInput2){
        allGridInputs = arrayRemove(allGridInputs, gridInput2);
        gridPosition2.innerHTML = 'O';
    }else if(gridPosition3.textContent == 'O' && gridPosition6.textContent == 'O' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';
    }else if(gridPosition3.textContent == 'O' && gridPosition9.textContent == 'O' && gridPosition6.firstElementChild == gridInput6){
        allGridInputs = arrayRemove(allGridInputs, gridInput6);
        gridPosition6.innerHTML = 'O';
    }else if(gridPosition6.textContent == 'O' && gridPosition9.textContent == 'O' && gridPosition3.firstElementChild == gridInput3){
        allGridInputs = arrayRemove(allGridInputs, gridInput3);
        gridPosition3.innerHTML = 'O';
    }
    //Diagonal wins
    else if(gridPosition1.textContent == 'O' && gridPosition5.textContent == 'O' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';        
    }else if(gridPosition9.textContent == 'O' && gridPosition5.textContent == 'O' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else if(gridPosition3.textContent == 'O' && gridPosition5.textContent == 'O' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }else if(gridPosition7.textContent == 'O' && gridPosition5.textContent == 'O' && gridPosition3.firstElementChild == gridInput3){
        allGridInputs = arrayRemove(allGridInputs, gridInput3);
        gridPosition3.innerHTML = 'O';
    }
    
    //Horizontal blocks
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

    //Vertical blocks
    else if(gridPosition1.textContent == 'X' && gridPosition4.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }else if(gridPosition1.textContent == 'X' && gridPosition7.textContent == 'X' && gridPosition4.firstElementChild == gridInput4){
        allGridInputs = arrayRemove(allGridInputs, gridInput4);
        gridPosition4.innerHTML = 'O';
    }else if(gridPosition4.textContent == 'X' && gridPosition7.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else if(gridPosition2.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition8.firstElementChild == gridInput8){
        allGridInputs = arrayRemove(allGridInputs, gridInput8);
        gridPosition8.innerHTML = 'O';
    }else if(gridPosition2.textContent == 'X' && gridPosition8.textContent == 'X' && gridPosition5.firstElementChild == gridInput5){
        allGridInputs = arrayRemove(allGridInputs, gridInput5);
        gridPosition5.innerHTML = 'O';
    }else if(gridPosition5.textContent == 'X' && gridPosition8.textContent == 'X' && gridPosition2.firstElementChild == gridInput2){
        allGridInputs = arrayRemove(allGridInputs, gridInput2);
        gridPosition2.innerHTML = 'O';
    }else if(gridPosition3.textContent == 'X' && gridPosition6.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';
    }else if(gridPosition3.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition6.firstElementChild == gridInput6){
        allGridInputs = arrayRemove(allGridInputs, gridInput6);
        gridPosition6.innerHTML = 'O';
    }else if(gridPosition6.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition3.firstElementChild == gridInput3){
        allGridInputs = arrayRemove(allGridInputs, gridInput3);
        gridPosition3.innerHTML = 'O';
    }

    //Diagonal blocks
    else if(gridPosition1.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
        allGridInputs = arrayRemove(allGridInputs, gridInput9);
        gridPosition9.innerHTML = 'O';        
    }else if(gridPosition9.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
        allGridInputs = arrayRemove(allGridInputs, gridInput1);
        gridPosition1.innerHTML = 'O';
    }else if(gridPosition3.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
        allGridInputs = arrayRemove(allGridInputs, gridInput7);
        gridPosition7.innerHTML = 'O';
    }else if(gridPosition7.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition3.firstElementChild == gridInput3){
        allGridInputs = arrayRemove(allGridInputs, gridInput3);
        gridPosition3.innerHTML = 'O';
    }

    //Random
    else{
        let compInputIndex = Math.floor(Math.random() * allGridInputs.length);
        let compInput = allGridInputs[compInputIndex];
        compInput.parentElement.innerHTML = 'O';
        allGridInputs = arrayRemove(allGridInputs, compInput);
        // console.log(allGridInputs);
        // console.log(compInput.type)
    }
    checkWinner();
}

function checkWinner(){
    //Player Horizontal Wins
    checkWinningEntries(gridPosition1, gridPosition2, gridPosition3, 'X');
    checkWinningEntries(gridPosition4, gridPosition5, gridPosition6, 'X');
    checkWinningEntries(gridPosition7, gridPosition8, gridPosition9, 'X');
    //Player Vertical Wins
    checkWinningEntries(gridPosition1, gridPosition4, gridPosition7, 'X');
    checkWinningEntries(gridPosition2, gridPosition5, gridPosition8, 'X');
    checkWinningEntries(gridPosition3, gridPosition6, gridPosition9, 'X');
    //Player Diagonal Wins
    checkWinningEntries(gridPosition1, gridPosition5, gridPosition9, 'X');
    checkWinningEntries(gridPosition3, gridPosition5, gridPosition7, 'X');

    //Comp Horizontal Wins
    checkWinningEntries(gridPosition1, gridPosition2, gridPosition3, 'O');
    checkWinningEntries(gridPosition4, gridPosition5, gridPosition6, 'O');
    checkWinningEntries(gridPosition7, gridPosition8, gridPosition9, 'O');
    //Comp Vertical Wins
    checkWinningEntries(gridPosition1, gridPosition4, gridPosition7, 'O');
    checkWinningEntries(gridPosition2, gridPosition5, gridPosition8, 'O');
    checkWinningEntries(gridPosition3, gridPosition6, gridPosition9, 'O');
    //Comp Diagonal Wins
    checkWinningEntries(gridPosition1, gridPosition5, gridPosition9, 'O');
    checkWinningEntries(gridPosition3, gridPosition5, gridPosition7, 'O');
}

function checkWinningEntries(entry1, entry2, entry3, alphabetPlayed){
    if(entry1.textContent == alphabetPlayed && entry2.textContent == alphabetPlayed && entry3.textContent == alphabetPlayed){
        allGridPositions.forEach(
            (item) =>{
                console.log(item)
                if(item.firstChild.type == 'checkbox'){
                    item.innerHTML =  '';
                }
            }
            )
            entry1.classList.add('winner');entry2.classList.add('winner');entry3.classList.add('winner');
            if(alphabetPlayed == 'X'){
                console.log('Player Wins');
            }
            if(alphabetPlayed == 'O'){
                console.log('Comp Wins')
            }
    }

}

playerInput();
