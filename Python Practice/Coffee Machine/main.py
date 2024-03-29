MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}

drinkDispensed = True
money = 0
enoughResource = False
moneyInserted = 0

while drinkDispensed:
    userChoice = input("What would you like? (espresso/latte/cappuccino): ")
        
    if userChoice == "off":
        drinkDispensed = False
        
    elif userChoice == "report":
        print(f"Water : {resources['water']}ml \nMilk : {resources['milk']}ml \nCoffee : "
              f"{resources['coffee']}g \nMoney : ${money}")
    
    else:
        for key in MENU[userChoice]["ingredients"]:
            if MENU[userChoice]["ingredients"][key] > resources[key]:
                enoughResource = False
                print(f"Sorry there is not enough {key}.")
                break
            else:
                enoughResource = True
                break

        if enoughResource:
            print("Please insert coins.")
            quarter = float(input("How many quarters?: "))
            dime = float(input("How many dimes?: "))
            nickle = float(input("How many nickles?: "))
            penny = float(input("How many pennies?: "))
            moneyInserted = 0.25 * quarter + 0.10 * dime + 0.05 * nickle + 0.01 * penny

            transactionSuccessful = False
            if moneyInserted < MENU[userChoice]["cost"]:
                print("Sorry that's not enough money. Money refunded.")

            elif moneyInserted > MENU[userChoice]["cost"]:
                transactionSuccessful = True
                money += MENU[userChoice]["cost"]
                print(f"Here is ${round(moneyInserted - MENU[userChoice]['cost'], 2)} dollars in change.")

            else:
                transactionSuccessful = True
                money += MENU[userChoice]["cost"]

            if transactionSuccessful:
                for key in MENU[userChoice]["ingredients"]:
                    resources[key] -= MENU[userChoice]["ingredients"][key]
                print(f"Here is your {userChoice}☕. Enjoy!")
