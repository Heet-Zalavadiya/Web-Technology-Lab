a = parseInt(prompt("Enter number : ")); 

i = 0;
j = 1;
document.writeln("Fibonacci Series : " + i + ", " + j);
for (let index = 2; index < a; index++) {
    k = i + j;
    document.writeln(", " + k);
    i = j;
    j = k;
}