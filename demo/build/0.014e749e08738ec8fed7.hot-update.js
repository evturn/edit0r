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
            className: _style2.default.js
        }, this.props.literal));
    }
}));

module.exports = React.createFactory(CodeBlock);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzPzEzNTAiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHVyZVJlbmRlck1peGluIiwiaGxqcyIsIndpbmRvdyIsImgiLCJjcmVhdGVFbGVtZW50IiwiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwicmVmcyIsImNvZGUiLCJyZW5kZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJqcyIsInByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGtCQUFrQixtQkFBQUQsQ0FBUSxHQUFSLENBQXRCO0FBQ0EsSUFBSUUsT0FBT0MsT0FBT0QsSUFBbEI7QUFDQSxJQUFJRSxJQUFJTCxNQUFNTSxhQUFkOzs7QUFHQSxJQUFJQyx3Q0FBWVAsTUFBTVEsV0FBTixDQUFrQjtBQUM5QkMsaUJBQWEsV0FEaUI7QUFFOUJDLFlBQVEsQ0FBQ1IsZUFBRCxDQUZzQjtBQUc5QlMsZUFBVztBQUNQQyxpQkFBU1osTUFBTWEsU0FBTixDQUFnQkMsTUFEbEI7QUFFUEMsa0JBQVVmLE1BQU1hLFNBQU4sQ0FBZ0JDO0FBRm5CLEtBSG1COztBQVE5QkUsdUJBQW1CLDZCQUFXO0FBQzFCLGFBQUtDLGFBQUw7QUFDSCxLQVY2Qjs7QUFZOUJDLHdCQUFvQiw4QkFBVztBQUMzQixhQUFLRCxhQUFMO0FBQ0gsS0FkNkI7O0FBZ0I5QkEsbUJBQWUseUJBQVc7QUFDdEJkLGFBQUtnQixjQUFMLENBQW9CLEtBQUtDLElBQUwsQ0FBVUMsSUFBOUI7QUFDSCxLQWxCNkI7O0FBb0I5QkMsWUFBUSxrQkFBVztBQUNmLGVBQ0lqQixFQUFFLEtBQUYsRUFBUyxJQUFULEVBQ0lBLEVBQUUsTUFBRixFQUFVO0FBQ05rQixpQkFBSyxNQURDO0FBRU5DLHVCQUFXLGdCQUFJQztBQUZULFNBQVYsRUFHRyxLQUFLQyxLQUFMLENBQVdkLE9BSGQsQ0FESixDQURKO0FBUUg7QUE3QjZCLENBQWxCLENBQVosQ0FBSjs7QUFnQ0FlLE9BQU9DLE9BQVAsR0FBaUI1QixNQUFNNkIsYUFBTixDQUFvQnRCLFNBQXBCLENBQWpCLEMiLCJmaWxlIjoiMC4wMTRlNzQ5ZTA4NzM4ZWM4ZmVkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFB1cmVSZW5kZXJNaXhpbiA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbicpO1xudmFyIGhsanMgPSB3aW5kb3cuaGxqcztcbnZhciBoID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbnZhciBDb2RlQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdDb2RlQmxvY2snLFxuICAgIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGxpdGVyYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxhbmd1YWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpO1xuICAgIH0sXG5cbiAgICBoaWdobGlnaHRDb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLnJlZnMuY29kZSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBoKCdwcmUnLCBudWxsLFxuICAgICAgICAgICAgICAgIGgoJ2NvZGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNzcy5qcyxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnByb3BzLmxpdGVyYWwpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlRmFjdG9yeShDb2RlQmxvY2spO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvY29kZS1ibG9jay5qcyJdLCJzb3VyY2VSb290IjoiIn0=