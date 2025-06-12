let num = parseInt(prompt("Enter 2 digit number : "));
// let exp = 0;
// let base = 0;
// for (let i = 0; i < 2; i++) {
//     if (i == 0) {
//         exp = num % 10;
//     }
//     else {
//         base = num % 10;
//     }
//     num = num / 10;
// }
// 23
power = num % 10
num = parseInt(num / 10)
document.writeln(Math.pow(num, power));