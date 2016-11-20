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

var _codeBlock = __webpack_require__(147);

var _codeBlock2 = _interopRequireDefault(_codeBlock);

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
    _this.renderers = Object.assign({}, _2.default.renderers, { CodeBlock: _codeBlock2.default });

    _this.onMarkdownChange = _this.onMarkdownChange.bind(_this);
    _this.onControlsChange = _this.onControlsChange.bind(_this);
    _this.myBodyIsReady = _this.myBodyIsReady.bind(_this);
    return _this;
  }

  _createClass(MarkMyBitchUp, [{
    key: 'onMarkdownChange',
    value: function onMarkdownChange(source) {
      this.setState({ source: source });
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
        _react3.default.createElement(
          'div',
          { className: _style2.default.input },
          _react3.default.createElement(_Edit0r2.default, {
            value: source,
            myBodyIsReady: this.myBodyIsReady,
            onChange: this.onMarkdownChange })
        ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9NYXJrTXlCaXRjaFVwLmpzPzI0NDQiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInNvdXJjZSIsIm1vZGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJlbmRlcmVycyIsIk9iamVjdCIsImFzc2lnbiIsIkNvZGVCbG9jayIsIm9uTWFya2Rvd25DaGFuZ2UiLCJiaW5kIiwib25Db250cm9sc0NoYW5nZSIsIm15Qm9keUlzUmVhZHkiLCJzZXRTdGF0ZSIsIngiLCJNYXRoIiwiYWJzIiwicm9vdCIsImlucHV0Iiwib3V0cHV0IiwiZGlzcGxheU5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx5QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUFBLFVBU25CQyxLQVRtQixHQVNYO0FBQ05DLDJDQURNO0FBRU5DLFlBQU0sS0FGQTtBQUdOQyxhQUFPO0FBQ0xDLG1CQUFXO0FBRE47QUFIRCxLQVRXO0FBQUEsVUFpQm5CQyxTQWpCbUIsR0FpQlBDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFdBQVNGLFNBQTNCLEVBQXNDLEVBQUVHLDhCQUFGLEVBQXRDLENBakJPOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBSmlCO0FBS2xCOzs7O3FDQWNnQlQsTSxFQUFRO0FBQ3ZCLFdBQUtZLFFBQUwsQ0FBYyxFQUFFWixjQUFGLEVBQWQ7QUFDRDs7O3FDQUVnQkMsSSxFQUFNO0FBQ3JCLFdBQUtXLFFBQUwsQ0FBYyxFQUFFWCxVQUFGLEVBQWQ7QUFDRDs7O2tDQUVhWSxDLEVBQUc7QUFDZixXQUFLRCxRQUFMLENBQWMsRUFBQ1YsT0FBTyxFQUFDQyxZQUFjVSxJQUFJLENBQUosR0FBUSxDQUFDQyxLQUFLQyxHQUFMLENBQVNGLENBQVQsQ0FBVCxHQUF1QixDQUFyQyxPQUFELEVBQVIsRUFBZDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDeUIsS0FBS2QsS0FEOUI7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxJQURULFVBQ1NBLElBRFQ7QUFBQSxVQUNlQyxLQURmLFVBQ2VBLEtBRGY7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFJYyxJQUFwQjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVcsZ0JBQUlDLEtBQXBCO0FBQ0U7QUFDRSxtQkFBT2pCLE1BRFQ7QUFFRSwyQkFBZSxLQUFLVyxhQUZ0QjtBQUdFLHNCQUFVLEtBQUtILGdCQUhqQjtBQURGLFNBREY7QUFRRTtBQUNFLHFCQUFXLGdCQUFJVSxNQURqQjtBQUVFLGlCQUFPaEIsS0FGVDtBQUdFLGtCQUFRRixNQUhWO0FBSUUscUJBQVcsS0FBS0ksU0FKbEI7QUFLRSxvQkFBVUgsU0FBUyxNQUxyQjtBQU1FLHNCQUFZQSxTQUFTLFFBTnZCO0FBUkYsT0FERjtBQW1CRDs7Ozs2QkE3Q01rQixXLEdBQWMsZTs7QUFnRHZCLHNCQUFPLDhCQUFDLGFBQUQsT0FBUCxFQUEwQkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUExQixFIiwiZmlsZSI6IjAuNjRkNTQ1M2Y0NDk5YmRjZTI5NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBFZGl0MHIgZnJvbSAnLi9FZGl0MHInXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vY29kZS1ibG9jaydcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi8uLi8nXG5pbXBvcnQgc291cmNlIGZyb20gJy4vcGxhY2Vob2xkZXItbWFya2Rvd24nXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBNYXJrTXlCaXRjaFVwIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25NYXJrZG93bkNoYW5nZSA9IHRoaXMub25NYXJrZG93bkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNvbnRyb2xzQ2hhbmdlID0gdGhpcy5vbkNvbnRyb2xzQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm15Qm9keUlzUmVhZHkgPSB0aGlzLm15Qm9keUlzUmVhZHkuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ01hcmtNeUJpdGNoVXAnXG5cbiAgc3RhdGUgPSB7XG4gICAgc291cmNlLFxuICAgIG1vZGU6ICdyYXcnLFxuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6IDBcbiAgICB9XG4gIH1cblxuICByZW5kZXJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBNYXJrZG93bi5yZW5kZXJlcnMsIHsgQ29kZUJsb2NrIH0pXG5cbiAgb25NYXJrZG93bkNoYW5nZShzb3VyY2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc291cmNlIH0pXG4gIH1cblxuICBvbkNvbnRyb2xzQ2hhbmdlKG1vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kZSB9KVxuICB9XG5cbiAgbXlCb2R5SXNSZWFkeSh4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHttYXJnaW5Ub3A6IGAke3ggPiAwID8gLU1hdGguYWJzKHgpIDogMH0lYH19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc291cmNlLCBtb2RlLCBzdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmlucHV0fT5cbiAgICAgICAgICA8RWRpdDByXG4gICAgICAgICAgICB2YWx1ZT17c291cmNlfVxuICAgICAgICAgICAgbXlCb2R5SXNSZWFkeT17dGhpcy5teUJvZHlJc1JlYWR5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NYXJrZG93bkNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Mub3V0cHV0fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgICAgICByZW5kZXJlcnM9e3RoaXMucmVuZGVyZXJzfVxuICAgICAgICAgIHNraXBIdG1sPXttb2RlID09PSAnc2tpcCd9XG4gICAgICAgICAgZXNjYXBlSHRtbD17bW9kZSA9PT0gJ2VzY2FwZSd9IC8+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5yZW5kZXIoPE1hcmtNeUJpdGNoVXAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9NYXJrTXlCaXRjaFVwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==