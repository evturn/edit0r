webpackHotUpdate(0,{

/***/ 146:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    CodeBlock: {
        displayName: 'CodeBlock'
    }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/ev/src/workbench/react-markdown/demo/src/code-block.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/ev/src/workbench/react-markdown/demo/src/code-block.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var React = __webpack_require__(14);
var PureRenderMixin = __webpack_require__(285);
var hljs = window.hljs;
var h = React.createElement;

var CodeBlock = _wrapComponent('CodeBlock')(React.createClass({
    displayName: 'CodeBlock',
    mixins: [PureRenderMixin],
    propTypes: {
        literal: React.PropTypes.string,
        language: React.PropTypes.string
    },

    componentDidMount: function componentDidMount() {
        this.highlightCode();
    },

    componentDidUpdate: function componentDidUpdate() {
        this.highlightCode();
    },

    highlightCode: function highlightCode() {
        hljs.highlightBlock(this.refs.code);
    },

    render: function render() {
        return h('pre', null, h('code', {
            ref: 'code',
            className: this.props.language
        }, this.props.literal));
    }
}));

module.exports = React.createFactory(CodeBlock);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzPzEzNTAiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHVyZVJlbmRlck1peGluIiwiaGxqcyIsIndpbmRvdyIsImgiLCJjcmVhdGVFbGVtZW50IiwiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwicmVmcyIsImNvZGUiLCJyZW5kZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsa0JBQWtCLG1CQUFBRCxDQUFRLEdBQVIsQ0FBdEI7QUFDQSxJQUFJRSxPQUFPQyxPQUFPRCxJQUFsQjtBQUNBLElBQUlFLElBQUlMLE1BQU1NLGFBQWQ7O0FBRUEsSUFBSUMsd0NBQVlQLE1BQU1RLFdBQU4sQ0FBa0I7QUFDOUJDLGlCQUFhLFdBRGlCO0FBRTlCQyxZQUFRLENBQUNSLGVBQUQsQ0FGc0I7QUFHOUJTLGVBQVc7QUFDUEMsaUJBQVNaLE1BQU1hLFNBQU4sQ0FBZ0JDLE1BRGxCO0FBRVBDLGtCQUFVZixNQUFNYSxTQUFOLENBQWdCQztBQUZuQixLQUhtQjs7QUFROUJFLHVCQUFtQiw2QkFBVztBQUMxQixhQUFLQyxhQUFMO0FBQ0gsS0FWNkI7O0FBWTlCQyx3QkFBb0IsOEJBQVc7QUFDM0IsYUFBS0QsYUFBTDtBQUNILEtBZDZCOztBQWdCOUJBLG1CQUFlLHlCQUFXO0FBQ3RCZCxhQUFLZ0IsY0FBTCxDQUFvQixLQUFLQyxJQUFMLENBQVVDLElBQTlCO0FBQ0gsS0FsQjZCOztBQW9COUJDLFlBQVEsa0JBQVc7QUFDZixlQUNJakIsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUNJQSxFQUFFLE1BQUYsRUFBVTtBQUNOa0IsaUJBQUssTUFEQztBQUVOQyx1QkFBVyxLQUFLQyxLQUFMLENBQVdWO0FBRmhCLFNBQVYsRUFHRyxLQUFLVSxLQUFMLENBQVdiLE9BSGQsQ0FESixDQURKO0FBUUg7QUE3QjZCLENBQWxCLENBQVosQ0FBSjs7QUFnQ0FjLE9BQU9DLE9BQVAsR0FBaUIzQixNQUFNNEIsYUFBTixDQUFvQnJCLFNBQXBCLENBQWpCLEMiLCJmaWxlIjoiMC4yYzYxZWJmMjUwNGJhNTBjZTJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFB1cmVSZW5kZXJNaXhpbiA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbicpO1xudmFyIGhsanMgPSB3aW5kb3cuaGxqcztcbnZhciBoID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxudmFyIENvZGVCbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0NvZGVCbG9jaycsXG4gICAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbGl0ZXJhbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGFuZ3VhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodENvZGUoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKCk7XG4gICAgfSxcblxuICAgIGhpZ2hsaWdodENvZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMucmVmcy5jb2RlKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGgoJ3ByZScsIG51bGwsXG4gICAgICAgICAgICAgICAgaCgnY29kZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5sYW5ndWFnZVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMubGl0ZXJhbClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KENvZGVCbG9jayk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==