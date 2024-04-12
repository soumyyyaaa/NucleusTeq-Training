function duplicates(arr) {
    var is_found = false;
    var final_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "-") {
            continue;
        } else {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] == "-") {
                    continue;
                } else if (arr[i] == arr[j]) {
                    arr[j] = "-";
                    is_found = true;
                }
            }
            if (is_found) {
                final_arr.push(arr[i]);
                is_found = false;
            }
        }
    }
    return final_arr.sort();
}

let b = [2, 3, 1, 2, 3, 1];
console.log(duplicates(b));
