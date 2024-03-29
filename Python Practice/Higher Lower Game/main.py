import art
import data
import random
import os

def compare(follower1, follower2):
    if follower1 > follower2:
        return "A"
    else:
        return "B"

game_continue = True
score = 0
data1 = random.choice(data.data)

print(art.logo)
while game_continue:
    data2 = random.choice(data.data)
    if data1 == data2:
        data2 = random.choice(data.data)

    print(f"Compare A: {data1['name']}, a {data1['description']}, from {data1['country']}.")
    print(art.vs)
    print(f"Against B: {data2['name']}, a {data2['description']}, from {data2['country']}.")

    choice = input("Who has more followers? Type 'A' or 'B': ").upper() 
    os.system('cls')
    print(art.logo)
    if choice == compare(data1['follower_count'], data2['follower_count']):
        score += 1
        print(f"You're right! Current score: {score}")
        data1 = data2
    else:
        print(f"Sorry, that's wrong. Final score: {score}")
        game_continue = False