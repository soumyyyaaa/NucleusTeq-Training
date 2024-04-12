function missing_number(n, arr) {
    var ar = [];
    for (let i = 1; i <= n; i++) {
        ar.push(i);
    }
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] != arr[i]) {
            return ar[i];
        }
    }
    return -1;
}

let n = 6;
let ar = [1, 2, 4, 5, 6];
console.log("Missing number: " + missing_number(n, ar));
