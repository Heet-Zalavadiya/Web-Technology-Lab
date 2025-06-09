num = parseInt(prompt("Enter a number : "));
digit = 0;
sum = 0;
n = num;
while (n != 0) {
    n = parseInt(n / 10);
    ++digit;
}
// dight = num.toString().length;

n = num;

while (n != 0) {
    temp = n % 10;
    sum = sum + Math.pow(temp, digit);
    n = parseInt(n / 10);
}

if (sum === num) {
    document.writeln("The Entered number is armstrong : ",num);
}
else{
    document.writeln("The Entered number is not armstrong : ",num);
}
