const p1b = document.querySelector("#p1b");
const p2b = document.querySelector("#p2b");
const reset = document.querySelector("#reset");
const playto = document.querySelector("#playto");
const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");

let p1score = 0, p2score = 0, isGameOver = false, winningScore = 5;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.textContent = player === player1 ? ++p1score : ++p2score; // if player1/p2 clicks 1 point will add in p1score/p2score 
        if (player.textContent == winningScore) {
            isGameOver = true;
            player.classList.add("has-text-success");
            opponent.classList.add("has-text-danger");
            p1b.disabled = p2b.disabled = true;
        }
    }
}

p1b.addEventListener("click", () => updateScore(player1, player2));
p2b.addEventListener("click", () => updateScore(player2, player1));

function resetGame() {
    p1score = p2score = 0;
    isGameOver = false;
    player1.textContent = player2.textContent = "0";
    player1.classList.remove("has-text-success", "has-text-danger");
    player2.classList.remove("has-text-success", "has-text-danger");
    p1b.disabled = p2b.disabled = false;
}

playto.addEventListener("change", function () {
    winningScore = parseInt(this.value);  // string to int '5' to 5
    resetGame();
});

reset.addEventListener("click", resetGame);
