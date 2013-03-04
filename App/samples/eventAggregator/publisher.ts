/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />

import app = module('durandal/app');

export var message = ko.observable();
export var canPublish = ko.computed(function () {
  return message() ? true : false;
});

export function publish () {
  app.trigger('sample:event', message());
}

