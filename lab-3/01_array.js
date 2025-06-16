let size = parseInt(prompt("Enter size of array : "));
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter element in arr " + i + " : "));
}

let max = arr[0];
for (let j = 0; j < size; j++) {
    if (max < arr[j]) {
        max = arr[j];
    }
}


document.writeln("Max is ", max);