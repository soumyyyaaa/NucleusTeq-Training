function prime_number(num) {
    var is_prime = true;
    if (num == 1) {
        console.log("Not prime!");
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            console.log(num + " is prime!");
        } else {
            console.log(num + " is not prime!");
        }
    }
}

function fizz_buzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

function palindrome(word) {
    var is_palindrome = true;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            is_palindrome = false;
            break;
        }
    }
    if (is_palindrome) {
        console.log(word + " is palindrome!");
    } else {
        console.log(word + " is not palindrome!");
    }
}

function array_intersecton(arr1, arr2) {
    var arr = [];
    var max;
    var min;
    if (arr1.length < arr2.length) {
        max = arr2;
        min = arr1;
    } else {
        max = arr1;
        min = arr2;
    }
    for (let i = 0; i < max.length; i++) {
        for (let j = 0; j < min.length; j++) {
            if (max[i] == min[j]) {
                arr.push(max[i]);
            }
        }
    }
    console.log("Final array elements: " + arr);
}

function anagram(w1, w2) {
    var is_anagram = true;
    w1_copy = w1.split("");
    w2_copy = w2.split("");
    if (w1_copy.length != w2_copy.length) {
        is_anagram = false;
    } else {
        w1_copy.sort();
        w2_copy.sort();
        for (let i = 0; i < w1_copy.length; i++)
            if (w1_copy[i] != w2_copy[i]) {
                is_anagram = false;
                break;
            }
    }
    if (is_anagram) {
        console.log(w1 + " and " + w2 + " are anagarams!");
    } else {
        console.log(w1 + " and " + w2 + " are not anagarams!");
    }
}

function kth_smallest_element(arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    min = arr[0];
    console.log(arr[min - 1]);
}

function missing_number(n, arr) {
    var ar = [];
    for (let i = 1; i <= n; i++) {
        ar.push(i);
    }
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] != arr[i]) {
            console.log(ar[i]);
            break;
        }
    }
}

function duplicates(arr) {
    var ele = arr[0];
}

let a = 4;
//prime_number(a);
//fizz_buzz();
let s = "ama";
//palindrome(s);
let a1 = [1, 2, 3, 4];
let a2 = [3, 4, 5, 6, 7];
//array_intersecton(a1, a2);
let s1 = "listen";
let s2 = "silent";
//anagram(s1, s2);
let se = [7, 10, 4, 3, 20, 15];
//kth_smallest_element(se);
let n = 6;
let ar = [1, 2, 4, 5, 6];
//missing_number(n, ar);
let b = [2, 3, 1, 2, 3];
duplicates(b);
