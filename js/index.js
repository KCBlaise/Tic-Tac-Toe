const landingHome = document.querySelector("#landing-home");
const selectMode = document.querySelector("#select-mode");
const selectDifficulty = document.querySelector("#select-difficulty");

const playGameBtn = document.querySelector("#play-game-btn");
const quitBtn = document.querySelector("#quit-btn");

const singlePlayerBtn = document.querySelector("#single-player-btn");

playGameBtn.onclick = () => {
    landingHome.classList.add("hidden");
    selectMode.classList.remove("hidden");
};

singlePlayerBtn.onclick = () => {
    selectMode.classList.add("hidden");
    selectDifficulty.classList.remove("hidden");
};

// Add easy as O and hard as O
const difficultyEasy = document.querySelector(".difficulty-easy");
const difficultyHard = document.querySelector(".difficulty-hard");

const characterSelectEasy = document.querySelector("#character-select-easy");
const characterSelectHard = document.querySelector("#character-select-hard");

difficultyEasy.onclick = () => {
    selectDifficulty.classList.add("hidden");
    characterSelectEasy.classList.remove("hidden");
};

difficultyHard.onclick = () => {
    selectDifficulty.classList.add("hidden");
    characterSelectHard.classList.remove("hidden");
};

// Add ability to go to previous window
const returnMainMenu = document.querySelector("#return-main-menu");
const returnModeSelect = document.querySelector("#return-mode-select");
const returnDifficultySelectEasy = document.querySelector("#return-difficulty-select1");
const returnDifficultySelectHard = document.querySelector("#return-difficulty-select2");


returnMainMenu.onclick = () => {
    selectMode.classList.add("hidden");
    landingHome.classList.remove("hidden");
};

returnModeSelect.onclick = () => {
    selectDifficulty.classList.add("hidden");
    selectMode.classList.remove("hidden");
};

returnDifficultySelectEasy.onclick = () => {
    characterSelectEasy.classList.add("hidden");
    selectDifficulty.classList.remove("hidden");
};

returnDifficultySelectHard.onclick = () => {
    characterSelectHard.classList.add("hidden");
    selectDifficulty.classList.remove("hidden");
};