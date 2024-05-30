# Interactive Quiz Game
## Table Of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api)
## Overview <a name="overview"></a>
Interactive Quiz Game is a web application that allows users to participate in quizzes and test their knowledge on various topics. The front-end is built using HTML, CSS, and JavaScript, while the back-end is powered by Python's Flask framework, with MySQL as the database.
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
    git clone https://github.com/soumyyyaaa/NucleusTeq-Training/tree/main/Interactive%20Quiz%20Assignment
   ```
2. Install the required Python packages:
   ```python
   pip install Flask
   pip install SQLAlchemy
   ```
3. Run the application:
   ```python
   flask run
   ```
   The application will be available at ```http://127.0.0.1:5000/```
## Usage <a name="usage"></a>
- Navigate to http://127.0.0.1:5000/ in your web browser
- Use the provided API endpoints to add categories and questions
- Integrate the front-end with these endpoints to build the user interface for the quiz game
## API Endpoints <a name="api"></a>
### Insert Category
- URL: ```/insert/category```
- Method: ```POST```
- Data Params:
    - ```category_id``` (int): ID of the category
    - ```category_name``` (str): Name of the category
- Response:
    - ```201```: Category added successfully
    - ```500```: Error creating category
### Insert Question
- URL: ```/insert/question```
- Method: ```POST```
- Data Params:
    - ```category_id``` (int): ID of the category
    - ```question``` (str): Question text
    - ```correct_answer``` (str): Correct answer
    - ```incorrect_answer1``` (str): First incorrect answer
    - ```incorrect_answer2``` (str): Second incorrect answer
    - ```incorrect_answer3``` (str): Third incorrect answer
- Response:
    - ```201```: Category added successfully
    - ```500```: Error creating category
### Get Questions
- URL: ```/questions/<no_of_questions>/<category_id>```
- Method: ```GET```
- URL Params:
    - ```no_of_questions``` (int): Number of questions to retrieve
    - ```category_id``` (int): ID of the category
- Response:
    - JSON array of questions with the following fields:
        1.  category_id
        2.  question_id
        3.  question
        4.  correct_answer
        5.  incorrect_answer1
        6.  incorrect_answer2
        7.  incorrect_answer3
### JavaScript Implementation
#### script.js
This file contains the front-end logic for the quiz game. It handles the user interactions and communicates with the Flask back-end to fetch questions and display them to the user.
- Event Listeners:
    - Difficulty selection
    - Category selection
    - Option selection
    - Next button click
- Functions:
    - ```startButtonCLick()```: Starts the quiz by displaying the difficulty selection page
    - ```fetchData()```: Fetches questions based on the selected category and difficulty
    - ```displayQuestion(index)```: Displays the current question and options
    - ```checkAnswer(button)```: Checks the selected answer and updates the score
    - ```highlightCorrectAnswer()```: Highlights the correct answer after a selection is made
    - ```resetButtonStyles()```: Resets the styles of the option buttons for the next question
    - ```displayScore()```: Displays the final score after the quiz is completed
    - ```startTimer()```: Starts the timer for each question
    - ```disableOptionButtons()```: Disables all option buttons after an answer is selected
    - ```disableNextButton()```: Disables the next button until an answer is selected
    - ```enableNextButton()```: Enables the next button after an answer is selected
