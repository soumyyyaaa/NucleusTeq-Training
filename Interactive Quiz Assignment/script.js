function startButtonCLick() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("difficulty-level-page").style.display = "block";
}

//-----for setting difficulty------
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".difficulty-btn");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", function () {
            const difficultyLevel = this.getAttribute("value");
            console.log(difficultyLevel);
        });
    });
});

function difficultyLevelClick() {}
