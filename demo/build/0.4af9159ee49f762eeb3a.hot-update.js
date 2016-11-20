webpackHotUpdate(0,{

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(51);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(20);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(52);

var _index6 = _interopRequireDefault(_index5);

var _reactAddonsPureRenderMixin = __webpack_require__(284);

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _highlightjs = __webpack_require__(179);

var _highlightjs2 = _interopRequireDefault(_highlightjs);

__webpack_require__(391);

__webpack_require__(389);

var _style = __webpack_require__(83);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  CodeBlock: {
    displayName: 'CodeBlock'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/CodeBlock.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/CodeBlock.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CodeBlock = _wrapComponent('CodeBlock')(_react3.default.createClass({
  displayName: 'CodeBlock',
  mixins: [_reactAddonsPureRenderMixin2.default],

  propTypes: {
    literal: _react2.PropTypes.string,
    language: _react2.PropTypes.string
  },

  componentDidMount: function componentDidMount() {
    this.highlightCode();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.highlightCode();
  },
  highlightCode: function highlightCode() {
    _highlightjs2.default.highlightBlock(this.code);
  },
  render: function render() {
    var _this = this;

    return _react3.default.createElement(
      'pre',
      null,
      _react3.default.createElement(
        'code',
        { className: 'js', ref: function ref(x) {
            return _this.code = x;
          } },
        this.props.literal
      )
    );
  }
}));

module.exports = _react3.default.createFactory(CodeBlock);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwibWl4aW5zIiwicHJvcFR5cGVzIiwibGl0ZXJhbCIsInN0cmluZyIsImxhbmd1YWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJoaWdobGlnaHRDb2RlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaGlnaGxpZ2h0QmxvY2siLCJjb2RlIiwicmVuZGVyIiwieCIsInByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx3Q0FBWSxnQkFBTUMsV0FBTixDQUFrQjtBQUNsQ0MsZUFBYSxXQURxQjtBQUVsQ0MsVUFBUSxzQ0FGMEI7O0FBSWxDQyxhQUFXO0FBQ1RDLGFBQVMsa0JBQVVDLE1BRFY7QUFFVEMsY0FBVSxrQkFBVUQ7QUFGWCxHQUp1Qjs7QUFTbENFLG1CQVRrQywrQkFTZDtBQUNsQixTQUFLQyxhQUFMO0FBQ0QsR0FYaUM7QUFhbENDLG9CQWJrQyxnQ0FhYjtBQUNuQixTQUFLRCxhQUFMO0FBQ0QsR0FmaUM7QUFpQmxDQSxlQWpCa0MsMkJBaUJsQjtBQUNkLDBCQUFLRSxjQUFMLENBQW9CLEtBQUtDLElBQXpCO0FBQ0QsR0FuQmlDO0FBcUJsQ0MsUUFyQmtDLG9CQXFCekI7QUFBQTs7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsSUFBaEIsRUFBcUIsS0FBSztBQUFBLG1CQUFLLE1BQUtELElBQUwsR0FBWUUsQ0FBakI7QUFBQSxXQUExQjtBQUNHLGFBQUtDLEtBQUwsQ0FBV1Y7QUFEZDtBQURGLEtBREY7QUFPRDtBQTdCaUMsQ0FBbEIsQ0FBWixDQUFOOztBQWdDQVcsT0FBT0MsT0FBUCxHQUFpQixnQkFBTUMsYUFBTixDQUFvQmxCLFNBQXBCLENBQWpCLEMiLCJmaWxlIjoiMC40YWY5MTU5ZWU0OWY3NjJlZWIzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFB1cmVSZW5kZXJNaXhpbiBmcm9tICdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nXG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHRqcydcbmltcG9ydCAnaGlnaGxpZ2h0anMvc3R5bGVzL2dpdGh1Yi5jc3MnXG5pbXBvcnQgJ2hpZ2hsaWdodGpzL3N0eWxlcy9tb25va2FpLXN1YmxpbWUuY3NzJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY29uc3QgQ29kZUJsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvZGVCbG9jaycsXG4gIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGl0ZXJhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpXG4gIH0sXG5cbiAgaGlnaGxpZ2h0Q29kZSgpIHtcbiAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuY29kZSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlIGNsYXNzTmFtZT0nanMnIHJlZj17eCA9PiB0aGlzLmNvZGUgPSB4fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXRlcmFsfVxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICApXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlRmFjdG9yeShDb2RlQmxvY2spXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9Db2RlQmxvY2suanMiXSwic291cmNlUm9vdCI6IiJ9