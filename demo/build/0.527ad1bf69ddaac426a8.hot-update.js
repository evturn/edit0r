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
    window.hljs.highlightBlock(this.code);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwibWl4aW5zIiwicHJvcFR5cGVzIiwibGl0ZXJhbCIsInN0cmluZyIsImxhbmd1YWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJoaWdobGlnaHRDb2RlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwid2luZG93IiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiY29kZSIsInJlbmRlciIsIngiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdDQUFZLGdCQUFNQyxXQUFOLENBQWtCO0FBQ2xDQyxlQUFhLFdBRHFCO0FBRWxDQyxVQUFRLHNDQUYwQjs7QUFJbENDLGFBQVc7QUFDVEMsYUFBUyxrQkFBVUMsTUFEVjtBQUVUQyxjQUFVLGtCQUFVRDtBQUZYLEdBSnVCOztBQVNsQ0UsbUJBVGtDLCtCQVNkO0FBQ2xCLFNBQUtDLGFBQUw7QUFDRCxHQVhpQztBQWFsQ0Msb0JBYmtDLGdDQWFiO0FBQ25CLFNBQUtELGFBQUw7QUFDRCxHQWZpQztBQWlCbENBLGVBakJrQywyQkFpQmxCO0FBQ2RFLFdBQU9DLElBQVAsQ0FBWUMsY0FBWixDQUEyQixLQUFLQyxJQUFoQztBQUNELEdBbkJpQztBQXFCbENDLFFBckJrQyxvQkFxQnpCO0FBQUE7O0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLElBQWhCLEVBQXFCLEtBQUs7QUFBQSxtQkFBSyxNQUFLRCxJQUFMLEdBQVlFLENBQWpCO0FBQUEsV0FBMUI7QUFDRyxhQUFLQyxLQUFMLENBQVdaO0FBRGQ7QUFERixLQURGO0FBT0Q7QUE3QmlDLENBQWxCLENBQVosQ0FBTjs7QUFnQ0FhLE9BQU9DLE9BQVAsR0FBaUIsZ0JBQU1DLGFBQU4sQ0FBb0JwQixTQUFwQixDQUFqQixDIiwiZmlsZSI6IjAuNTI3YWQxYmY2OWRkYWFjNDI2YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQdXJlUmVuZGVyTWl4aW4gZnJvbSAncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY29uc3QgQ29kZUJsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvZGVCbG9jaycsXG4gIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGl0ZXJhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpXG4gIH0sXG5cbiAgaGlnaGxpZ2h0Q29kZSgpIHtcbiAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLmNvZGUpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZSBjbGFzc05hbWU9J2pzJyByZWY9e3ggPT4gdGhpcy5jb2RlID0geH0+XG4gICAgICAgICAge3RoaXMucHJvcHMubGl0ZXJhbH1cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQ29kZUJsb2NrKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZUJsb2NrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==