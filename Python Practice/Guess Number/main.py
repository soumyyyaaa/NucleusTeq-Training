import art
from random import *

print(art.logo)

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")
print(f"Pssst, the correct answer is {randint(1, 100)}")

chosen_number = randint(1, 100)
if input("Choose a difficulty. Type 'easy' or 'hard': ") == "easy":
    lives = 10
    print("You have 10 attempts remaining to guess the number.")
else:
    lives = 5
    print("You have 5 attempts remaining to guess the number.")

while lives > 0:
    guess = int(input("Make a guess: "))
    if guess == chosen_number:
        print(f"You got it! The answer was {chosen_number}")
        exit()
    elif guess > chosen_number:
        print("Too high.")
    else:
        print("Too low.")

    lives -= 1
    print("Guess again.")
    print(f"You have {lives} attempts remaining to guess the number.")

