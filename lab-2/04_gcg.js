let a = parseInt(prompt("Enter value of a : "));
let b = parseInt(prompt("Enter value of b : "));

let gcd = 0;

for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
}

document.writeln(gcd);