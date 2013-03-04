/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />
import app = module('durandal/app');



export class CustomModal {
  modal: any;
  input = ko.observable('');

  
  ok() {
    this.modal.close(this.input());
  };

  canDeactivate() {
    return app.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
  };

}