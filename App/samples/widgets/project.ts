/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />

import system = module('durandal/system');
import app = module('durandal/app');

export class ctor {
  name: string;
  description: string;
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
