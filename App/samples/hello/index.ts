/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />

import app = module('durandal/app');

export var name = ko.observable();
export var displayName = 'What is your name?';

export var canSayHello = ko.computed(function () {
  return name() ? true : false;
})

export function sayHello() {
  app.showMessage('Hello ' + name() + '!', 'Greetings');
}
