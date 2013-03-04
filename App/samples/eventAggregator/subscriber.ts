/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />

import app = module('durandal/app');

export var received = ko.observableArray([]);
export var subscription = ko.observable();
export function subscribe() {

  var sub = app.on('sample:event').then(function (message) {
    this.received.push(message);
  }, this);

  this.subscription(sub);
} ;
export function unsubscribe() {
  this.subscription().off();
  this.subscription(null);
}