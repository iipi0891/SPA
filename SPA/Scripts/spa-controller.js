namespace("com.samplespa", function () {

    this.controller = function () {
        var self = {};

        var pageTypes = {};

        var container = com.samplespa.container(function (page) { return page.id; });

        function registerPage(pageType) {
            pageTypes[pageType.id] = pageType;
        }

        function show(pageId, args) {
            if (!container.contains(pageId)) {
                var type = pageTypes[pageId];

                var page = type.ctor(self);

                page._id = pageId;

                page._title = type.title;

                container.add(pageId, page);
            }

            var page = container.pages.index[pageId];

            page.init && page.init();

            page.load && page.load(args);

            container.show(pageId);
        }

        function template(page) {
            return page._id;
        }

        // EXPORT
        self.pages = container.pages;
        self.registerPage = registerPage;
        self.show = show;
        self.template = template;

        return self;
    }

});