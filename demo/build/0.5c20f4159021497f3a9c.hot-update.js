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
        _react3.default.createElement(_Edit0r2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9NYXJrTXlCaXRjaFVwLmpzPzI0NDQiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInNvdXJjZSIsIm1vZGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJlbmRlcmVycyIsIk9iamVjdCIsImFzc2lnbiIsIkNvZGVCbG9jayIsIm9uTWFya2Rvd25DaGFuZ2UiLCJiaW5kIiwib25Db250cm9sc0NoYW5nZSIsIm15Qm9keUlzUmVhZHkiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJNYXRoIiwiYWJzIiwicm9vdCIsIm91dHB1dCIsImRpc3BsYXlOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UseUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQSxVQVNuQkMsS0FUbUIsR0FTWDtBQUNOQywyQ0FETTtBQUVOQyxZQUFNLEtBRkE7QUFHTkMsYUFBTztBQUNMQyxtQkFBVztBQUROO0FBSEQsS0FUVztBQUFBLFVBaUJuQkMsU0FqQm1CLEdBaUJQQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixXQUFTRixTQUEzQixFQUFzQyxFQUFFRyw4QkFBRixFQUF0QyxDQWpCTzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXhCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztxQ0FjZ0JHLEMsRUFBRztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ2IsUUFBUVksRUFBRUUsTUFBRixDQUFTQyxLQUFsQixFQUFkO0FBQ0Q7OztxQ0FFZ0JkLEksRUFBTTtBQUNyQixXQUFLWSxRQUFMLENBQWMsRUFBRVosVUFBRixFQUFkO0FBQ0Q7OztrQ0FFYWUsQyxFQUFHO0FBQ2YsV0FBS0gsUUFBTCxDQUFjLEVBQUNYLE9BQU8sRUFBQ0MsWUFBY2EsSUFBSSxDQUFKLEdBQVEsQ0FBQ0MsS0FBS0MsR0FBTCxDQUFTRixDQUFULENBQVQsR0FBdUIsQ0FBckMsT0FBRCxFQUFSLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3lCLEtBQUtqQixLQUQ5QjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLElBRFQsVUFDU0EsSUFEVDtBQUFBLFVBQ2VDLEtBRGYsVUFDZUEsS0FEZjs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsZ0JBQUlpQixJQUFwQjtBQUNFO0FBQ0UsaUJBQU9uQixNQURUO0FBRUUseUJBQWUsS0FBS1csYUFGdEI7QUFHRSxvQkFBVSxLQUFLSCxnQkFIakIsR0FERjtBQUtFO0FBQ0UscUJBQVcsZ0JBQUlZLE1BRGpCO0FBRUUsaUJBQU9sQixLQUZUO0FBR0Usa0JBQVFGLE1BSFY7QUFJRSxxQkFBVyxLQUFLSSxTQUpsQjtBQUtFLG9CQUFVSCxTQUFTLE1BTHJCO0FBTUUsc0JBQVlBLFNBQVMsUUFOdkI7QUFMRixPQURGO0FBZUQ7Ozs7NkJBekNNb0IsVyxHQUFjLGU7O0FBNEN2QixzQkFBTyw4QkFBQyxhQUFELE9BQVAsRUFBMEJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBMUIsRSIsImZpbGUiOiIwLjVjMjBmNDE1OTAyMTQ5N2YzYTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgRWRpdDByIGZyb20gJy4vRWRpdDByJ1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuL0NvZGVCbG9jaydcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi8uLi8nXG5pbXBvcnQgc291cmNlIGZyb20gJy4vcGxhY2Vob2xkZXItbWFya2Rvd24nXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBNYXJrTXlCaXRjaFVwIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25NYXJrZG93bkNoYW5nZSA9IHRoaXMub25NYXJrZG93bkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNvbnRyb2xzQ2hhbmdlID0gdGhpcy5vbkNvbnRyb2xzQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm15Qm9keUlzUmVhZHkgPSB0aGlzLm15Qm9keUlzUmVhZHkuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ01hcmtNeUJpdGNoVXAnXG5cbiAgc3RhdGUgPSB7XG4gICAgc291cmNlLFxuICAgIG1vZGU6ICdyYXcnLFxuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6IDBcbiAgICB9XG4gIH1cblxuICByZW5kZXJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBNYXJrZG93bi5yZW5kZXJlcnMsIHsgQ29kZUJsb2NrIH0pXG5cbiAgb25NYXJrZG93bkNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c291cmNlOiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBvbkNvbnRyb2xzQ2hhbmdlKG1vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kZSB9KVxuICB9XG5cbiAgbXlCb2R5SXNSZWFkeSh4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHttYXJnaW5Ub3A6IGAke3ggPiAwID8gLU1hdGguYWJzKHgpIDogMH0lYH19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc291cmNlLCBtb2RlLCBzdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJvb3R9PlxuICAgICAgICA8RWRpdDByXG4gICAgICAgICAgdmFsdWU9e3NvdXJjZX1cbiAgICAgICAgICBteUJvZHlJc1JlYWR5PXt0aGlzLm15Qm9keUlzUmVhZHl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NYXJrZG93bkNoYW5nZX0gLz5cbiAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Mub3V0cHV0fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgICAgICByZW5kZXJlcnM9e3RoaXMucmVuZGVyZXJzfVxuICAgICAgICAgIHNraXBIdG1sPXttb2RlID09PSAnc2tpcCd9XG4gICAgICAgICAgZXNjYXBlSHRtbD17bW9kZSA9PT0gJ2VzY2FwZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxucmVuZGVyKDxNYXJrTXlCaXRjaFVwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvTWFya015Qml0Y2hVcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=