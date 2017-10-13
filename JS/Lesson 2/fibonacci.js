var a = parseInt(prompt("Count of fibonacci numbers", "10"));
var arr = [0, 1];
if(a === a)
    for (var i = 2; i < a; i++)
        arr.push(arr[i-1] + arr[i-2]);
else
    arr = "Wrong input";
document.write(a + " first fibonacci numbers: " + arr);