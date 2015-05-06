namespace("com.samplespa.pages", function () {
    this.page2 = function (controller) {
        function jump() {
            controller.show('page3');
        }

        return {
            jump: jump
        }
    }
});