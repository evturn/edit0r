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
    _this.onControlsChange = _this.onControlsChange.bind(_this);
    _this.myBodyIsReady = _this.myBodyIsReady.bind(_this);
    return _this;
  }

  _createClass(Edit0r, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwic291cmNlIiwibW9kZSIsInN0eWxlIiwibWFyZ2luVG9wIiwicmVuZGVyZXJzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29kZUJsb2NrIiwib25NYXJrZG93bkNoYW5nZSIsImJpbmQiLCJvbkNvbnRyb2xzQ2hhbmdlIiwibXlCb2R5SXNSZWFkeSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwieCIsIk1hdGgiLCJhYnMiLCJyb290IiwiaW5wdXQiLCJvdXRwdXQiLCJkaXNwbGF5TmFtZSIsIkVkaXQwciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBQUEsVUFTbkJDLEtBVG1CLEdBU1g7QUFDTkMsMkNBRE07QUFFTkMsWUFBTSxLQUZBO0FBR05DLGFBQU87QUFDTEMsbUJBQVc7QUFETjtBQUhELEtBVFc7QUFBQSxVQWdCbkJDLFNBaEJtQixHQWdCUEMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsdUJBQWFGLFNBQS9CLEVBQTBDLEVBQUVHLDhCQUFGLEVBQTFDLENBaEJPOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBSmlCO0FBS2xCOzs7O3FDQWNnQkcsQyxFQUFHO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDYixRQUFRWSxFQUFFRSxNQUFGLENBQVNDLEtBQWxCLEVBQWQ7QUFDRDs7O3FDQUVnQmQsSSxFQUFNO0FBQ3JCLFdBQUtZLFFBQUwsQ0FBYyxFQUFFWixVQUFGLEVBQWQ7QUFDRDs7O2tDQUVhZSxDLEVBQUc7QUFDZixXQUFLSCxRQUFMLENBQWMsRUFBQ1gsT0FBTyxFQUFDQyxZQUFjYSxJQUFJLENBQUosR0FBUSxDQUFDQyxLQUFLQyxHQUFMLENBQVNGLENBQVQsQ0FBVCxHQUF1QixDQUFyQyxPQUFELEVBQVIsRUFBZDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDeUIsS0FBS2pCLEtBRDlCO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsSUFEVCxVQUNTQSxJQURUO0FBQUEsVUFDZUMsS0FEZixVQUNlQSxLQURmOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBSWlCLElBQXBCO0FBQ0U7QUFDRSxxQkFBVyxnQkFBSUMsS0FEakI7QUFFRSxpQkFBT3BCLE1BRlQ7QUFHRSx5QkFBZSxLQUFLVyxhQUh0QjtBQUlFLG9CQUFVLEtBQUtILGdCQUpqQixHQURGO0FBTUU7QUFDRSxxQkFBVyxnQkFBSWEsTUFEakI7QUFFRSxpQkFBT25CLEtBRlQ7QUFHRSxrQkFBUUYsTUFIVjtBQUlFLHFCQUFXLEtBQUtJLFNBSmxCO0FBS0Usb0JBQVUsS0FMWjtBQU1FLHNCQUFZLEtBTmQ7QUFORixPQURGO0FBZ0JEOzs7OzZCQTFDTWtCLFcsR0FBYyxROztrQkE2Q1JDLE0iLCJmaWxlIjoiMC4xNmYxNDFlZDkyNmQ4MGQ4ZjJkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXQwcklucHV0IGZyb20gJy4vRWRpdDBySW5wdXQnXG5pbXBvcnQgRWRpdDByT3V0cHV0IGZyb20gJy4uLy4uL3NyYy9FZGl0MHJPdXRwdXQnXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vQ29kZUJsb2NrJ1xuaW1wb3J0IHNvdXJjZSBmcm9tICcuL3BsYWNlaG9sZGVyLW1hcmtkb3duJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY2xhc3MgRWRpdDByIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25NYXJrZG93bkNoYW5nZSA9IHRoaXMub25NYXJrZG93bkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNvbnRyb2xzQ2hhbmdlID0gdGhpcy5vbkNvbnRyb2xzQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm15Qm9keUlzUmVhZHkgPSB0aGlzLm15Qm9keUlzUmVhZHkuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0VkaXQwcidcblxuICBzdGF0ZSA9IHtcbiAgICBzb3VyY2UsXG4gICAgbW9kZTogJ3JhdycsXG4gICAgc3R5bGU6IHtcbiAgICAgIG1hcmdpblRvcDogMFxuICAgIH1cbiAgfVxuICByZW5kZXJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBFZGl0MHJPdXRwdXQucmVuZGVyZXJzLCB7IENvZGVCbG9jayB9KVxuXG5cbiAgb25NYXJrZG93bkNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c291cmNlOiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBvbkNvbnRyb2xzQ2hhbmdlKG1vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kZSB9KVxuICB9XG5cbiAgbXlCb2R5SXNSZWFkeSh4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHttYXJnaW5Ub3A6IGAke3ggPiAwID8gLU1hdGguYWJzKHgpIDogMH0lYH19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc291cmNlLCBtb2RlLCBzdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJvb3R9PlxuICAgICAgICA8RWRpdDBySW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICB2YWx1ZT17c291cmNlfVxuICAgICAgICAgIG15Qm9keUlzUmVhZHk9e3RoaXMubXlCb2R5SXNSZWFkeX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1hcmtkb3duQ2hhbmdlfSAvPlxuICAgICAgICA8RWRpdDByT3V0cHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Mub3V0cHV0fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgICAgICByZW5kZXJlcnM9e3RoaXMucmVuZGVyZXJzfVxuICAgICAgICAgIHNraXBIdG1sPXtmYWxzZX1cbiAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0MHJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9FZGl0MHIuanMiXSwic291cmNlUm9vdCI6IiJ9