webpackHotUpdate(0,{

/***/ 140:
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

var _reactDom = __webpack_require__(113);

var _Edit0r = __webpack_require__(145);

var _Edit0r2 = _interopRequireDefault(_Edit0r);

var _codeBlock = __webpack_require__(146);

var _codeBlock2 = _interopRequireDefault(_codeBlock);

var _ = __webpack_require__(148);

var _2 = _interopRequireDefault(_);

var _placeholderMarkdown = __webpack_require__(147);

var _placeholderMarkdown2 = _interopRequireDefault(_placeholderMarkdown);

var _style = __webpack_require__(382);

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
          { className: 'editor-pane' },
          _react3.default.createElement(_Edit0r2.default, {
            value: source,
            myBodyIsReady: this.myBodyIsReady,
            onChange: this.onMarkdownChange })
        ),
        _react3.default.createElement(
          'div',
          { className: _style2.default.output },
          _react3.default.createElement(_2.default, {
            className: _style2.default.markdown,
            style: style,
            source: source,
            renderers: this.renderers,
            skipHtml: mode === 'skip',
            escapeHtml: mode === 'escape' })
        )
      );
    }
  }]);

  return MarkMyBitchUp;
}(_react2.Component), _class.displayName = 'MarkMyBitchUp', _temp));

(0, _reactDom.render)(_react3.default.createElement(MarkMyBitchUp, null), document.getElementById('main'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9NYXJrTXlCaXRjaFVwLmpzPzI0NDQiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInNvdXJjZSIsIm1vZGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJlbmRlcmVycyIsIk9iamVjdCIsImFzc2lnbiIsIkNvZGVCbG9jayIsIm9uTWFya2Rvd25DaGFuZ2UiLCJiaW5kIiwib25Db250cm9sc0NoYW5nZSIsIm15Qm9keUlzUmVhZHkiLCJzZXRTdGF0ZSIsIngiLCJNYXRoIiwiYWJzIiwicm9vdCIsIm91dHB1dCIsIm1hcmtkb3duIiwiZGlzcGxheU5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx5QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUFBLFVBU25CQyxLQVRtQixHQVNYO0FBQ05DLDJDQURNO0FBRU5DLFlBQU0sS0FGQTtBQUdOQyxhQUFPO0FBQ0xDLG1CQUFXO0FBRE47QUFIRCxLQVRXO0FBQUEsVUFpQm5CQyxTQWpCbUIsR0FpQlBDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFdBQVNGLFNBQTNCLEVBQXNDLEVBQUVHLDhCQUFGLEVBQXRDLENBakJPOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBSmlCO0FBS2xCOzs7O3FDQWNnQlQsTSxFQUFRO0FBQ3ZCLFdBQUtZLFFBQUwsQ0FBYyxFQUFFWixjQUFGLEVBQWQ7QUFDRDs7O3FDQUVnQkMsSSxFQUFNO0FBQ3JCLFdBQUtXLFFBQUwsQ0FBYyxFQUFFWCxVQUFGLEVBQWQ7QUFDRDs7O2tDQUVhWSxDLEVBQUc7QUFDZixXQUFLRCxRQUFMLENBQWMsRUFBQ1YsT0FBTyxFQUFDQyxZQUFjVSxJQUFJLENBQUosR0FBUSxDQUFDQyxLQUFLQyxHQUFMLENBQVNGLENBQVQsQ0FBVCxHQUF1QixDQUFyQyxPQUFELEVBQVIsRUFBZDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDeUIsS0FBS2QsS0FEOUI7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxJQURULFVBQ1NBLElBRFQ7QUFBQSxVQUNlQyxLQURmLFVBQ2VBLEtBRGY7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFJYyxJQUFwQjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFO0FBQ0UsbUJBQU9oQixNQURUO0FBRUUsMkJBQWUsS0FBS1csYUFGdEI7QUFHRSxzQkFBVSxLQUFLSCxnQkFIakI7QUFERixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVyxnQkFBSVMsTUFBcEI7QUFDRTtBQUNFLHVCQUFXLGdCQUFJQyxRQURqQjtBQUVFLG1CQUFPaEIsS0FGVDtBQUdFLG9CQUFRRixNQUhWO0FBSUUsdUJBQVcsS0FBS0ksU0FKbEI7QUFLRSxzQkFBVUgsU0FBUyxNQUxyQjtBQU1FLHdCQUFZQSxTQUFTLFFBTnZCO0FBREY7QUFQRixPQURGO0FBbUJEOzs7OzZCQTdDTWtCLFcsR0FBYyxlOztBQWdEdkIsc0JBQU8sOEJBQUMsYUFBRCxPQUFQLEVBQTBCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQTFCLEUiLCJmaWxlIjoiMC5kMGMwZDRhNzc5NjJhNzM5MTFkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEVkaXQwciBmcm9tICcuL0VkaXQwcidcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi9jb2RlLWJsb2NrJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uLy4uLydcbmltcG9ydCBzb3VyY2UgZnJvbSAnLi9wbGFjZWhvbGRlci1tYXJrZG93bidcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNsYXNzIE1hcmtNeUJpdGNoVXAgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbk1hcmtkb3duQ2hhbmdlID0gdGhpcy5vbk1hcmtkb3duQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udHJvbHNDaGFuZ2UgPSB0aGlzLm9uQ29udHJvbHNDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMubXlCb2R5SXNSZWFkeSA9IHRoaXMubXlCb2R5SXNSZWFkeS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnTWFya015Qml0Y2hVcCdcblxuICBzdGF0ZSA9IHtcbiAgICBzb3VyY2UsXG4gICAgbW9kZTogJ3JhdycsXG4gICAgc3R5bGU6IHtcbiAgICAgIG1hcmdpblRvcDogMFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcmVycyA9IE9iamVjdC5hc3NpZ24oe30sIE1hcmtkb3duLnJlbmRlcmVycywgeyBDb2RlQmxvY2sgfSlcblxuICBvbk1hcmtkb3duQ2hhbmdlKHNvdXJjZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3VyY2UgfSlcbiAgfVxuXG4gIG9uQ29udHJvbHNDaGFuZ2UobW9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlIH0pXG4gIH1cblxuICBteUJvZHlJc1JlYWR5KHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHlsZToge21hcmdpblRvcDogYCR7eCA+IDAgPyAtTWF0aC5hYnMoeCkgOiAwfSVgfX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb3VyY2UsIG1vZGUsIHN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZGl0b3ItcGFuZSc+XG4gICAgICAgICAgPEVkaXQwclxuICAgICAgICAgICAgdmFsdWU9e3NvdXJjZX1cbiAgICAgICAgICAgIG15Qm9keUlzUmVhZHk9e3RoaXMubXlCb2R5SXNSZWFkeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWFya2Rvd25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm91dHB1dH0+XG4gICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5tYXJrZG93bn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNvdXJjZT17c291cmNlfVxuICAgICAgICAgICAgcmVuZGVyZXJzPXt0aGlzLnJlbmRlcmVyc31cbiAgICAgICAgICAgIHNraXBIdG1sPXttb2RlID09PSAnc2tpcCd9XG4gICAgICAgICAgICBlc2NhcGVIdG1sPXttb2RlID09PSAnZXNjYXBlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxucmVuZGVyKDxNYXJrTXlCaXRjaFVwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL01hcmtNeUJpdGNoVXAuanMiXSwic291cmNlUm9vdCI6IiJ9