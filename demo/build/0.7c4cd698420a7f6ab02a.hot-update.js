webpackHotUpdate(0,{

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _CodeMirrorEditor = __webpack_require__(144);

var _CodeMirrorEditor2 = _interopRequireDefault(_CodeMirrorEditor);

var _style = __webpack_require__(382);

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

    _this.onInputChange = _this.onInputChange.bind(_this);
    return _this;
  }

  _createClass(Edit0r, [{
    key: 'onInputChange',
    value: function onInputChange(e) {
      this.props.onChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          myBodyIsReady = _props.myBodyIsReady,
          value = _props.value;

      return _react3.default.createElement(
        'form',
        {
          style: { height: '100%' },
          className: 'editor pure-form' },
        _react3.default.createElement(_CodeMirrorEditor2.default, {
          myBodyIsReady: myBodyIsReady,
          mode: 'markdown',
          theme: 'monokai',
          value: value,
          onChange: this.onInputChange })
      );
    }
  }]);

  return Edit0r;
}(_react2.Component), _class.displayName = 'Edit0r', _class.propTypes = {
  onChange: _react2.PropTypes.func.isRequired,
  value: _react2.PropTypes.string
}, _temp));

exports.default = Edit0r;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsIm9uSW5wdXRDaGFuZ2UiLCJiaW5kIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJteUJvZHlJc1JlYWR5IiwiaGVpZ2h0IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIkVkaXQwciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFGaUI7QUFHbEI7Ozs7a0NBU2FDLEMsRUFBRztBQUNmLFdBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsRUFBRUUsTUFBRixDQUFTQyxLQUE3QjtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDMEIsS0FBS04sS0FEL0I7QUFBQSxVQUNDTyxhQURELFVBQ0NBLGFBREQ7QUFBQSxVQUNnQkQsS0FEaEIsVUFDZ0JBLEtBRGhCOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sRUFBQ0UsY0FBRCxFQURUO0FBRUUsdUNBRkY7QUFHRTtBQUNFLHlCQUFlRCxhQURqQjtBQUVFLGdCQUFLLFVBRlA7QUFHRSxpQkFBTSxTQUhSO0FBSUUsaUJBQU9ELEtBSlQ7QUFLRSxvQkFBVSxLQUFLTCxhQUxqQjtBQUhGLE9BREY7QUFZRDs7Ozs2QkF6Qk1RLFcsR0FBYyxRLFNBRWRDLFMsR0FBWTtBQUNqQk4sWUFBVSxrQkFBVU8sSUFBVixDQUFlQyxVQURSO0FBRWpCTixTQUFPLGtCQUFVTztBQUZBLEM7O2tCQTBCTkMsTSIsImZpbGUiOiIwLjdjNGNkNjk4NDIwYTdmNmFiMDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJy4vQ29kZU1pcnJvckVkaXRvcidcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNsYXNzIEVkaXQwciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFZGl0MHInXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBteUJvZHlJc1JlYWR5LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybVxuICAgICAgICBzdHlsZT17e2hlaWdodDogYDEwMCVgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgZWRpdG9yIHB1cmUtZm9ybWB9PlxuICAgICAgICA8Q29kZU1pcnJvclxuICAgICAgICAgIG15Qm9keUlzUmVhZHk9e215Qm9keUlzUmVhZHl9XG4gICAgICAgICAgbW9kZT0nbWFya2Rvd24nXG4gICAgICAgICAgdGhlbWU9J21vbm9rYWknXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQwclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvRWRpdDByLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==