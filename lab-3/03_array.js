let size = parseInt(prompt("Enter size of array : "));
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter element in arr " + i + " : "));
}

for (let i = 0; i < size - 1; i++) {
    isSorted = 1;
    for (let j = 0; j < size - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            isSorted = 0;
        }
    }
    if (isSorted) {
        break;
    }
}

document.writeln(arr);