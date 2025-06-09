num = parseInt(prompt("Enter a number : "));
reverse = 0;
const a = num;

while (num != 0) {
    digit = num % 10;
    reverse = reverse * 10 + digit;
    num = num / 10;
}

if (reverse == a) {
    document.writeln("number is plaindrom : ", a);
}
else {
    document.writeln("number is not plaindrom : ", a);
}
