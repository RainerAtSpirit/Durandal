define(["require", "exports", 'durandal/plugins/router'], function(require, exports, ___router__) {
    var _router = ___router__;

    exports.router = _router;
    function activate() {
        exports.router.map([
            {
                url: 'hello',
                moduleId: 'samples/hello/index',
                name: 'Hello World',
                visible: true
            }, 
            {
                url: 'view-composition',
                moduleId: 'samples/viewComposition/index',
                name: 'View Composition',
                visible: true
            }, 
            {
                url: 'modal',
                moduleId: 'samples/modal/index',
                name: 'Modal Dialogs',
                visible: true
            }, 
            {
                url: 'event-aggregator',
                moduleId: 'samples/eventAggregator/index',
                name: 'Events',
                visible: true
            }, 
            {
                url: 'widgets',
                moduleId: 'samples/widgets/index',
                name: 'Widgets',
                visible: true
            }, 
            {
                url: 'master-detail',
                moduleId: 'samples/masterDetail/index',
                name: 'Master Detail',
                visible: true
            }
        ]);
        return exports.router.activate('hello');
    }
    exports.activate = activate;
    ;
})
