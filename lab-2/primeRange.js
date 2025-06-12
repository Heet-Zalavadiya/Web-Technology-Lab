let a = parseInt(prompt("Enter value of a: "));
let b = parseInt(prompt("Enter value of b: "));
let flag = 0;

for (let i = a; i <= b; i++) {
    for (let j = 2; j <= i/2; j++) {
        if (i % j == 0) {
            flag = 1;
        }
    }
    if (flag == 0) {
        document.writeln(i);
    }
    flag = 0;
}
