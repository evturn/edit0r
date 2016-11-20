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

var _reactAddonsPureRenderMixin = __webpack_require__(283);

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

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

var hljs = window.hljs;


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
    hljs.highlightBlock(this.code);
  },
  render: function render() {
    return _react3.default.createElement(
      'pre',
      null,
      _react3.default.createElement(
        'code',
        { ref: x = this.code = x, className: 'js' },
        this.props.literal
      )
    );
  }
}));

module.exports = _react3.default.createFactory(CodeBlock);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCJdLCJuYW1lcyI6WyJobGpzIiwid2luZG93IiwiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwiY29kZSIsInJlbmRlciIsIngiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBLElBQUlBLE9BQU9DLE9BQU9ELElBQWxCOzs7QUFHQSxJQUFJRSx3Q0FBWSxnQkFBTUMsV0FBTixDQUFrQjtBQUM5QkMsZUFBYSxXQURpQjtBQUU5QkMsVUFBUSxzQ0FGc0I7O0FBSTlCQyxhQUFXO0FBQ1RDLGFBQVMsa0JBQVVDLE1BRFY7QUFFVEMsY0FBVSxrQkFBVUQ7QUFGWCxHQUptQjs7QUFTOUJFLG1CQVQ4QiwrQkFTVjtBQUNsQixTQUFLQyxhQUFMO0FBQ0QsR0FYNkI7QUFhOUJDLG9CQWI4QixnQ0FhVDtBQUNuQixTQUFLRCxhQUFMO0FBQ0QsR0FmNkI7QUFpQjlCQSxlQWpCOEIsMkJBaUJkO0FBQ2RYLFNBQUthLGNBQUwsQ0FBb0IsS0FBS0MsSUFBekI7QUFDRCxHQW5CNkI7QUFxQjlCQyxRQXJCOEIsb0JBcUJyQjtBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sS0FBS0MsSUFBSSxLQUFLRixJQUFMLEdBQVlFLENBQTNCLEVBQThCLFdBQVUsSUFBeEM7QUFDRyxhQUFLQyxLQUFMLENBQVdWO0FBRGQ7QUFERixLQURGO0FBT0Q7QUE3QjZCLENBQWxCLENBQVosQ0FBSjs7QUFnQ0FXLE9BQU9DLE9BQVAsR0FBaUIsZ0JBQU1DLGFBQU4sQ0FBb0JsQixTQUFwQixDQUFqQixDIiwiZmlsZSI6IjAuYThhNDE3OWQ2Y2FmNDA5OWFhYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQdXJlUmVuZGVyTWl4aW4gZnJvbSAncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJ1xudmFyIGhsanMgPSB3aW5kb3cuaGxqc1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxudmFyIENvZGVCbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0NvZGVCbG9jaycsXG4gICAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgbGl0ZXJhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgICB9LFxuXG4gICAgaGlnaGxpZ2h0Q29kZSgpIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy5jb2RlKVxuICAgIH0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cHJlPlxuICAgICAgICAgIDxjb2RlIHJlZj17eCA9IHRoaXMuY29kZSA9IHh9IGNsYXNzTmFtZT0nanMnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubGl0ZXJhbH1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgKVxuICAgIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlRmFjdG9yeShDb2RlQmxvY2spXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9Db2RlQmxvY2suanMiXSwic291cmNlUm9vdCI6IiJ9