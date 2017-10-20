if (performance.navigation.type === 1)
    localStorage.clear();
else{
    var items = document.querySelectorAll("input[type='date'], input[type='time'], select");

    items.forEach((elem) => {
        var name = elem.getAttribute('id');
        elem.value = localStorage.getItem(name) || elem.value;
        elem.onchange = () => localStorage.setItem(name, elem.value);
    });

    document.querySelectorAll("input[type='radio']").forEach((elem) => {
        elem.onchange = () => localStorage.setItem('radioVal', elem.id);
    });

    var radioVal = localStorage.getItem('radioVal');
    if (radioVal)
        document.getElementById(radioVal).checked = true;
}
