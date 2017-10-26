function Renderer(root, model, template) {
    this._root = root;
    this._model = model;
    this._template = template;
}

Renderer.prototype.render = function () {
    let templ = this._template;
    // render __for__ attribute
    templ = templ.replace(/<[a-z][a-z0-9]*.*?__for__=["']\w+:\w+\(\w*\)['"].*?>.*?<\/[a-z][a-z0-9]*>/gi, (str) => {
        let params = str.match(/__for__=["']\w+:\w+\(\w*\)['"]/)[0].match(/\w+:\w+\(\w*\)/)[0].split(":");
        let fun = params[1].replace(/\(\.*\)/g, "");
        let args = params[1].match(/\(.*\)/)[0].replace(/[() ]/g, "").split(",");
        let arr = this._model[fun](...args);
        str = str.replace(/__for__=["']\w+:\w+\(\w*\)['"]/gi, "");
        let result = "";
        let regExp = new RegExp(`{{${params[0]}}}`, "g");
        for (let i = 0; i < arr.length; i++)
            result += str.replace(regExp, arr[i])
        return result;
    });
    // render __if__ attribute
    templ = templ.replace(/__if__=["']\w+\(\w*\):\w+['"]/gi, (str) => {
        let params = str.match(/\w+\(\w*\):\w+/)[0].split(":");
        let fun = params[0].replace(/\(.*\)/g, "");
        let args = params[0].match(/\(.*\)/)[0].replace(/[() ]/g, "").split(",");
        if(this._model[fun](...args))
            return params[1];
        else
            return "";
    });
    // render functions in {{ }}
    templ = templ.replace(/{{\w+\(\w*\)}}/g, (str) => {
        let fun = str.replace(/[{}]/g, "").replace(/\(.*\)/g, "");
        let args = str.match(/\(.*\)/)[0].replace(/[() ]/g, "").split(",");
        return this._model[fun](...args);
    });


    document.querySelector(this._root).innerHTML = templ;
};
