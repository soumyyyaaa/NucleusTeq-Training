# Interactive Quiz Game
## Table Of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api)
- [JavaScript Implementation](#javascript)
## Overview <a name="overview"></a>
Interactive Quiz Game is an engaging web application designed to test users' knowledge across various topics. The game allows users to select a difficulty level and a category before starting the quiz. Questions are randomly selected from the database, ensuring a unique experience each time. The game features real-time feedback, a timer for each question, and a final score display at the end of the quiz.
### Key Components:
- Front-end: HTML, CSS, and JavaScript provide a responsive and interactive user interface.
- Back-end: Python's Flask framework handles API requests and interactions with the MySQL database.
- Database: MySQL stores questions and categories, facilitating efficient data retrieval and management.
## Features <a name="features"></a>
- Multiple categories for quizzes
- Randomized question selection
- Real-time feedback on quiz performance
- Timer for each question
- Responsive design for mobile and desktop users
## Technology Used <a name="technologies"></a>
- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Python, Flask
- **Database**: MySQL
- **Version Control**: Git
## Installation <a name="installation"></a>
### Prerequisites
- Python 3.x
- MySQL
### Steps
1. Clone the repository:
   ```git
    git clone https://github.com/soumyyyaaa/NucleusTeq-Training
   ```
2. Install the required Python packages:
   ```python
   pip install Flask
   pip install SQLAlchemy
   pip install mysql-python
   pip install flask-cors
   ```
3. Run the application:
   ```python
   flask run
   ```
   The application will be available at `http://127.0.0.1:5000/`
## Usage <a name="usage"></a>
- Navigate to http://127.0.0.1:5000/ in your web browser
- Use the provided API endpoints to add categories and questions
- Integrate the front-end with these endpoints to build the user interface for the quiz game
## API Endpoints <a name="api"></a>
### Insert Category
- URL: `/insert/category`
- Method: `POST`
- Data Params:
    - `category_id` (int): ID of the category
    - `category_name` (str): Name of the category
- Response:
    - `201`: Category added successfully
    - `500`: Error creating category
### Insert Question
- URL: `/insert/question`
- Method: `POST`
- Data Params:
    - `category_id` (int): ID of the category
    - `question` (str): Question text
    - `correct_answer` (str): Correct answer
    - `incorrect_answer1` (str): First incorrect answer
    - `incorrect_answer2` (str): Second incorrect answer
    - `incorrect_answer3` (str): Third incorrect answer
- Response:
    - `201`: Category added successfully
    - `500`: Error creating category
### Get Questions
- URL: `/questions/<no_of_questions>/<category_id>`
- Method: `GET`
- URL Params:
    - `no_of_questions` (int): Number of questions to retrieve
    - `category_id` (int): ID of the category
- Response:
    - JSON array of questions with the following fields:
        1.  category_id
        2.  question_id
        3.  questi
        4.  correct_answer
        5.  incorrect_answer1
        6.  incorrect_answer2
        7.  incorrect_answer3
## JavaScript Implementation <a name="javascript"></a>
#### script.js
This file contains the front-end logic for the quiz game. It handles the user interactions and communicates with the Flask back-end to fetch questions and display them to the user.
- Event Listeners:
    - Difficulty selection
    - Category selection
    - Option selection
    - Next button click
- Functions:
    - `startButtonCLick()`: Starts the quiz by displaying the difficulty selection page
    - `fetchData()`: Fetches questions based on the selected category and difficulty
    - `displayQuestion(index)`: Displays the current question and options
    - `checkAnswer(button)`: Checks the selected answer and updates the score
    - `highlightCorrectAnswer()`: Highlights the correct answer after a selection is made
    - `resetButtonStyles()`: Resets the styles of the option buttons for the next question
    - `displayScore()`: Displays the final score after the quiz is completed
    - `startTimer()`: Starts the timer for each question
    - `disableOptionButtons()`: Disables all option buttons after an answer is selected
    - `disableNextButton()`: Disables the next button until an answer is selected
    - `enableNextButton()`: Enables the next button after an answer is selected
