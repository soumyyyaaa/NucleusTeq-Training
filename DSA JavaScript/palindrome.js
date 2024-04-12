function palindrome(word) {
    var is_palindrome = true;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return " is not palindrome!";
        }
    }
    return " is palindrome!";
}

let s = "ama";
console.log(s + palindrome(s));
