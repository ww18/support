'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by ww on 2018/3/27.
 */
var PraiseButton = function () {
    function PraiseButton() {
        _classCallCheck(this, PraiseButton);

        this.html = '';
        this.createEle();
    }

    _createClass(PraiseButton, [{
        key: 'createEle',
        value: function createEle() {
            var arr = ['support-thumb', 'support-indexfinger', 'support-middlefinger', 'support-ringfinger', 'support-litterfinger', 'support-hand', 'support-arm'];
            var divContainer = document.createElement('div');
            divContainer.className = 'support-container';
            arr.forEach(function (item, index) {
                var ele = document.createElement('div');
                ele.className = item;
                divContainer.appendChild(ele);
            });
            this.html = divContainer;
        }
    }]);

    return PraiseButton;
}();

exports.default = PraiseButton;