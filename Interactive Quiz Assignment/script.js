function startButtonCLick() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("difficulty-level-page").style.display = "block";
}

let selected_difficulty;
let selected_category;

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".difficulty-btn");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", function () {
            selected_difficulty = this.getAttribute("value");
            fetchData();
        });
    });

    const category_buttons = document.querySelectorAll(".category-card");
    category_buttons.forEach((button) => {
        button.addEventListener("mousedown", function () {
            selected_category = this.getAttribute("value");
            fetchData();
        });
    });
});

function difficultyLevelClick() {
    document.getElementById("difficulty-level-page").style.display = "none";
    document.getElementById("category-page").style.display = "block";
}

function categorySubmitClick() {
    var category_list = document.getElementById("category");
    selected_category = category_list.value;
    fetchData();
}

function fetchData() {
    if (selected_difficulty && selected_category) {
        let api =
            "https://opentdb.com/api.php?amount=10&category=" +
            selected_category +
            "&difficulty=" +
            selected_difficulty +
            "&type=multiple";
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < 10; i++) {
                    console.log(data.results[i].question);
                    console.log(data.results[i].incorrect_answers);
                    console.log(data.results[i].correct_answer);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } else {
        console.error("Both difficulty and category are required");
    }
}

var category_center = document.getElementById("category-center");
if (window.innerWidth >= 480) {
    category_center.classList.remove("center");
} else {
    category_center.classList.add("center");
}
