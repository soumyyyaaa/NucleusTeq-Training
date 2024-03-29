from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine

menu = Menu()
coffeeMaker = CoffeeMaker()
moneyMachine = MoneyMachine()

drinkDispensed = True
moneyInserted = 0

while drinkDispensed:
    userChoice = input(f"What would you like? ({menu.get_items()}): ")
    if userChoice == "off":
        drinkDispensed = False
    elif userChoice == "report":
        print(coffeeMaker.report())
        print(moneyMachine.report())
    else:
        drink = menu.find_drink(userChoice)
        if coffeeMaker.is_resource_sufficient(drink) and moneyMachine.make_payment(drink.cost):
            coffeeMaker.make_coffee(drink)
