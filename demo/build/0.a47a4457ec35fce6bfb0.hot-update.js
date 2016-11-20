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

__webpack_require__(389);

__webpack_require__(397);

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

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(159)();
// imports


// module
exports.push([module.i, "/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3 { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n", ""]);

// exports


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(396);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(380)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(396, function() {
			var newContent = __webpack_require__(396);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCIsIndlYnBhY2s6Ly8vLi9+L2NvZGVtaXJyb3IvdGhlbWUvbW9ub2thaS5jc3M/NjYxMiIsIndlYnBhY2s6Ly8vLi9+L2NvZGVtaXJyb3IvdGhlbWUvbW9ub2thaS5jc3M/M2IzZSoiXSwibmFtZXMiOlsiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwiY29kZSIsInJlbmRlciIsIngiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0NBQVksZ0JBQU1DLFdBQU4sQ0FBa0I7QUFDbENDLGVBQWEsV0FEcUI7QUFFbENDLFVBQVEsc0NBRjBCOztBQUlsQ0MsYUFBVztBQUNUQyxhQUFTLGtCQUFVQyxNQURWO0FBRVRDLGNBQVUsa0JBQVVEO0FBRlgsR0FKdUI7O0FBU2xDRSxtQkFUa0MsK0JBU2Q7QUFDbEIsU0FBS0MsYUFBTDtBQUNELEdBWGlDO0FBYWxDQyxvQkFia0MsZ0NBYWI7QUFDbkIsU0FBS0QsYUFBTDtBQUNELEdBZmlDO0FBaUJsQ0EsZUFqQmtDLDJCQWlCbEI7QUFDZCwwQkFBS0UsY0FBTCxDQUFvQixLQUFLQyxJQUF6QjtBQUNELEdBbkJpQztBQXFCbENDLFFBckJrQyxvQkFxQnpCO0FBQUE7O0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLElBQWhCLEVBQXFCLEtBQUs7QUFBQSxtQkFBSyxNQUFLRCxJQUFMLEdBQVlFLENBQWpCO0FBQUEsV0FBMUI7QUFDRyxhQUFLQyxLQUFMLENBQVdWO0FBRGQ7QUFERixLQURGO0FBT0Q7QUE3QmlDLENBQWxCLENBQVosQ0FBTjs7QUFnQ0FXLE9BQU9DLE9BQVAsR0FBaUIsZ0JBQU1DLGFBQU4sQ0FBb0JsQixTQUFwQixDQUFqQixDOzs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFHQTtBQUNBLGtHQUFtRyxxQkFBcUIsZ0JBQWdCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLHdKQUF3SixtQ0FBbUMsRUFBRSx1S0FBdUssbUNBQW1DLEVBQUUscUNBQXFDLHFCQUFxQixtQkFBbUIsRUFBRSwwQ0FBMEMsY0FBYyxFQUFFLGlEQUFpRCxnQkFBZ0IsRUFBRSx3Q0FBd0MsZ0JBQWdCLEVBQUUsb0NBQW9DLGdDQUFnQyxFQUFFLG1DQUFtQyxnQkFBZ0IsRUFBRSw4QkFBOEIsZ0JBQWdCLEVBQUUsZ0NBQWdDLGdCQUFnQixFQUFFLHFFQUFxRSxnQkFBZ0IsRUFBRSxpQ0FBaUMsZ0JBQWdCLEVBQUUsaUNBQWlDLGdCQUFnQixFQUFFLGdDQUFnQyxnQkFBZ0IsRUFBRSxvQ0FBb0MsZ0JBQWdCLEVBQUUsb0NBQW9DLGdCQUFnQixFQUFFLG9DQUFvQyxnQkFBZ0IsRUFBRSw2QkFBNkIsZ0JBQWdCLEVBQUUsaUNBQWlDLGdCQUFnQixFQUFFLDZCQUE2QixnQkFBZ0IsRUFBRSxnQ0FBZ0MsZ0JBQWdCLEVBQUUsOEJBQThCLGdCQUFnQixFQUFFLCtCQUErQixxQkFBcUIsZ0JBQWdCLEVBQUUscURBQXFELHFCQUFxQixFQUFFLDZDQUE2QywrQkFBK0IsNEJBQTRCLEdBQUc7O0FBRXY3RDs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiIwLmE0N2E0NDU3ZWMzNWZjZTZiZmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbidcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodGpzJ1xuaW1wb3J0ICdoaWdobGlnaHRqcy9zdHlsZXMvbW9ub2thaS1zdWJsaW1lLmNzcydcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9tb25va2FpLmNzcydcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IENvZGVCbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDb2RlQmxvY2snLFxuICBtaXhpbnM6IFtQdXJlUmVuZGVyTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxpdGVyYWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodENvZGUoKVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodENvZGUoKVxuICB9LFxuXG4gIGhpZ2hsaWdodENvZGUoKSB7XG4gICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLmNvZGUpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZSBjbGFzc05hbWU9J2pzJyByZWY9e3ggPT4gdGhpcy5jb2RlID0geH0+XG4gICAgICAgICAge3RoaXMucHJvcHMubGl0ZXJhbH1cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQ29kZUJsb2NrKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZUJsb2NrLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJhc2VkIG9uIFN1YmxpbWUgVGV4dCdzIE1vbm9rYWkgdGhlbWUgKi9cXG5cXG4uY20tcy1tb25va2FpLkNvZGVNaXJyb3IgeyBiYWNrZ3JvdW5kOiAjMjcyODIyOyBjb2xvcjogI2Y4ZjhmMjsgfVxcbi5jbS1zLW1vbm9rYWkgZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjNDk0ODNFOyB9XFxuLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46OnNlbGVjdGlvbiwgLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoNzMsIDcyLCA2MiwgLjk5KTsgfVxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46Oi1tb3otc2VsZWN0aW9uLCAuY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiByZ2JhKDczLCA3MiwgNjIsIC45OSk7IH1cXG4uY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWd1dHRlcnMgeyBiYWNrZ3JvdW5kOiAjMjcyODIyOyBib3JkZXItcmlnaHQ6IDBweDsgfVxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyIHsgY29sb3I6IHdoaXRlOyB9XFxuLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXItc3VidGxlIHsgY29sb3I6ICNkMGQwZDA7IH1cXG4uY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWxpbmVudW1iZXIgeyBjb2xvcjogI2QwZDBkMDsgfVxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItY3Vyc29yIHsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjhmOGYwOyB9XFxuXFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLWNvbW1lbnQgeyBjb2xvcjogIzc1NzE1ZTsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1hdG9tIHsgY29sb3I6ICNhZTgxZmY7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tbnVtYmVyIHsgY29sb3I6ICNhZTgxZmY7IH1cXG5cXG4uY20tcy1tb25va2FpIHNwYW4uY20tcHJvcGVydHksIC5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1hdHRyaWJ1dGUgeyBjb2xvcjogI2E2ZTIyZTsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1rZXl3b3JkIHsgY29sb3I6ICNmOTI2NzI7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tYnVpbHRpbiB7IGNvbG9yOiAjNjZkOWVmOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLXN0cmluZyB7IGNvbG9yOiAjZTZkYjc0OyB9XFxuXFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLXZhcmlhYmxlIHsgY29sb3I6ICNmOGY4ZjI7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tdmFyaWFibGUtMiB7IGNvbG9yOiAjOWVmZmZmOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLXZhcmlhYmxlLTMgeyBjb2xvcjogIzY2ZDllZjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1kZWYgeyBjb2xvcjogI2ZkOTcxZjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1icmFja2V0IHsgY29sb3I6ICNmOGY4ZjI7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tdGFnIHsgY29sb3I6ICNmOTI2NzI7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20taGVhZGVyIHsgY29sb3I6ICNhZTgxZmY7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tbGluayB7IGNvbG9yOiAjYWU4MWZmOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLWVycm9yIHsgYmFja2dyb3VuZDogI2Y5MjY3MjsgY29sb3I6ICNmOGY4ZjA7IH1cXG5cXG4uY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7IGJhY2tncm91bmQ6ICMzNzM4MzE7IH1cXG4uY20tcy1tb25va2FpIC5Db2RlTWlycm9yLW1hdGNoaW5nYnJhY2tldCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vY29kZW1pcnJvci90aGVtZS9tb25va2FpLmNzc1xuLy8gbW9kdWxlIGlkID0gMzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb25va2FpLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9ub2thaS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbm9rYWkuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29kZW1pcnJvci90aGVtZS9tb25va2FpLmNzc1xuLy8gbW9kdWxlIGlkID0gMzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=