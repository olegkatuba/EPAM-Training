import './style.scss';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');

    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = () => {
        printMe();
        console.log("click");
    };
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        printMe();
    })
}