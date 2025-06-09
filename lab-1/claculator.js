a = parseInt(prompt("Enter a : "));
b = parseInt(prompt("Enter b : "));
c = prompt("Enter operator from + - * / : ");

if (c == '+') {
    document.writeln("Addition :", a+b);
}
else if (c == '-') {
    document.writeln("Substraction :", a-b);
}
else if (c == '*') {
    document.writeln("Multiplication:", a*b);
}
else if (c == '/') {
    document.writeln("Division :", a/b);
}

