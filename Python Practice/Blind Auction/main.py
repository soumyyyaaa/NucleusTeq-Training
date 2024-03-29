import art
import os

print(art.logo)
bid_dict = {}

condition = True

while condition:
    name = input("What is you name? ")
    bid = int(input("What is your bid? $"))
    bid_dict[name] = bid
    ans = input("Are there any other bidders? Type 'yes' or 'no'.\n")
    if ans == "yes":
        os.system('cls')
    else:
        condition = False
    
highest_bid = 0
highest_bidder_name = ""
for bidder in bid_dict:
    if bid_dict[bidder] > highest_bid:
        highest_bid = bid_dict[bidder]
        highest_bidder_name = bidder

os.system('cls')
print(f"The winner is {highest_bidder_name} with a bid of ${highest_bid}")