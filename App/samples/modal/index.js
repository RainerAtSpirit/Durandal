define(["require", "exports", 'durandal/app', './customModal'], function(require, exports, __app__, ___CustomModal__) {
    var app = __app__;

    var _CustomModal = ___CustomModal__;

    var CustomModal = _CustomModal.ctor;
    function showCustomModal() {
        app.showModal(new CustomModal()).then(function (response) {
            app.showMessage('You answered "' + response + '".');
        });
    }
    exports.showCustomModal = showCustomModal;
})
