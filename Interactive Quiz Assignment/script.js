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

function categoryClick() {
    document.getElementById("category-page").style.display = "none";
    document.getElementById("questions").style.display = "block";
}

let questionIndex = 0;
let score = 0;

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function fetchData() {
    const h2 = document.getElementsByClassName("question")[0];
    const answersDiv = document.getElementsByClassName("answers")[0];

    if (selected_difficulty && selected_category) {
        const api =
            "https://opentdb.com/api.php?amount=10&category=" +
            selected_category +
            "&difficulty=" +
            selected_difficulty +
            "&type=multiple";
        console.log(api);
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                const question = decodeHtml(
                    data.results[questionIndex].question
                );
                const correctAnswer = decodeHtml(
                    data.results[questionIndex].correct_answer
                );
                let incorrectAnswers = decodeHtml(
                    data.results[questionIndex].incorrect_answers
                );
                incorrectAnswers = incorrectAnswers.split(",");
                const answers = [correctAnswer].concat(incorrectAnswers);
                console.log(answers);
                answers.sort(() => Math.random() - 0.5);

                h2.innerText = question;
                answersDiv.innerHTML = ""; // Clear previous answers
                answers.forEach((answer) => {
                    const button = document.createElement("button");
                    button.innerText = answer;
                    button.addEventListener("click", () => {
                        if (answer === correctAnswer) {
                            alert("Correct!");
                            score += 1;
                        } else {
                            alert("Incorrect!");
                        }
                        // Move to the next question
                        questionIndex++;
                        if (questionIndex < 10) {
                            fetchData(); // Fetch and display the next question
                        } else {
                            const restartButton =
                                document.createElement("button");
                            restartButton.innerText = "Restart";
                            restartButton.addEventListener("click", () => {
                                questionIndex = 0;
                                score = 0;
                                fetchData();
                            });
                            answersDiv.appendChild(restartButton);
                        }
                    });
                    button.style.display = "block";
                    answersDiv.appendChild(button);
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } else {
        console.error("Both difficulty and category are required");
    }
}
