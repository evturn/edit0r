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

var _style = __webpack_require__(382);

var _style2 = _interopRequireDefault(_style);

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
            className: 'css.js'
        }, this.props.literal));
    }
}));

module.exports = React.createFactory(CodeBlock);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzPzEzNTAiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHVyZVJlbmRlck1peGluIiwiaGxqcyIsIndpbmRvdyIsImgiLCJjcmVhdGVFbGVtZW50IiwiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwicmVmcyIsImNvZGUiLCJyZW5kZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSkEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxrQkFBa0IsbUJBQUFELENBQVEsR0FBUixDQUF0QjtBQUNBLElBQUlFLE9BQU9DLE9BQU9ELElBQWxCO0FBQ0EsSUFBSUUsSUFBSUwsTUFBTU0sYUFBZDs7O0FBR0EsSUFBSUMsd0NBQVlQLE1BQU1RLFdBQU4sQ0FBa0I7QUFDOUJDLGlCQUFhLFdBRGlCO0FBRTlCQyxZQUFRLENBQUNSLGVBQUQsQ0FGc0I7QUFHOUJTLGVBQVc7QUFDUEMsaUJBQVNaLE1BQU1hLFNBQU4sQ0FBZ0JDLE1BRGxCO0FBRVBDLGtCQUFVZixNQUFNYSxTQUFOLENBQWdCQztBQUZuQixLQUhtQjs7QUFROUJFLHVCQUFtQiw2QkFBVztBQUMxQixhQUFLQyxhQUFMO0FBQ0gsS0FWNkI7O0FBWTlCQyx3QkFBb0IsOEJBQVc7QUFDM0IsYUFBS0QsYUFBTDtBQUNILEtBZDZCOztBQWdCOUJBLG1CQUFlLHlCQUFXO0FBQ3RCZCxhQUFLZ0IsY0FBTCxDQUFvQixLQUFLQyxJQUFMLENBQVVDLElBQTlCO0FBQ0gsS0FsQjZCOztBQW9COUJDLFlBQVEsa0JBQVc7QUFDZixlQUNJakIsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUNJQSxFQUFFLE1BQUYsRUFBVTtBQUNOa0IsaUJBQUssTUFEQztBQUVOQyx1QkFBVztBQUZMLFNBQVYsRUFHRyxLQUFLQyxLQUFMLENBQVdiLE9BSGQsQ0FESixDQURKO0FBUUg7QUE3QjZCLENBQWxCLENBQVosQ0FBSjs7QUFnQ0FjLE9BQU9DLE9BQVAsR0FBaUIzQixNQUFNNEIsYUFBTixDQUFvQnJCLFNBQXBCLENBQWpCLEMiLCJmaWxlIjoiMC5iYjU0ZTg0ZWZiNWJhOTdjMzVjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFB1cmVSZW5kZXJNaXhpbiA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbicpO1xudmFyIGhsanMgPSB3aW5kb3cuaGxqcztcbnZhciBoID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbnZhciBDb2RlQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdDb2RlQmxvY2snLFxuICAgIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGxpdGVyYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxhbmd1YWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpO1xuICAgIH0sXG5cbiAgICBoaWdobGlnaHRDb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLnJlZnMuY29kZSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBoKCdwcmUnLCBudWxsLFxuICAgICAgICAgICAgICAgIGgoJ2NvZGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjc3MuanMnLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMubGl0ZXJhbClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KENvZGVCbG9jayk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==