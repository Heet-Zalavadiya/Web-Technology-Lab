a = parseInt(prompt("Enter a number "));

for (let index = 1; index <= a; index++) {
    if (a % index == 0) {
        document.writeln(index);
    }
}