import art
import os
import random

def deal_card():
    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    return random.choice(cards)

def calculate_score(cards):
    if sum(cards) == 21 and len(cards) == 2:
        return 0
    if sum(cards) > 21 and 11 in cards:
        cards.remove(11)
        cards.append(1)
    return sum(cards)

def compare(user_score, computer_score):
    if user_score == computer_score:
        return "Draw 😶"
    elif computer_score == 0:
        return "Lose, opponent has Blackjack 😱"
    elif user_score == 0:
        return "Win with a Blackjack 😎"
    elif user_score > 21:
        return "You went over. You lose 😭"
    elif computer_score > 21:
        return "Opponent went over. You win 😬"
    elif user_score > computer_score:
        return "You win 😁"
    else:
        return "You lose 😤"

def play_game():
    print(art.logo)
    computer_cards = []
    user_cards = []
    is_game_over = False

    for i in range(0,2):
        user_cards.append(deal_card())
        computer_cards.append(deal_card())
        
    while not is_game_over:
        sum_user = calculate_score(user_cards)
        sum_computer = calculate_score(computer_cards)
        print(f"Your cards: {user_cards}, current score: {sum_user}")
        print(f"Computer's first card: {computer_cards[0]}")
            
        if sum_user == 0 or sum_computer == 0 or sum_user > 21:
            is_game_over = True
        else:
            get_another_card = input("Type 'y' to get another card, type 'n' to pass: ")
            if get_another_card == "y":
                user_cards.append(deal_card())
            else:
                is_game_over = True
    
    while sum_computer != 0 and sum_computer < 17:
        computer_cards.append(deal_card())
        sum_computer = calculate_score(computer_cards)

    print(f"Your final hand: {user_cards}, final score: {sum_user}")
    print(f"Computer's final hand: {computer_cards}, final score: {sum_computer}")
    print(compare(sum_user, sum_computer))

while input("Do you want to play a game of Blackjack? Type 'y' or 'n' : ") == "y":
    os.system('cls')
    play_game()
