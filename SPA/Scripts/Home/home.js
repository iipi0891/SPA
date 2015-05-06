(function () {
    var ns = com.samplespa;
    var pages = com.samplespa.pages;

    // create controller
    var controller = ns.controller();

    // register pages
    controller.registerPage({ id: 'page1', title: 'Page 1', ctor: pages.page1 });
    controller.registerPage({ id: 'page2', title: 'Page 2', ctor: pages.page2 });
    controller.registerPage({ id: 'page3', title: 'Page 3', ctor: pages.page3 });

    // apply bindings
    ko.applyBindings(controller, document.getElementById("root"));

    // set default page
    controller.show("page1");
})();