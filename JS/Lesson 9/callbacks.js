var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

console.log("\nBy callbacks:\n");

let urls = require("./urls");

function httpGet(url, afterLoad) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
        //console.log(url + " Done");
        console.log(this.responseText.slice(0, 100) + " and etc...");
        afterLoad && afterLoad();
    };
    
    xhr.onerror = () => {
        console.log(xhr.status + ': ' + xhr.statusText);
    };
    console.log("\nSended on " + url);
    xhr.send();
}

httpGet(urls[0], () => { 
    httpGet(urls[1], () => {
        httpGet(urls[2], () => {
            httpGet(urls[3], () => {
                httpGet(urls[4]);
            });
        });
    });
});