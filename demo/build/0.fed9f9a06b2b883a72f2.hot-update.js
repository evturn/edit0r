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
        console.log(this.props.language);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzPzEzNTAiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHVyZVJlbmRlck1peGluIiwiaGxqcyIsIndpbmRvdyIsImgiLCJjcmVhdGVFbGVtZW50IiwiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwicmVmcyIsImNvZGUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJyZWYiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGtCQUFrQixtQkFBQUQsQ0FBUSxHQUFSLENBQXRCO0FBQ0EsSUFBSUUsT0FBT0MsT0FBT0QsSUFBbEI7QUFDQSxJQUFJRSxJQUFJTCxNQUFNTSxhQUFkOztBQUVBLElBQUlDLHdDQUFZUCxNQUFNUSxXQUFOLENBQWtCO0FBQzlCQyxpQkFBYSxXQURpQjtBQUU5QkMsWUFBUSxDQUFDUixlQUFELENBRnNCO0FBRzlCUyxlQUFXO0FBQ1BDLGlCQUFTWixNQUFNYSxTQUFOLENBQWdCQyxNQURsQjtBQUVQQyxrQkFBVWYsTUFBTWEsU0FBTixDQUFnQkM7QUFGbkIsS0FIbUI7O0FBUTlCRSx1QkFBbUIsNkJBQVc7QUFDMUIsYUFBS0MsYUFBTDtBQUNILEtBVjZCOztBQVk5QkMsd0JBQW9CLDhCQUFXO0FBQzNCLGFBQUtELGFBQUw7QUFDSCxLQWQ2Qjs7QUFnQjlCQSxtQkFBZSx5QkFBVztBQUN0QmQsYUFBS2dCLGNBQUwsQ0FBb0IsS0FBS0MsSUFBTCxDQUFVQyxJQUE5QjtBQUNILEtBbEI2Qjs7QUFvQjlCQyxZQUFRLGtCQUFXO0FBQ2ZDLGdCQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXVixRQUF2QjtBQUNBLGVBQ0lWLEVBQUUsS0FBRixFQUFTLElBQVQsRUFDSUEsRUFBRSxNQUFGLEVBQVU7QUFDTnFCLGlCQUFLLE1BREM7QUFFTkMsdUJBQVcsS0FBS0YsS0FBTCxDQUFXVjtBQUZoQixTQUFWLEVBR0csS0FBS1UsS0FBTCxDQUFXYixPQUhkLENBREosQ0FESjtBQVFIO0FBOUI2QixDQUFsQixDQUFaLENBQUo7O0FBaUNBZ0IsT0FBT0MsT0FBUCxHQUFpQjdCLE1BQU04QixhQUFOLENBQW9CdkIsU0FBcEIsQ0FBakIsQyIsImZpbGUiOiIwLmZlZDlmOWEwNmIyYjg4M2E3MmYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJyk7XG52YXIgaGxqcyA9IHdpbmRvdy5obGpzO1xudmFyIGggPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xuXG52YXIgQ29kZUJsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnQ29kZUJsb2NrJyxcbiAgICBtaXhpbnM6IFtQdXJlUmVuZGVyTWl4aW5dLFxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBsaXRlcmFsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsYW5ndWFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodENvZGUoKTtcbiAgICB9LFxuXG4gICAgaGlnaGxpZ2h0Q29kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy5yZWZzLmNvZGUpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxhbmd1YWdlKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaCgncHJlJywgbnVsbCxcbiAgICAgICAgICAgICAgICBoKCdjb2RlJywge1xuICAgICAgICAgICAgICAgICAgICByZWY6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5saXRlcmFsKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQ29kZUJsb2NrKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL2NvZGUtYmxvY2suanMiXSwic291cmNlUm9vdCI6IiJ9