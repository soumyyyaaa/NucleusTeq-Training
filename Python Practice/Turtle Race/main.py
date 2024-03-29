import random
from turtle import Turtle, Screen

screen = Screen()
screen.colormode(255)
screen.setup(width=700, height=500)

user_choice = screen.textinput(title="Make a bet.", prompt="Which turtle will win the race? Enter a color: ")
colors = ["red", "orange", "yellow", "green", "blue", "purple"]
y_val = [-110, -60, -10, 40, 90, 140]
all_turtles = []
is_race_on = False

for i in range(0, 6):
    new_turtle = Turtle(shape="turtle")
    new_turtle.color(colors[i])
    new_turtle.penup()
    new_turtle.goto(x=-340, y=y_val[i])
    all_turtles.append(new_turtle)

if user_choice:
    is_race_on = True

while is_race_on:
    for turtle in all_turtles:
        if turtle.xcor() > 320:
            is_race_on = False
            win_color = turtle.pencolor()
            if win_color == user_choice.lower():
                print(f"You've won! The {win_color} turtle is the winner!")
            else:
                print(f"You've lost! The {win_color} turtle is the winner!")

        random_distance = random.randint(0, 10)
        turtle.forward(random_distance)


screen.exitonclick()
