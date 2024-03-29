import art

print(art.logo)
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

def caesar(direction, text, shift):
  cipher_text = ""
  if shift > 26:
    shift = shift % 26
  for letter in text:
    if letter not in alphabet:
      cipher_text += letter
      continue
    position = alphabet.index(letter)
    if direction == "encode":
      new_position = position + shift
    else:
      new_position = position - shift
    
    cipher_text += alphabet[new_position]
  print(f"The {direction} text is {cipher_text}")

condition = True

while condition:
  direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
  text = input("Type your message:\n").lower()
  shift = int(input("Type the shift number:\n"))

  caesar(direction, text, shift)

  ans = input("\nType 'yes' if you want to go again. Otherwise type 'no':\n")
  if ans == "no":
    print("Goodbye")
    condition = False

