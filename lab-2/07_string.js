let str = prompt("Enter value of vowel : ");
let f = str.indexOf('a');
let l = str.lastIndexOf('a');

document.writeln(str.substring(f + 1, l));