import art


def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    return num1 / num2

def exponent(num1, num2):
    return num1 ** num2

def percent(num1, num2):
    return num1 * num2/100

operations = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide,
    "^" : exponent,
    "%" : percent,
}

def calculator():
    print(art.logo)
    num1 = float(input("What's the first number?: "))
    for operator in operations:
        print(operator)

    while True:
        operator = input("Pick an operation: ")
        num2 = float(input("What's the next number?: "))

        answer = operations[operator](num1 , num2)

        print(f"{num1} {operator} {num2} = {answer}")

        ans = input(f"Type 'cc' to continue calculating with {answer}, to start a new calcualtion type 'nc' or type 'ex' to exit.: ") 
        
        if ans == "cc":  
           num1 = answer
        elif ans == "nc":
            calculator()
        else:
            exit()

calculator()