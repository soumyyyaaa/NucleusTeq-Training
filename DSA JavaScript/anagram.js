function anagram(w1, w2) {
    w1_copy = w1.split("");
    w2_copy = w2.split("");
    if (w1_copy.length != w2_copy.length) {
        return " are not anagarams!";
    } else {
        w1_copy.sort();
        w2_copy.sort();
        for (let i = 0; i < w1_copy.length; i++)
            if (w1_copy[i] != w2_copy[i]) {
                return " are not anagarams!";
            }
    }
    return " are anagarams!";
}

let s1 = "listen";
let s2 = "silent";
console.log(s1 + " and " + s2 + anagram(s1, s2));
