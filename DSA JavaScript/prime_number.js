function prime_number(num) {
    if (num == 1) {
        return " is not prime!";
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return " is not prime!";
            }
        }
        return " is prime!";
    }
}
let a = 4;
console.log(a + prime_number(a));
