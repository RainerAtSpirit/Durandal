define(["require", "exports", 'durandal/app'], function(require, exports, __app__) {
    var app = __app__;

    exports.name = ko.observable();
    exports.displayName = 'What is your name?';
    exports.canSayHello = ko.computed(function () {
        return exports.name() ? true : false;
    });
    function sayHello() {
        app.showMessage('Hello ' + exports.name() + '!', 'Greetings');
    }
    exports.sayHello = sayHello;
})
