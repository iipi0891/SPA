(function(global) {
    function reduce(array, seed, aggregator) {
        var result = seed;

        array.forEach(function(v) {
            result = aggregator(result, v);
        });

        return result;
    }

    function using(name) {
        return reduce(name.split('.'), global, function(aggregate, value) {
            return aggregate[value];
        });
    }

    function namespace(name, body) {
        var ns = reduce(name.split('.'), global, function(aggregate, value) {
            return aggregate[value] = aggregate[value] || {};
        });

        body.call(ns);
    }

    this.using = using;

    this.namespace = namespace;
})(this);

