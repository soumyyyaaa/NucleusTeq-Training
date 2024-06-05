from flask import Flask, request, jsonify
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

class Category(db.Model):
    category_id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(200), unique=True, nullable=False)
    icon_html = db.Column(db.String(1000), nullable=False)


@app.route("/")
def we():
    return "hello world"

@app.route("/insert/category", methods=["POST"])
def insert_category():
    c_id = request.form.get('category_id')
    c_name = request.form.get('category_name')
    c_icon = request.form.get('icon_html')

    new_cat = Category(category_id = c_id, category_name = c_name, icon_html = c_icon)
    
    try:
        db.session.add(new_cat)
        db.session.commit()
        return jsonify({'message': 'Category added successfully'}), 201
    except:
        db.session.rollback()
        return jsonify({'message': 'Error creating category'}), 500
    finally:
        db.session.close()

@app.route("/insert/question", methods=["POST"])
def insert_question():
    c_id = request.form.get('category_id')
    ques = request.form.get('question')
    ca = request.form.get('correct_answer')
    ica1 = request.form.get('incorrect_answer1')
    ica2 = request.form.get('incorrect_answer2')
    ica3 = request.form.get('incorrect_answer3')

    new_ques = Questions(category_id = c_id, question= ques, correct_answer= ca, incorrect_answer1= ica1, incorrect_answer2= ica2, incorrect_answer3= ica3)
    
    try:
        db.session.add(new_ques)
        db.session.commit()
        return jsonify({'message': 'Question added successfully'}), 201
    except:
        db.session.rollback()
        return jsonify({'message': 'Error creating question'}), 500
    finally:
        db.session.close()

@app.route("/category/display", methods=['GET'])
def get_categories():
    categories = Category.query.all()
    categories_list = [{"id": category.category_id, "name": category.category_name, "icon": category.icon_html} for category in categories]
    return jsonify(categories_list)

@app.route("/questions/<no_of_questions>/<category_id>", methods=["GET"])
def question_route(no_of_questions, category_id):
    try:
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
    except Exception as e:
        raise e


app.run(debug=True)
