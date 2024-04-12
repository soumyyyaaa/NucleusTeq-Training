function kth_smallest_element(arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    min = arr[0];
    return arr[min - 1];
}

let se = [7, 10, 4, 3, 20, 15];
console.log("kth smallest element: " + kth_smallest_element(se));
