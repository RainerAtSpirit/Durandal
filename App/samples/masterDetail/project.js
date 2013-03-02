define(["require", "exports", 'durandal/system', 'durandal/app'], function(require, exports, __system__, __app__) {
    var system = __system__;

    var app = __app__;

    var ctor = (function () {
        function ctor(name, description) {
            this.name = name;
            this.description = description;
        }
        ctor.prototype.canActivate = function () {
            return app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', [
                'Yes', 
                'No'
            ]);
        };
        ctor.prototype.activate = function () {
            system.log('Model Activating', this);
        };
        ctor.prototype.canDeactivate = function () {
            return app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', [
                'Yes', 
                'No'
            ]);
        };
        ctor.prototype.deactivate = function () {
            system.log('Model Deactivating', this);
        };
        return ctor;
    })();
    exports.ctor = ctor;    
})
