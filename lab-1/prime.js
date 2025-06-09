a = parseInt(prompt("Enter a number :"));
flag = 1;

for (let index = 2; index < a; index++) {
    if (a % index == 0) {
        flag = 0;
        break;
    }
}
if (flag == 0) {
    document.writeln("The Entered number is not prime number : " + a);
}
else {
    document.writeln("The Entered number is prime number : " + a);
}