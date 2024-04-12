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
    return arr;
}

let a1 = [1, 2, 3, 4];
let a2 = [3, 4, 5, 6, 7];
console.log("Final array elements: " + array_intersecton(a1, a2));
