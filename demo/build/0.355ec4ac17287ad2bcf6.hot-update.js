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
          className: _style2.default.editor },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsIm9uSW5wdXRDaGFuZ2UiLCJiaW5kIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJteUJvZHlJc1JlYWR5IiwiaGVpZ2h0IiwiZWRpdG9yIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIkVkaXQwciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFGaUI7QUFHbEI7Ozs7a0NBU2FDLEMsRUFBRztBQUNmLFdBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsRUFBRUUsTUFBRixDQUFTQyxLQUE3QjtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDMEIsS0FBS04sS0FEL0I7QUFBQSxVQUNDTyxhQURELFVBQ0NBLGFBREQ7QUFBQSxVQUNnQkQsS0FEaEIsVUFDZ0JBLEtBRGhCOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sRUFBQ0UsY0FBRCxFQURUO0FBRUUscUJBQVcsZ0JBQUlDLE1BRmpCO0FBR0U7QUFDRSx5QkFBZUYsYUFEakI7QUFFRSxnQkFBSyxVQUZQO0FBR0UsaUJBQU0sU0FIUjtBQUlFLGlCQUFPRCxLQUpUO0FBS0Usb0JBQVUsS0FBS0wsYUFMakI7QUFIRixPQURGO0FBWUQ7Ozs7NkJBekJNUyxXLEdBQWMsUSxTQUVkQyxTLEdBQVk7QUFDakJQLFlBQVUsa0JBQVVRLElBQVYsQ0FBZUMsVUFEUjtBQUVqQlAsU0FBTyxrQkFBVVE7QUFGQSxDOztrQkEwQk5DLE0iLCJmaWxlIjoiMC4zNTVlYzRhYzE3Mjg3YWQyYmNmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICcuL0NvZGVNaXJyb3JFZGl0b3InXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBFZGl0MHIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25JbnB1dENoYW5nZSA9IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRWRpdDByJ1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbXlCb2R5SXNSZWFkeSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgc3R5bGU9e3toZWlnaHQ6IGAxMDAlYH19XG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLmVkaXRvcn0+XG4gICAgICAgIDxDb2RlTWlycm9yXG4gICAgICAgICAgbXlCb2R5SXNSZWFkeT17bXlCb2R5SXNSZWFkeX1cbiAgICAgICAgICBtb2RlPSdtYXJrZG93bidcbiAgICAgICAgICB0aGVtZT0nbW9ub2thaSdcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDByXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9FZGl0MHIuanMiXSwic291cmNlUm9vdCI6IiJ9