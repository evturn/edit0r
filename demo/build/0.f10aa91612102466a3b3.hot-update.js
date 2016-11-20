webpackHotUpdate(0,{

/***/ 147:
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

var _style = __webpack_require__(83);

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

var PureRenderMixin = __webpack_require__(283);
var hljs = window.hljs;


var CodeBlock = _wrapComponent('CodeBlock')(_react3.default.createClass({
    displayName: 'CodeBlock',
    mixins: [PureRenderMixin],
    propTypes: {
        literal: _react3.default.PropTypes.string,
        language: _react3.default.PropTypes.string
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
        return _react3.default.createElement(
            'pre',
            null,
            _react3.default.createElement(
                'code',
                { ref: 'code', className: 'js' },
                this.props.literal
            )
        );
    }
}));

module.exports = _react3.default.createFactory(CodeBlock);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb2RlLWJsb2NrLmpzPzEzNTAiXSwibmFtZXMiOlsiUHVyZVJlbmRlck1peGluIiwicmVxdWlyZSIsImhsanMiLCJ3aW5kb3ciLCJDb2RlQmxvY2siLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwibWl4aW5zIiwicHJvcFR5cGVzIiwibGl0ZXJhbCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxhbmd1YWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJoaWdobGlnaHRDb2RlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaGlnaGxpZ2h0QmxvY2siLCJyZWZzIiwiY29kZSIsInJlbmRlciIsInByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBLElBQUlBLGtCQUFrQixtQkFBQUMsQ0FBUSxHQUFSLENBQXRCO0FBQ0EsSUFBSUMsT0FBT0MsT0FBT0QsSUFBbEI7OztBQUdBLElBQUlFLHdDQUFZLGdCQUFNQyxXQUFOLENBQWtCO0FBQzlCQyxpQkFBYSxXQURpQjtBQUU5QkMsWUFBUSxDQUFDUCxlQUFELENBRnNCO0FBRzlCUSxlQUFXO0FBQ1BDLGlCQUFTLGdCQUFNQyxTQUFOLENBQWdCQyxNQURsQjtBQUVQQyxrQkFBVSxnQkFBTUYsU0FBTixDQUFnQkM7QUFGbkIsS0FIbUI7O0FBUTlCRSx1QkFBbUIsNkJBQVc7QUFDMUIsYUFBS0MsYUFBTDtBQUNILEtBVjZCOztBQVk5QkMsd0JBQW9CLDhCQUFXO0FBQzNCLGFBQUtELGFBQUw7QUFDSCxLQWQ2Qjs7QUFnQjlCQSxtQkFBZSx5QkFBVztBQUN0QlosYUFBS2MsY0FBTCxDQUFvQixLQUFLQyxJQUFMLENBQVVDLElBQTlCO0FBQ0gsS0FsQjZCOztBQW9COUJDLFlBQVEsa0JBQVc7QUFDakIsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQU0sS0FBSSxNQUFWLEVBQWlCLFdBQVUsSUFBM0I7QUFDRyxxQkFBS0MsS0FBTCxDQUFXWDtBQURkO0FBREYsU0FERjtBQU9EO0FBNUI2QixDQUFsQixDQUFaLENBQUo7O0FBK0JBWSxPQUFPQyxPQUFQLEdBQWlCLGdCQUFNQyxhQUFOLENBQW9CbkIsU0FBcEIsQ0FBakIsQyIsImZpbGUiOiIwLmYxMGFhOTE2MTIxMDI0NjZhM2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG52YXIgUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJylcbnZhciBobGpzID0gd2luZG93LmhsanNcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbnZhciBDb2RlQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdDb2RlQmxvY2snLFxuICAgIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGxpdGVyYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxhbmd1YWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgICB9LFxuXG4gICAgaGlnaGxpZ2h0Q29kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy5yZWZzLmNvZGUpXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cHJlPlxuICAgICAgICAgIDxjb2RlIHJlZj0nY29kZScgY2xhc3NOYW1lPSdqcyc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saXRlcmFsfVxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9wcmU+XG4gICAgICApXG4gICAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KENvZGVCbG9jaylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL2NvZGUtYmxvY2suanMiXSwic291cmNlUm9vdCI6IiJ9