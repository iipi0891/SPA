(function (global) {
    function reduce(array, seed, aggregator) {
        var result = seed;

        array.forEach(function (v) {
            result = aggregator(result, v);
        });

        return result;
    }

    function namespace(name, body) {
        var ns = reduce(name.split('.'), global, function (aggregate, value) {
            return aggregate[value] = aggregate[value] || {};
        });

        body.call(ns);
    }    

    this.namespace = namespace;
})(this);
