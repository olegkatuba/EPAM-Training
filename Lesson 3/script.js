more.onclick = function() {
    items.style.fontSize = parseInt(getComputedStyle(items, '').fontSize) + 20 + 'px';
};

less.onclick = function() {
    items.style.fontSize = parseInt(getComputedStyle(items, '').fontSize) - 20 + 'px';
};

var divs = document.querySelectorAll('article > div');

for(var i = 0; i < divs.length; i++){
    setTimeout(function(divs, i) {
        divs[i].style.fontSize = (Math.pow(0.7, i)) + 'em';
        divs[i].style.left = '0px';
    }, i * 100, divs, i);
}
