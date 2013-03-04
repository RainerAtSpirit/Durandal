define(["require", "exports", 'durandal/app'], function(require, exports, __app__) {
    var app = __app__;

    exports.received = ko.observableArray([]);
    exports.subscription = ko.observable();
    function subscribe() {
        var sub = app.on('sample:event').then(function (message) {
            this.received.push(message);
        }, this);
        this.subscription(sub);
    }
    exports.subscribe = subscribe;
    ;
    function unsubscribe() {
        this.subscription().off();
        this.subscription(null);
    }
    exports.unsubscribe = unsubscribe;
})
