function createList() {
    source = [];
    return function() {
        if (!arguments.length) {
            return source;
        }
        source = source.concat(...arguments);
    }
}

var list = createList();
list(1, 2);
list('Hello');
list({a: 1}, 'Some string');
console.log(list());
