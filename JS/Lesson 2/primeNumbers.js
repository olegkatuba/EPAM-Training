var a = parseInt(prompt("Count of prime numbers", "10"));

var arr = [];
var num = 1;

while (arr.length < a) {
    num++;
    for (var i = 2; i < num; i++)
        if (!(num % i))
            break;
    if (i === num)
        arr.push(num);
}

document.write(arr.length ? a + " first prime numbers: " + arr : "Wrong input");