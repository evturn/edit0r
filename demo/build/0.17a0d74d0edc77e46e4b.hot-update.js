webpackHotUpdate(0,{

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(51);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(20);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(52);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _Edit0rInput = __webpack_require__(147);

var _Edit0rInput2 = _interopRequireDefault(_Edit0rInput);

var _Edit0rOutput = __webpack_require__(149);

var _Edit0rOutput2 = _interopRequireDefault(_Edit0rOutput);

var _CodeBlock = __webpack_require__(145);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _placeholderMarkdown = __webpack_require__(148);

var _placeholderMarkdown2 = _interopRequireDefault(_placeholderMarkdown);

var _style = __webpack_require__(83);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Edit0r: {
    displayName: 'Edit0r'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0r.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0r.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Edit0r = _wrapComponent('Edit0r')((_temp = _class = function (_Component) {
  _inherits(Edit0r, _Component);

  function Edit0r(props) {
    _classCallCheck(this, Edit0r);

    var _this = _possibleConstructorReturn(this, (Edit0r.__proto__ || Object.getPrototypeOf(Edit0r)).call(this, props));

    _this.state = {
      source: _placeholderMarkdown2.default,
      mode: 'raw',
      style: {
        marginTop: 0
      }
    };
    _this.renderers = Object.assign({}, _Edit0rOutput2.default.renderers, { CodeBlock: _CodeBlock2.default });

    _this.onMarkdownChange = _this.onMarkdownChange.bind(_this);
    _this.myBodyIsReady = _this.myBodyIsReady.bind(_this);
    return _this;
  }

  _createClass(Edit0r, [{
    key: 'onMarkdownChange',
    value: function onMarkdownChange(e) {
      this.setState({ source: e.target.value });
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
        _react3.default.createElement(_Edit0rInput2.default, {
          className: _style2.default.input,
          value: source,
          myBodyIsReady: this.myBodyIsReady,
          onChange: this.onMarkdownChange }),
        _react3.default.createElement(_Edit0rOutput2.default, {
          className: _style2.default.output,
          style: style,
          source: source,
          renderers: this.renderers,
          skipHtml: false,
          escapeHtml: false })
      );
    }
  }]);

  return Edit0r;
}(_react2.Component), _class.displayName = 'Edit0r', _temp));

exports.default = Edit0r;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwic291cmNlIiwibW9kZSIsInN0eWxlIiwibWFyZ2luVG9wIiwicmVuZGVyZXJzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29kZUJsb2NrIiwib25NYXJrZG93bkNoYW5nZSIsImJpbmQiLCJteUJvZHlJc1JlYWR5IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ4IiwiTWF0aCIsImFicyIsInJvb3QiLCJpbnB1dCIsIm91dHB1dCIsImRpc3BsYXlOYW1lIiwiRWRpdDByIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Usa0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFBQSxVQVFuQkMsS0FSbUIsR0FRWDtBQUNOQywyQ0FETTtBQUVOQyxZQUFNLEtBRkE7QUFHTkMsYUFBTztBQUNMQyxtQkFBVztBQUROO0FBSEQsS0FSVztBQUFBLFVBZW5CQyxTQWZtQixHQWVQQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQix1QkFBYUYsU0FBL0IsRUFBMEMsRUFBRUcsOEJBQUYsRUFBMUMsQ0FmTzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUhpQjtBQUlsQjs7OztxQ0FjZ0JFLEMsRUFBRztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ1osUUFBUVcsRUFBRUUsTUFBRixDQUFTQyxLQUFsQixFQUFkO0FBQ0Q7OztrQ0FFYUMsQyxFQUFHO0FBQ2YsV0FBS0gsUUFBTCxDQUFjLEVBQUNWLE9BQU8sRUFBQ0MsWUFBY1ksSUFBSSxDQUFKLEdBQVEsQ0FBQ0MsS0FBS0MsR0FBTCxDQUFTRixDQUFULENBQVQsR0FBdUIsQ0FBckMsT0FBRCxFQUFSLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3lCLEtBQUtoQixLQUQ5QjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLElBRFQsVUFDU0EsSUFEVDtBQUFBLFVBQ2VDLEtBRGYsVUFDZUEsS0FEZjs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsZ0JBQUlnQixJQUFwQjtBQUNFO0FBQ0UscUJBQVcsZ0JBQUlDLEtBRGpCO0FBRUUsaUJBQU9uQixNQUZUO0FBR0UseUJBQWUsS0FBS1UsYUFIdEI7QUFJRSxvQkFBVSxLQUFLRixnQkFKakIsR0FERjtBQU1FO0FBQ0UscUJBQVcsZ0JBQUlZLE1BRGpCO0FBRUUsaUJBQU9sQixLQUZUO0FBR0Usa0JBQVFGLE1BSFY7QUFJRSxxQkFBVyxLQUFLSSxTQUpsQjtBQUtFLG9CQUFVLEtBTFo7QUFNRSxzQkFBWSxLQU5kO0FBTkYsT0FERjtBQWdCRDs7Ozs2QkF0Q01pQixXLEdBQWMsUTs7a0JBeUNSQyxNIiwiZmlsZSI6IjAuMTdhMGQ3NGQwZWRjNzdlNDZlNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0MHJJbnB1dCBmcm9tICcuL0VkaXQwcklucHV0J1xuaW1wb3J0IEVkaXQwck91dHB1dCBmcm9tICcuLi8uLi9zcmMvRWRpdDByT3V0cHV0J1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuL0NvZGVCbG9jaydcbmltcG9ydCBzb3VyY2UgZnJvbSAnLi9wbGFjZWhvbGRlci1tYXJrZG93bidcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNsYXNzIEVkaXQwciBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uTWFya2Rvd25DaGFuZ2UgPSB0aGlzLm9uTWFya2Rvd25DaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMubXlCb2R5SXNSZWFkeSA9IHRoaXMubXlCb2R5SXNSZWFkeS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRWRpdDByJ1xuXG4gIHN0YXRlID0ge1xuICAgIHNvdXJjZSxcbiAgICBtb2RlOiAncmF3JyxcbiAgICBzdHlsZToge1xuICAgICAgbWFyZ2luVG9wOiAwXG4gICAgfVxuICB9XG4gIHJlbmRlcmVycyA9IE9iamVjdC5hc3NpZ24oe30sIEVkaXQwck91dHB1dC5yZW5kZXJlcnMsIHsgQ29kZUJsb2NrIH0pXG5cblxuICBvbk1hcmtkb3duQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzb3VyY2U6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIG15Qm9keUlzUmVhZHkoeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7bWFyZ2luVG9wOiBgJHt4ID4gMCA/IC1NYXRoLmFicyh4KSA6IDB9JWB9fSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgbW9kZSwgc3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgICAgPEVkaXQwcklucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW5wdXR9XG4gICAgICAgICAgdmFsdWU9e3NvdXJjZX1cbiAgICAgICAgICBteUJvZHlJc1JlYWR5PXt0aGlzLm15Qm9keUlzUmVhZHl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NYXJrZG93bkNoYW5nZX0gLz5cbiAgICAgICAgPEVkaXQwck91dHB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLm91dHB1dH1cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgc291cmNlPXtzb3VyY2V9XG4gICAgICAgICAgcmVuZGVyZXJzPXt0aGlzLnJlbmRlcmVyc31cbiAgICAgICAgICBza2lwSHRtbD17ZmFsc2V9XG4gICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDByXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvRWRpdDByLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==