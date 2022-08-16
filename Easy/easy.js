const gameBoard = document.querySelector('.game-board');

// const gridInput1 = document.querySelector('#grid-input1');
// const gridInput2 = document.querySelector('#grid-input2');
// const gridInput3 = document.querySelector('#grid-input3');
// const gridInput4 = document.querySelector('#grid-input4');
// const gridInput5 = document.querySelector('#grid-input5');
// const gridInput6 = document.querySelector('#grid-input6');
// const gridInput7 = document.querySelector('#grid-input7');
// const gridInput8 = document.querySelector('#grid-input8');
// const gridInput9 = document.querySelector('#grid-input9');

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
    let compInputIndex = Math.floor(Math.random() * allGridInputs.length);
    let compInput = allGridInputs[compInputIndex];
    compInput.parentElement.innerHTML = 'O';
    allGridInputs = arrayRemove(allGridInputs, compInput);
    console.log(allGridInputs);
    console.log(compInput.type)
}

playerInput();
