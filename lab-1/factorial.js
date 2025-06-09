a  = parseInt(prompt("Enter a number :"));
fact = 1;

for (let index = 1; index <= a; index++) {
    fact = fact * index;
}

document.writeln(fact);