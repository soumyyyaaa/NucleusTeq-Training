from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import func
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:root@localhost/quiz"

db = SQLAlchemy(app)


class Questions(db.Model):
    category_id = db.Column(db.Integer, nullable=False)
    question_id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), unique=True, nullable=False)
    correct_answer = db.Column(db.String(100), nullable=False)
    incorrect_answer1 = db.Column(db.String(100), nullable=False)
    incorrect_answer2 = db.Column(db.String(100), nullable=False)
    incorrect_answer3 = db.Column(db.String(100), nullable=False)


@app.route("/")
def we():
    return "hello world"


@app.route("/questions/<no_of_questions>/<category_id>", methods=["GET"])
def question_route(no_of_questions, category_id):
    """FOR DISPLAYING DIRECTLY TO HTML
    questions = (
        Questions.query.filter_by(category_id=category_id)
        .order_by(func.random())
        .limit(int(no_of_questions))
        .all()
    )
    return  render_template("quiz.html", questions=questions)"""
    questions = (
        Questions.query.filter_by(category_id=category_id)
        .order_by(func.random())
        .limit(no_of_questions)
        .all()
    )
    questions_list = []
    for question in questions:
        question_dict = {
            "question_id": question.question_id,
            "question": question.question,
            "correct_answer": question.correct_answer,
            "incorrect_answer1": question.incorrect_answer1,
            "incorrect_answer2": question.incorrect_answer2,
            "incorrect_answer3": question.incorrect_answer3,
            "category_id": question.category_id,
        }
        questions_list.append(question_dict)

    return jsonify(questions=questions_list)


app.run(debug=True)
