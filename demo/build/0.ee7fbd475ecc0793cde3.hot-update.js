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
          { className: 'result-pane' },
          _react3.default.createElement(_2.default, {
            className: 'result',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9NYXJrTXlCaXRjaFVwLmpzPzI0NDQiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInNvdXJjZSIsIm1vZGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJlbmRlcmVycyIsIk9iamVjdCIsImFzc2lnbiIsIkNvZGVCbG9jayIsIm9uTWFya2Rvd25DaGFuZ2UiLCJiaW5kIiwib25Db250cm9sc0NoYW5nZSIsIm15Qm9keUlzUmVhZHkiLCJzZXRTdGF0ZSIsIngiLCJNYXRoIiwiYWJzIiwicm9vdCIsImRpc3BsYXlOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UseUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQSxVQVNuQkMsS0FUbUIsR0FTWDtBQUNOQywyQ0FETTtBQUVOQyxZQUFNLEtBRkE7QUFHTkMsYUFBTztBQUNMQyxtQkFBVztBQUROO0FBSEQsS0FUVztBQUFBLFVBaUJuQkMsU0FqQm1CLEdBaUJQQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixXQUFTRixTQUEzQixFQUFzQyxFQUFFRyw4QkFBRixFQUF0QyxDQWpCTzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXhCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztxQ0FjZ0JULE0sRUFBUTtBQUN2QixXQUFLWSxRQUFMLENBQWMsRUFBRVosY0FBRixFQUFkO0FBQ0Q7OztxQ0FFZ0JDLEksRUFBTTtBQUNyQixXQUFLVyxRQUFMLENBQWMsRUFBRVgsVUFBRixFQUFkO0FBQ0Q7OztrQ0FFYVksQyxFQUFHO0FBQ2YsV0FBS0QsUUFBTCxDQUFjLEVBQUNWLE9BQU8sRUFBQ0MsWUFBY1UsSUFBSSxDQUFKLEdBQVEsQ0FBQ0MsS0FBS0MsR0FBTCxDQUFTRixDQUFULENBQVQsR0FBdUIsQ0FBckMsT0FBRCxFQUFSLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3lCLEtBQUtkLEtBRDlCO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsSUFEVCxVQUNTQSxJQURUO0FBQUEsVUFDZUMsS0FEZixVQUNlQSxLQURmOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBSWMsSUFBcEI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRTtBQUNFLG1CQUFPaEIsTUFEVDtBQUVFLDJCQUFlLEtBQUtXLGFBRnRCO0FBR0Usc0JBQVUsS0FBS0gsZ0JBSGpCO0FBREYsU0FERjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFO0FBQ0UsdUJBQVUsUUFEWjtBQUVFLG1CQUFPTixLQUZUO0FBR0Usb0JBQVFGLE1BSFY7QUFJRSx1QkFBVyxLQUFLSSxTQUpsQjtBQUtFLHNCQUFVSCxTQUFTLE1BTHJCO0FBTUUsd0JBQVlBLFNBQVMsUUFOdkI7QUFERjtBQVBGLE9BREY7QUFtQkQ7Ozs7NkJBN0NNZ0IsVyxHQUFjLGU7O0FBZ0R2QixzQkFBTyw4QkFBQyxhQUFELE9BQVAsRUFBMEJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBMUIsRSIsImZpbGUiOiIwLmVlN2ZiZDQ3NWVjYzA3OTNjZGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgRWRpdDByIGZyb20gJy4vRWRpdDByJ1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuL2NvZGUtYmxvY2snXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vJ1xuaW1wb3J0IHNvdXJjZSBmcm9tICcuL3BsYWNlaG9sZGVyLW1hcmtkb3duJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY2xhc3MgTWFya015Qml0Y2hVcCBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uTWFya2Rvd25DaGFuZ2UgPSB0aGlzLm9uTWFya2Rvd25DaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25Db250cm9sc0NoYW5nZSA9IHRoaXMub25Db250cm9sc0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5teUJvZHlJc1JlYWR5ID0gdGhpcy5teUJvZHlJc1JlYWR5LmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdNYXJrTXlCaXRjaFVwJ1xuXG4gIHN0YXRlID0ge1xuICAgIHNvdXJjZSxcbiAgICBtb2RlOiAncmF3JyxcbiAgICBzdHlsZToge1xuICAgICAgbWFyZ2luVG9wOiAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgTWFya2Rvd24ucmVuZGVyZXJzLCB7IENvZGVCbG9jayB9KVxuXG4gIG9uTWFya2Rvd25DaGFuZ2Uoc291cmNlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvdXJjZSB9KVxuICB9XG5cbiAgb25Db250cm9sc0NoYW5nZShtb2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGUgfSlcbiAgfVxuXG4gIG15Qm9keUlzUmVhZHkoeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7bWFyZ2luVG9wOiBgJHt4ID4gMCA/IC1NYXRoLmFicyh4KSA6IDB9JWB9fSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgbW9kZSwgc3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXRvci1wYW5lJz5cbiAgICAgICAgICA8RWRpdDByXG4gICAgICAgICAgICB2YWx1ZT17c291cmNlfVxuICAgICAgICAgICAgbXlCb2R5SXNSZWFkeT17dGhpcy5teUJvZHlJc1JlYWR5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NYXJrZG93bkNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQtcGFuZSc+XG4gICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Jlc3VsdCdcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNvdXJjZT17c291cmNlfVxuICAgICAgICAgICAgcmVuZGVyZXJzPXt0aGlzLnJlbmRlcmVyc31cbiAgICAgICAgICAgIHNraXBIdG1sPXttb2RlID09PSAnc2tpcCd9XG4gICAgICAgICAgICBlc2NhcGVIdG1sPXttb2RlID09PSAnZXNjYXBlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxucmVuZGVyKDxNYXJrTXlCaXRjaFVwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL01hcmtNeUJpdGNoVXAuanMiXSwic291cmNlUm9vdCI6IiJ9