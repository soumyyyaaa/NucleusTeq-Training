"use strict";
//-----------TRIBONACCI---------------------
/*
function tribonacci(signature, n) {
    let b = [];
    let h = [];
    let g = [];
    if (n != 0 && n >= 3) {
      for (let i = 0; i < n - 3; i++) {
        signature[i + 3] = signature[i] + signature[i + 1] + signature[i + 2];
      }
      for (let j = 0; j < n; j++) {
        console.log(signature[j]);
      }
      return signature;
    } else if (n === 2) {
      h.push(signature[n - 2], signature[n - 1]);
      return h;
    } else if (n === 1) {
      g.push(signature[n - 1]);
      return g;
    } else return b;
  }
  let a = tribonacci([1, 0, 0], 0);
  console.log(a);
  */

//----------------NEXT SQUARE------------
/*
 function findNextSquare(sq) {
  let a = Math.sqrt(sq);
  let c;
  if (a % 1 === 0) {
    c = (a + 1) * (a + 1);
  } else return -1;
  return c;
}
*/

//----------TO REMOVE VOWEL FROM STRING---------
/*
function disemvowel(str) {
  let a = Array.from(str);
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] === 'A' ||
      a[i] === 'E' ||
      a[i] === 'I' ||
      a[i] === 'O' ||
      a[i] === 'U'
    ) {
      a[i] = '';
    } else if (
      a[i] === 'a' ||
      a[i] === 'e' ||
      a[i] === 'i' ||
      a[i] === 'o' ||
      a[i] === 'u'
    ) {
      a[i] = '';
    } else continue;
  }
  let c = a.join('');
  return c;
}
*/

//------------COMPLEMENTARY DNA---------------
/*
function DNAStrand(dna) {
  dna = Array.from(dna);
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') dna[i] = 'T';
    else if (dna[i] === 'T') dna[i] = 'A';
    else if (dna[i] === 'C') dna[i] = 'G';
    else if (dna[i] === 'G') dna[i] = 'C';
    else console.log('Not valid');
  }
  dna = dna.join('');
  return dna;
}
let a = [];
a = DNAStrand('AAAA');
console.log(a);
*/

//--------------TRIANGLE SIDES-----------------
/*
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else return false;
}
let a = isTriangle(5, 2, 4);
console.log(a);
*/

//-----------PRIME NO-----------
/*
function isPrime(num) {
  if (num === 1 || num <= 0) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
        break;
      }
    }
    return true;
  }
}

let a = isPrime(11);
console.log(a);
*/

//-----------PANGRAM-----------
/*
function isPangram(string) {
  let a = [];
  let b = [];
  let c = [];
  let d = 0;
  b = Array.from(string);
  a = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  c = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (b[i] === a[j] || b[i] === c[j]) {
        d = d + 1;
      }
    }
  }
  if (d >= 26) return true;
  else return false;
}
let h = isPangram("The quick brown fox jumps over the lazy dog");
console.log(h);
*/

//Multiples of 3 & 5..............
/*let a = 0;
function solution(number) {
  if (number > 0) {
    for (let i = 1; i < number; i++) {
      if (i % 15 === 0) a = a + i;
      else if (i % 3 === 0) a = a + i;
      else if (i % 5 === 0) a = a + i;
    }
    return a;
  } else return 0;
}
let b = solution(20);
console.log(b);
*/

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
/*
function pigIt(str) {
  let a = Array.from(str);
  let c = [];
  for (let i = 0; i < str.length; i++) {
    str[str.length - 1] == str[0];
    str[i] == str[i + 1];
  }
  a.push("a", "y");
  c = a.join("");
  return c;
}
let b = pigIt("hello");
console.log(b);
*/

//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
/*
var moveZeros = function (arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = arr[i + 1];
      a.push(arr[i]);
    }
    a.push(arr[i]);
  }
  return a;
};
let b = [];
let c = [1, 2, 1, 0, 5, 6, 9, "aman"];
b = moveZeros(c);
console.log(b);
*/

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.

/*function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length > 0) {
    for (let i = 0; i < names.length; i++) {
      console.log(`${names[i]} likes this`);
    }
  }
}
let a = likes("aman", "darshna");
*/
