(function () {
    var ns = using("com.travelalberta");
    var pages = using("com.travelalberta.pages");

    // create controller
    var controller = ns.controller();

    // register pages
    controller.addPage({ id: 'page1', title: 'Page 1', page: pages.page1(controller) });
    controller.addPage({ id: 'page2', title: 'Page 2', page: pages.page2(controller) });
    controller.addPage({ id: 'page3', title: 'Page 3', page: pages.page3(controller) });

    // apply bindings
    ko.applyBindings(controller);

    // set default page
    controller.showPage("page1");
})();