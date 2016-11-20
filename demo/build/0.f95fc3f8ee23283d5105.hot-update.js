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

__webpack_require__(382);

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
          className: css.editor + ' ' + css.form },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsIm9uSW5wdXRDaGFuZ2UiLCJiaW5kIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJteUJvZHlJc1JlYWR5IiwiaGVpZ2h0IiwiY3NzIiwiZWRpdG9yIiwiZm9ybSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJFZGl0MHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Usa0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQUZpQjtBQUdsQjs7OztrQ0FTYUMsQyxFQUFHO0FBQ2YsV0FBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CRCxFQUFFRSxNQUFGLENBQVNDLEtBQTdCO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUMwQixLQUFLTixLQUQvQjtBQUFBLFVBQ0NPLGFBREQsVUFDQ0EsYUFERDtBQUFBLFVBQ2dCRCxLQURoQixVQUNnQkEsS0FEaEI7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRSxpQkFBTyxFQUFDRSxjQUFELEVBRFQ7QUFFRSxxQkFBY0MsSUFBSUMsTUFBbEIsU0FBNEJELElBQUlFLElBRmxDO0FBR0U7QUFDRSx5QkFBZUosYUFEakI7QUFFRSxnQkFBSyxVQUZQO0FBR0UsaUJBQU0sU0FIUjtBQUlFLGlCQUFPRCxLQUpUO0FBS0Usb0JBQVUsS0FBS0wsYUFMakI7QUFIRixPQURGO0FBWUQ7Ozs7NkJBekJNVyxXLEdBQWMsUSxTQUVkQyxTLEdBQVk7QUFDakJULFlBQVUsa0JBQVVVLElBQVYsQ0FBZUMsVUFEUjtBQUVqQlQsU0FBTyxrQkFBVVU7QUFGQSxDOztrQkEwQk5DLE0iLCJmaWxlIjoiMC5mOTVmYzNmOGVlMjMyODNkNTEwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICcuL0NvZGVNaXJyb3JFZGl0b3InXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBFZGl0MHIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25JbnB1dENoYW5nZSA9IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRWRpdDByJ1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbXlCb2R5SXNSZWFkeSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgc3R5bGU9e3toZWlnaHQ6IGAxMDAlYH19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLmVkaXRvcn0gJHtjc3MuZm9ybX1gfT5cbiAgICAgICAgPENvZGVNaXJyb3JcbiAgICAgICAgICBteUJvZHlJc1JlYWR5PXtteUJvZHlJc1JlYWR5fVxuICAgICAgICAgIG1vZGU9J21hcmtkb3duJ1xuICAgICAgICAgIHRoZW1lPSdtb25va2FpJ1xuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfSAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0MHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0VkaXQwci5qcyJdLCJzb3VyY2VSb290IjoiIn0=