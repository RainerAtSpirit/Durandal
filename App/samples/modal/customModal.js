define(["require", "exports", 'durandal/app'], function(require, exports, __app__) {
    var app = __app__;

    var ctor = (function () {
        function ctor() {
            this.input = ko.observable('');
        }
        ctor.prototype.ok = function () {
            this.modal.close(this.input());
        };
        ctor.prototype.canDeactivate = function () {
            return app.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', [
                'Yes', 
                'No'
            ]);
        };
        return ctor;
    })();
    exports.ctor = ctor;    
})
