const restartButton = document.querySelector('.restart-btn');
restartButton.onclick = () =>{
    location.reload();
};

const wrapper = document.querySelector('.wrapper');
const displayWinner = document.querySelector('.display-winner');
const postGame = document.querySelector('.post-game');
const postGameMessage = document.querySelector('.post-game-message');
const postGameRestart = document.querySelector('#post-game-restart');
const postGameWait = document.querySelector('#post-game-wait');

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


let checkPlayer = 'Comp';

function playerInput(){
    checkWinner();
    checkDraw();
    allGridInputs.forEach(
        (e) =>{
            e.addEventListener('click', ()=>{
                if(checkPlayer === 'Player'){
                    e.parentElement.innerHTML = 'O';
                    allGridInputs = arrayRemove(allGridInputs, e);
                    checkPlayer = 'Comp';
                    // console.log(allGridInputs);
                    computerInput();
                }else{e.checked = false}
            });
        }
    );
};
    
function computerInput(){
    checkWinner();
    checkDraw();
    //Win where possible, if not then play random
    setTimeout(() => {
        //Horizontal wins
        if(gridPosition1.textContent == 'X' && gridPosition2.textContent == 'X' && gridPosition3.firstElementChild == gridInput3){
            allGridInputs = arrayRemove(allGridInputs, gridInput3);
            gridPosition3.innerHTML = 'X';
        }else if(gridPosition1.textContent == 'X' && gridPosition3.textContent == 'X' && gridPosition2.firstElementChild == gridInput2){
            allGridInputs = arrayRemove(allGridInputs, gridInput2);
            gridPosition2.innerHTML = 'X';
        }else if(gridPosition2.textContent == 'X' && gridPosition3.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
            allGridInputs = arrayRemove(allGridInputs, gridInput1);
            gridPosition1.innerHTML = 'X';
        }else if(gridPosition4.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition6.firstElementChild == gridInput6){
            allGridInputs = arrayRemove(allGridInputs, gridInput6);
            gridPosition6.innerHTML = 'X';
        }else if(gridPosition4.textContent == 'X' && gridPosition6.textContent == 'X' && gridPosition5.firstElementChild == gridInput5){
            allGridInputs = arrayRemove(allGridInputs, gridInput5);
            gridPosition5.innerHTML = 'X';
        }else if(gridPosition5.textContent == 'X' && gridPosition6.textContent == 'X' && gridPosition4.firstElementChild == gridInput4){
            allGridInputs = arrayRemove(allGridInputs, gridInput4);
            gridPosition4.innerHTML = 'X';
        }else if(gridPosition7.textContent == 'X' && gridPosition8.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
            allGridInputs = arrayRemove(allGridInputs, gridInput9);
            gridPosition9.innerHTML = 'X';
        }else if(gridPosition7.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition8.firstElementChild == gridInput8){
            allGridInputs = arrayRemove(allGridInputs, gridInput8);
            gridPosition8.innerHTML = 'X';
        }else if(gridPosition8.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
            allGridInputs = arrayRemove(allGridInputs, gridInput7);
            gridPosition7.innerHTML = 'X';
        }
        //Vertical wins
        else if(gridPosition1.textContent == 'X' && gridPosition4.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
            allGridInputs = arrayRemove(allGridInputs, gridInput7);
            gridPosition7.innerHTML = 'X';
        }else if(gridPosition1.textContent == 'X' && gridPosition7.textContent == 'X' && gridPosition4.firstElementChild == gridInput4){
            allGridInputs = arrayRemove(allGridInputs, gridInput4);
            gridPosition4.innerHTML = 'X';
        }else if(gridPosition4.textContent == 'X' && gridPosition7.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
            allGridInputs = arrayRemove(allGridInputs, gridInput1);
            gridPosition1.innerHTML = 'X';
        }else if(gridPosition2.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition8.firstElementChild == gridInput8){
            allGridInputs = arrayRemove(allGridInputs, gridInput8);
            gridPosition8.innerHTML = 'X';
        }else if(gridPosition2.textContent == 'X' && gridPosition8.textContent == 'X' && gridPosition5.firstElementChild == gridInput5){
            allGridInputs = arrayRemove(allGridInputs, gridInput5);
            gridPosition5.innerHTML = 'X';
        }else if(gridPosition5.textContent == 'X' && gridPosition8.textContent == 'X' && gridPosition2.firstElementChild == gridInput2){
            allGridInputs = arrayRemove(allGridInputs, gridInput2);
            gridPosition2.innerHTML = 'X';
        }else if(gridPosition3.textContent == 'X' && gridPosition6.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
            allGridInputs = arrayRemove(allGridInputs, gridInput9);
            gridPosition9.innerHTML = 'X';
        }else if(gridPosition3.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition6.firstElementChild == gridInput6){
            allGridInputs = arrayRemove(allGridInputs, gridInput6);
            gridPosition6.innerHTML = 'X';
        }else if(gridPosition6.textContent == 'X' && gridPosition9.textContent == 'X' && gridPosition3.firstElementChild == gridInput3){
            allGridInputs = arrayRemove(allGridInputs, gridInput3);
            gridPosition3.innerHTML = 'X';
        }
        //Diagonal wins
        else if(gridPosition1.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition9.firstElementChild == gridInput9){
            allGridInputs = arrayRemove(allGridInputs, gridInput9);
            gridPosition9.innerHTML = 'X';        
        }else if(gridPosition9.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition1.firstElementChild == gridInput1){
            allGridInputs = arrayRemove(allGridInputs, gridInput1);
            gridPosition1.innerHTML = 'X';
        }else if(gridPosition3.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition7.firstElementChild == gridInput7){
            allGridInputs = arrayRemove(allGridInputs, gridInput7);
            gridPosition7.innerHTML = 'X';
        }else if(gridPosition7.textContent == 'X' && gridPosition5.textContent == 'X' && gridPosition3.firstElementChild == gridInput3){
            allGridInputs = arrayRemove(allGridInputs, gridInput3);
            gridPosition3.innerHTML = 'X';
        }
        //Play Random
        else{
            let compInputIndex = Math.floor(Math.random() * allGridInputs.length);
            let compInput = allGridInputs[compInputIndex];
            compInput.parentElement.innerHTML = 'X';
            allGridInputs = arrayRemove(allGridInputs, compInput);
            console.log(allGridInputs);
            console.log(compInput.type)
        }
        
        checkWinner();
        checkDraw();
        checkPlayer = 'Player';
        playerInput();
    }, 1000);
}

function checkWinner(){
    //Comp Horizontal Wins
    checkWinningEntries(gridPosition1, gridPosition2, gridPosition3, 'X');
    checkWinningEntries(gridPosition4, gridPosition5, gridPosition6, 'X');
    checkWinningEntries(gridPosition7, gridPosition8, gridPosition9, 'X');
    //Comp Vertical Wins
    checkWinningEntries(gridPosition1, gridPosition4, gridPosition7, 'X');
    checkWinningEntries(gridPosition2, gridPosition5, gridPosition8, 'X');
    checkWinningEntries(gridPosition3, gridPosition6, gridPosition9, 'X');
    //Comp Diagonal Wins
    checkWinningEntries(gridPosition1, gridPosition5, gridPosition9, 'X');
    checkWinningEntries(gridPosition3, gridPosition5, gridPosition7, 'X');

    //Player Horizontal Wins
    checkWinningEntries(gridPosition1, gridPosition2, gridPosition3, 'O');
    checkWinningEntries(gridPosition4, gridPosition5, gridPosition6, 'O');
    checkWinningEntries(gridPosition7, gridPosition8, gridPosition9, 'O');
    //Player Vertical Wins
    checkWinningEntries(gridPosition1, gridPosition4, gridPosition7, 'O');
    checkWinningEntries(gridPosition2, gridPosition5, gridPosition8, 'O');
    checkWinningEntries(gridPosition3, gridPosition6, gridPosition9, 'O');
    //Player Diagonal Wins
    checkWinningEntries(gridPosition1, gridPosition5, gridPosition9, 'O');
    checkWinningEntries(gridPosition3, gridPosition5, gridPosition7, 'O');
}

let foundWinner = false;
function checkWinningEntries(entry1, entry2, entry3, alphabetPlayed){
    if(entry1.textContent == alphabetPlayed && entry2.textContent == alphabetPlayed && entry3.textContent == alphabetPlayed){
        allGridPositions.forEach(
            (item) =>{
                item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                // console.log(item);
                if(item.firstChild.type == 'checkbox'){
                    item.innerHTML =  '';
                };
            }
        )
        entry1.classList.add('winner');entry2.classList.add('winner');entry3.classList.add('winner');
        gameBoard.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        foundWinner = true;
        
        if(alphabetPlayed == 'X'){
            // console.log('Comp Wins');
            wrapper.classList.add('x-wins');
            displayWinner.innerText = "'X' Wins";
            displayWinner.classList.add('winner-animation');
            postGameMessage.innerText = 'Tough Luck! Would You Like to Try Again?';
            postGameMessage.style.color = '#e4081e';
        };

        if(alphabetPlayed == 'O'){
            // console.log('Player Wins');
            wrapper.classList.add('o-wins');
            displayWinner.innerText = "'O' Wins";
            displayWinner.classList.add('winner-animation');
            postGameMessage.innerText = 'Great Game! Would You Like to Play Again?';
            postGameMessage.style.color = '#7fff00';
            document.querySelector('.footer').style.background = '#000';
        };

        setTimeout(() => {
            postGameScreen();
        }, 5000);
    };

};

function checkDraw(){
    if(allGridInputs.length == 0 && foundWinner == false){
        wrapper.style.background = '#000'
        displayWinner.innerText = 'Draw';
        displayWinner.style.color = '#fff';
        postGameMessage.innerText = 'Nice Try! Would You Like to Play Again?';
        setTimeout(() => {
            postGameScreen();
        }, 3000);
    };
};

function postGameScreen(){
    postGame.classList.remove('hidden');
    postGameRestart.onclick = () => {
        location.reload();
    };
    postGameWait.onclick = () => {
        postGame.classList.add('hidden');
    };
};

computerInput();