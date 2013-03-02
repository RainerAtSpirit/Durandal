/// <reference path="../_dts/durandal.d.ts" />
/// <reference path="../_dts/knockout.d.ts" />

import _router = module('durandal/plugins/router');

export  var router =  _router;
export function activate() {
  router.map([
      { url: 'hello', moduleId: 'samples/hello/index', name: 'Hello World', visible: true },
      { url: 'view-composition', moduleId: 'samples/viewComposition/index', name: 'View Composition', visible: true },
      { url: 'modal', moduleId: 'samples/modal/index', name: 'Modal Dialogs', visible: true },
      { url: 'event-aggregator', moduleId: 'samples/eventAggregator/index', name: 'Events', visible: true },
      { url: 'widgets', moduleId: 'samples/widgets/index', name: 'Widgets', visible: true },
      { url: 'master-detail', moduleId: 'samples/masterDetail/index', name: 'Master Detail', visible: true }
  ]);

  return router.activate('hello');
};

