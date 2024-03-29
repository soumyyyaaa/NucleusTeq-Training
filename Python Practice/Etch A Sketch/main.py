from turtle import Turtle, Screen

t1 = Turtle()


def move_forward():
    t1.forward(20)


def move_backward():
    t1.backward(20)


def turn_left():
    t1.left(20)


def turn_right():
    t1.right(20)


screen = Screen()
screen.listen()
screen.onkey(key="w", fun=move_forward)
screen.onkey(key="s", fun=move_backward)
screen.onkey(key="a", fun=turn_left)
screen.onkey(key="d", fun=turn_right)
screen.onkey(key="c", fun=screen.resetscreen)
screen.exitonclick()
