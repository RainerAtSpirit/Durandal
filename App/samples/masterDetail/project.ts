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

  canActivate() {
    return app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
  }

  activate() {
    system.log('Model Activating', this);
  };

  canDeactivate() {
    return app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
  };

  deactivate() {
    system.log('Model Deactivating', this);
  };
  
  }
