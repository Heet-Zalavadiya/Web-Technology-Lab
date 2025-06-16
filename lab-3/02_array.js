let size = parseInt(prompt("Enter size of array : "));
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter element in arr " + i + " : "));
}

for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

document.writeln(arr);