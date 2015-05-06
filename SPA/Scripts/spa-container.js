namespace("com.samplespa", function () {

    this.container = function (keySelector) {
        var self = {};

        var currentPageId = ko.observable();

        var pages = ko.observableArray([]);

        pages.index = {};

        function add(pageId, page) {
            page._visible = ko.pureComputed(function () {
                return pageId === currentPageId();
            });

            pages.index[pageId] = page;

            pages.push(page);
        }

        function contains(pageId){
            return pages.index.hasOwnProperty(pageId);
        }

        // EXPORT
        self.pages = pages;
        self.show = currentPageId;
        self.add = add;
        self.contains = contains;

        return self;
    }

});