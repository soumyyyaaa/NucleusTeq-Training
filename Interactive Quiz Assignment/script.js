let selected_difficulty;
let selected_category;
let onclick_value;
let score = 0;
let questions = [];
let currentQuestionIndex = 0;
let timer;
const questionTimeLimit = 15;

function startButtonCLick() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("difficulty-level-page").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    // DIFFICULTY SELECTION
    const difficulty_buttons = document.querySelectorAll(".difficulty-btn");
    difficulty_buttons.forEach((button) => {
        button.addEventListener("mousedown", function () {
            selected_difficulty = this.getAttribute("value");
            fetchData();
        });
    });

    //CATEGORY SELECTION
    const category_buttons = document.querySelectorAll(".category-card");
    category_buttons.forEach((button) => {
        button.addEventListener("mousedown", function () {
            selected_category = this.getAttribute("value");
            fetchData();
        });
    });

    //OPTION SELECTION
    const option_buttons = document.querySelectorAll(".option");
    option_buttons.forEach((button) => {
        button.addEventListener("mousedown", function () {
            // Clear the timer when an answer is clicked
            clearInterval(timer);

            onclick_value = this.getAttribute("value");
            checkAnswer(this);
        });
    });

    // NEXT BUTTON CLICK
    const next_button = document.getElementById("next_button");
    next_button.addEventListener("click", function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            displayScore();
        }
    });
});

function difficultyLevelClick() {
    document.getElementById("difficulty-level-page").style.display = "none";
    document.getElementById("category-page").style.display = "block";
}

function categoryClick() {
    document.getElementById("category-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
}

function fetchData() {
    if (!selected_difficulty || !selected_category) {
        console.error("Both difficulty and category are required");
        return;
    }

    let api = `http://127.0.0.1:5000/questions/10/${selected_category}`;
    if (selected_difficulty == 2) {
        api = `http://127.0.0.1:5000/questions/15/${selected_category}`;
    } else if (selected_difficulty == 3) {
        api = `http://127.0.0.1:5000/questions/25/${selected_category}`;
    }

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            // Store the fetched questions
            questions = data.questions;

            currentQuestionIndex = 0;
            displayQuestion(currentQuestionIndex);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function displayQuestion(index) {
    const questionData = questions[index];
    const ques = document.getElementById("question");
    const o1 = document.getElementById("o1");
    const o2 = document.getElementById("o2");
    const o3 = document.getElementById("o3");
    const o4 = document.getElementById("o4");

    const correctAnswer = questionData.correct_answer;
    const incorrectAnswers = [
        questionData.incorrect_answer1,
        questionData.incorrect_answer2,
        questionData.incorrect_answer3,
    ];

    const answers = [
        correctAnswer,
        incorrectAnswers[0],
        incorrectAnswers[1],
        incorrectAnswers[2],
    ];
    answers.sort(() => Math.random() - 0.5);

    ques.innerHTML = questionData.question;
    o1.innerHTML = answers[0];
    o1.setAttribute("value", answers[0] === correctAnswer ? "1" : "0");
    o2.innerHTML = answers[1];
    o2.setAttribute("value", answers[1] === correctAnswer ? "1" : "0");
    o3.innerHTML = answers[2];
    o3.setAttribute("value", answers[2] === correctAnswer ? "1" : "0");
    o4.innerHTML = answers[3];
    o4.setAttribute("value", answers[3] === correctAnswer ? "1" : "0");

    // Reset styles for buttons
    resetButtonStyles();

    // Start the timer for the current question
    startTimer();
}

function checkAnswer(button) {
    const isCorrect = button.getAttribute("value") === "1";
    if (isCorrect) {
        score += 1;
        button.style.backgroundColor = "#01d06f";
    } else {
        button.style.backgroundColor = "#ec4b0b";
    }
    // Disable all buttons once an answer is clicked
    disableOptionButtons();

    // Highlight the correct answer
    highlightCorrectAnswer();
}

function highlightCorrectAnswer() {
    const option_buttons = document.querySelectorAll(".option");
    option_buttons.forEach((button) => {
        if (button.getAttribute("value") === "1") {
            button.style.backgroundColor = "#01d06f";
        }
    });
}

function resetButtonStyles() {
    const option_buttons = document.querySelectorAll(".option");
    option_buttons.forEach((button) => {
        button.style.backgroundColor = "";
        button.disabled = false;
    });
}

function displayScore() {
    document.getElementById("quiz-page").style.display = "none";
    document.getElementById("score-page").style.display = "block";
    const score_display = document.getElementById("score-display");
    let no_of_ques;
    if (selected_difficulty == 1) {
        no_of_ques = 10;
    } else if (selected_difficulty == 2) {
        no_of_ques = 15;
    } else if (selected_difficulty == 3) {
        no_of_ques = 25;
    }
    let html_content = `<h2>${score} / ${no_of_ques}</h2>`;
    score_display.innerHTML = html_content;

    // Optionally, show a restart button
    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", () => {
        location.reload();
    });
}

function startTimer() {
    let timeLeft = questionTimeLimit;
    const timerElement = document.getElementById("timer");
    timerElement.innerText = `${timeLeft}`;
    timer = setInterval(() => {
        timeLeft -= 1;
        timerElement.innerText = `${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
        }
    }, 1000);
}

function disableOptionButtons() {
    const option_buttons = document.querySelectorAll(".option");
    option_buttons.forEach((button) => {
        // Disable the buttons
        button.disabled = true;
    });
}
