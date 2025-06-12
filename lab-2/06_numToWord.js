let num = parseInt(prompt("Enter value of number in the range 0 to 999 : "));
if (num.isNaN) {
    document.writeln("not a number");

}
if (num > 999 || num < 0) {
    document.writeln("out of range");
}

else {
    if (num >= 100) {
        result += a[Math.floor(num / 100)] + " hundred ";
        num = num % 100;
    }
    if (num >= 20 && num < 100) {
        result += c[Math.floor(num / 10)] + " ";
        num = num % 10;
    }
    if (num >= 10 && num < 20) {
        result += b[num - 10] + " ";
        num = 0;
    }    
}
