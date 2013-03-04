define(["require", "exports", 'durandal/app'], function(require, exports, __app__) {
    var app = __app__;

    exports.message = ko.observable();
    exports.canPublish = ko.computed(function () {
        return exports.message() ? true : false;
    });
    function publish() {
        app.trigger('sample:event', exports.message());
    }
    exports.publish = publish;
})
