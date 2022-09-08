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

// Add ability to go to previous window