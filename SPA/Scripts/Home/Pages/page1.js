namespace("com.travelalberta.pages", function () {
    this.page1 = function (controller) {
        function jump() {
            controller.show('page2');
        }

        return {
            jump: jump
        }
    }
});