from turtle import Turtle

FONT = ("Courier", 24, "bold")


class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.level_no = 1
        self.hideturtle()
        self.penup()
        self.goto(-280, 250)

    def display_score(self):
        self.write(f"Level: {self.level_no}", align="left", font=FONT)

    def score_update(self):
        self.level_no += 1
        self.clear()

    def display_game_over(self):
        self.clear()
        self.display_score()
        self.goto(0, 0)
        self.write("Game Over", align="center", font=FONT)
