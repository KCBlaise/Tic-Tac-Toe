const restartButton = document.querySelector('.restart-btn');
restartButton.onclick = () =>{
    location.reload()
}

const wrapper = document.querySelector('.wrapper');
const displayWinner = document.querySelector('.display-winner');

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
let gridPositions = document.getElementsByClassName('grid-position')
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

let checkPlayer = 'P1'
function playerInput(){
    allGridInputs.forEach(
        (e) =>{
            e.addEventListener('click', ()=>{
                if(checkPlayer === 'P1'){
                    e.parentElement.innerHTML = 'X';
                    allGridInputs = arrayRemove(allGridInputs, e);
                    console.log(allGridInputs);
                    checkWinner();
                    checkPlayer = 'P2'
                }
                else{
                    e.parentElement.innerHTML = 'O';
                    allGridInputs = arrayRemove(allGridInputs, e);
                    console.log(allGridInputs);
                    checkWinner();
                    checkPlayer = 'P1'
                }
            })
        }
    )
}
    
function playerTwoInput(){
    checkWinner();
    allGridInputs.forEach(
        (e) =>{
            e.addEventListener('click', ()=>{
                e.parentElement.innerHTML = 'O';
                allGridInputs = arrayRemove(allGridInputs, e);
            })
        }
        )
        
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
};

let foundWinner = false;
function checkWinningEntries(entry1, entry2, entry3, alphabetPlayed){
    if(entry1.textContent == alphabetPlayed && entry2.textContent == alphabetPlayed && entry3.textContent == alphabetPlayed){
        allGridPositions.forEach(
            (item) =>{
                item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                console.log(item);
                if(item.firstChild.type == 'checkbox'){
                    item.innerHTML =  '';
                };
            }
        )
        entry1.classList.add('winner');entry2.classList.add('winner');entry3.classList.add('winner');
        gameBoard.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        foundWinner = true;
        
        if(alphabetPlayed == 'X'){
            console.log('Player Wins');
            wrapper.classList.add('x-wins');
            displayWinner.innerText = "'X' Wins";
            displayWinner.classList.add('winner-animation');
        }

        if(alphabetPlayed == 'O'){
            console.log('Comp Wins');
            wrapper.classList.add('o-wins');
            displayWinner.innerText = "'O' Wins";
            displayWinner.classList.add('winner-animation');
        }
    }

};

function checkDraw(){
    if(allGridInputs.length == 0 && foundWinner == false){
        wrapper.style.background = '#000'
        displayWinner.innerText = 'Draw';
        displayWinner.style.color = '#fff';
    };
};

playerInput();
