/// <reference path="../../_dts/durandal.d.ts" />
/// <reference path="../../_dts/knockout.d.ts" />

import app = module('durandal/app');
import _CustomModal = module('./customModal');

var CustomModal = _CustomModal.ctor;


  
export function showCustomModal() {
      app.showModal(new CustomModal()).then(function (response) {
        app.showMessage('You answered "' + response + '".');
      });
    }
