namespace("com.travelalberta", function () {

    this.controller = function () {
        var pages = {};

        var currentPageId = ko.observable();

        function addPage(pageDefinition) {
            pages[pageDefinition.id] = pageDefinition;

            pageDefinition.visible = ko.pureComputed(function() {
                return pageDefinition.id === currentPageId();
            });
        }

        function showPage(pageId) {
            currentPageId(pageId);
        }

        return {
            pages: pages,

            addPage: addPage,

            showPage: showPage
        };
    }

});