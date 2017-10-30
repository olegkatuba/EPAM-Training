let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

console.log("By promises:\n");

let urls = require("./urls");

function httpGet(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            //resolve(url + " Done");
            resolve(this.responseText.slice(0, 100) + " and etc...");
        };

        xhr.onerror = function () {
            reject(new Error());
        };

        console.log("\nSended on " + url);
        xhr.send();
    });

}

module.exports = new Promise((resolve) => {  
    httpGet(urls[0])
        .then((res) => { console.log(res); return httpGet(urls[1])})
        .then((res) => { console.log(res); return httpGet(urls[2])})
        .then((res) => { console.log(res); return httpGet(urls[3])})
        .then((res) => { console.log(res); return httpGet(urls[4])})
        .then((res) => { console.log(res); resolve()});
});
