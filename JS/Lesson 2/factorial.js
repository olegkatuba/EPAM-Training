var a = parseInt(prompt("Number to calculate factorial", "10"));

var fact = 1;
if (a === a && a >= 0) {
    for (var i = 2; i <= a; i++)
        fact *= i;
    document.write("Factorial of ", a, " is ", fact);
}
else
    document.write("Factorial of ", a, " is indefined");