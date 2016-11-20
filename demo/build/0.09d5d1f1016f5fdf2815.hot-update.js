webpackHotUpdate(0,{

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(36);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(14);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(37);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _reactDom = __webpack_require__(114);

var _Edit0r = __webpack_require__(146);

var _Edit0r2 = _interopRequireDefault(_Edit0r);

var _CodeBlock = __webpack_require__(387);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _ = __webpack_require__(149);

var _2 = _interopRequireDefault(_);

var _placeholderMarkdown = __webpack_require__(148);

var _placeholderMarkdown2 = _interopRequireDefault(_placeholderMarkdown);

var _style = __webpack_require__(83);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MarkMyBitchUp: {
    displayName: 'MarkMyBitchUp'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/MarkMyBitchUp.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/MarkMyBitchUp.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var MarkMyBitchUp = _wrapComponent('MarkMyBitchUp')((_temp = _class = function (_Component) {
  _inherits(MarkMyBitchUp, _Component);

  function MarkMyBitchUp(props) {
    _classCallCheck(this, MarkMyBitchUp);

    var _this = _possibleConstructorReturn(this, (MarkMyBitchUp.__proto__ || Object.getPrototypeOf(MarkMyBitchUp)).call(this, props));

    _this.state = {
      source: _placeholderMarkdown2.default,
      mode: 'raw',
      style: {
        marginTop: 0
      }
    };
    _this.renderers = Object.assign({}, _2.default.renderers, { CodeBlock: _CodeBlock2.default });

    _this.onMarkdownChange = _this.onMarkdownChange.bind(_this);
    _this.onControlsChange = _this.onControlsChange.bind(_this);
    _this.myBodyIsReady = _this.myBodyIsReady.bind(_this);
    return _this;
  }

  _createClass(MarkMyBitchUp, [{
    key: 'onMarkdownChange',
    value: function onMarkdownChange(e) {
      this.setState({ source: e.target.value });
    }
  }, {
    key: 'onControlsChange',
    value: function onControlsChange(mode) {
      this.setState({ mode: mode });
    }
  }, {
    key: 'myBodyIsReady',
    value: function myBodyIsReady(x) {
      this.setState({ style: { marginTop: (x > 0 ? -Math.abs(x) : 0) + '%' } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          source = _state.source,
          mode = _state.mode,
          style = _state.style;

      return _react3.default.createElement(
        'div',
        { className: _style2.default.root },
        _react3.default.createElement(CodeMirror, {
          value: source,
          myBodyIsReady: this.myBodyIsReady,
          onChange: this.onMarkdownChange }),
        _react3.default.createElement(_2.default, {
          className: _style2.default.output,
          style: style,
          source: source,
          renderers: this.renderers,
          skipHtml: mode === 'skip',
          escapeHtml: mode === 'escape' })
      );
    }
  }]);

  return MarkMyBitchUp;
}(_react2.Component), _class.displayName = 'MarkMyBitchUp', _temp));

(0, _reactDom.render)(_react3.default.createElement(MarkMyBitchUp, null), document.getElementById('app'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9NYXJrTXlCaXRjaFVwLmpzPzI0NDQiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInNvdXJjZSIsIm1vZGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJlbmRlcmVycyIsIk9iamVjdCIsImFzc2lnbiIsIkNvZGVCbG9jayIsIm9uTWFya2Rvd25DaGFuZ2UiLCJiaW5kIiwib25Db250cm9sc0NoYW5nZSIsIm15Qm9keUlzUmVhZHkiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJNYXRoIiwiYWJzIiwicm9vdCIsIm91dHB1dCIsImRpc3BsYXlOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UseUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQSxVQVNuQkMsS0FUbUIsR0FTWDtBQUNOQywyQ0FETTtBQUVOQyxZQUFNLEtBRkE7QUFHTkMsYUFBTztBQUNMQyxtQkFBVztBQUROO0FBSEQsS0FUVztBQUFBLFVBaUJuQkMsU0FqQm1CLEdBaUJQQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixXQUFTRixTQUEzQixFQUFzQyxFQUFFRyw4QkFBRixFQUF0QyxDQWpCTzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXhCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztxQ0FjZ0JHLEMsRUFBRztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ2IsUUFBUVksRUFBRUUsTUFBRixDQUFTQyxLQUFsQixFQUFkO0FBQ0Q7OztxQ0FFZ0JkLEksRUFBTTtBQUNyQixXQUFLWSxRQUFMLENBQWMsRUFBRVosVUFBRixFQUFkO0FBQ0Q7OztrQ0FFYWUsQyxFQUFHO0FBQ2YsV0FBS0gsUUFBTCxDQUFjLEVBQUNYLE9BQU8sRUFBQ0MsWUFBY2EsSUFBSSxDQUFKLEdBQVEsQ0FBQ0MsS0FBS0MsR0FBTCxDQUFTRixDQUFULENBQVQsR0FBdUIsQ0FBckMsT0FBRCxFQUFSLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3lCLEtBQUtqQixLQUQ5QjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLElBRFQsVUFDU0EsSUFEVDtBQUFBLFVBQ2VDLEtBRGYsVUFDZUEsS0FEZjs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsZ0JBQUlpQixJQUFwQjtBQUNFLHNDQUFDLFVBQUQ7QUFDRSxpQkFBT25CLE1BRFQ7QUFFRSx5QkFBZSxLQUFLVyxhQUZ0QjtBQUdFLG9CQUFVLEtBQUtILGdCQUhqQixHQURGO0FBS0U7QUFDRSxxQkFBVyxnQkFBSVksTUFEakI7QUFFRSxpQkFBT2xCLEtBRlQ7QUFHRSxrQkFBUUYsTUFIVjtBQUlFLHFCQUFXLEtBQUtJLFNBSmxCO0FBS0Usb0JBQVVILFNBQVMsTUFMckI7QUFNRSxzQkFBWUEsU0FBUyxRQU52QjtBQUxGLE9BREY7QUFlRDs7Ozs2QkF6Q01vQixXLEdBQWMsZTs7QUE0Q3ZCLHNCQUFPLDhCQUFDLGFBQUQsT0FBUCxFQUEwQkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUExQixFIiwiZmlsZSI6IjAuMDlkNWQxZjEwMTZmNWZkZjI4MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBFZGl0MHIgZnJvbSAnLi9FZGl0MHInXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vQ29kZUJsb2NrJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uLy4uLydcbmltcG9ydCBzb3VyY2UgZnJvbSAnLi9wbGFjZWhvbGRlci1tYXJrZG93bidcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNsYXNzIE1hcmtNeUJpdGNoVXAgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbk1hcmtkb3duQ2hhbmdlID0gdGhpcy5vbk1hcmtkb3duQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udHJvbHNDaGFuZ2UgPSB0aGlzLm9uQ29udHJvbHNDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMubXlCb2R5SXNSZWFkeSA9IHRoaXMubXlCb2R5SXNSZWFkeS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnTWFya015Qml0Y2hVcCdcblxuICBzdGF0ZSA9IHtcbiAgICBzb3VyY2UsXG4gICAgbW9kZTogJ3JhdycsXG4gICAgc3R5bGU6IHtcbiAgICAgIG1hcmdpblRvcDogMFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcmVycyA9IE9iamVjdC5hc3NpZ24oe30sIE1hcmtkb3duLnJlbmRlcmVycywgeyBDb2RlQmxvY2sgfSlcblxuICBvbk1hcmtkb3duQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzb3VyY2U6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIG9uQ29udHJvbHNDaGFuZ2UobW9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlIH0pXG4gIH1cblxuICBteUJvZHlJc1JlYWR5KHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHlsZToge21hcmdpblRvcDogYCR7eCA+IDAgPyAtTWF0aC5hYnMoeCkgOiAwfSVgfX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb3VyY2UsIG1vZGUsIHN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mucm9vdH0+XG4gICAgICAgIDxDb2RlTWlycm9yXG4gICAgICAgICAgdmFsdWU9e3NvdXJjZX1cbiAgICAgICAgICBteUJvZHlJc1JlYWR5PXt0aGlzLm15Qm9keUlzUmVhZHl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NYXJrZG93bkNoYW5nZX0gLz5cbiAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Mub3V0cHV0fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgICAgICByZW5kZXJlcnM9e3RoaXMucmVuZGVyZXJzfVxuICAgICAgICAgIHNraXBIdG1sPXttb2RlID09PSAnc2tpcCd9XG4gICAgICAgICAgZXNjYXBlSHRtbD17bW9kZSA9PT0gJ2VzY2FwZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxucmVuZGVyKDxNYXJrTXlCaXRjaFVwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvTWFya015Qml0Y2hVcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=