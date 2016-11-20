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

__webpack_require__(397);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCIsIndlYnBhY2s6Ly8vLi9+L2NvZGVtaXJyb3IvdGhlbWUvbW9ub2thaS5jc3M/NjYxMiIsIndlYnBhY2s6Ly8vLi9+L2NvZGVtaXJyb3IvdGhlbWUvbW9ub2thaS5jc3M/M2IzZSoiXSwibmFtZXMiOlsiQ29kZUJsb2NrIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsInByb3BUeXBlcyIsImxpdGVyYWwiLCJzdHJpbmciLCJsYW5ndWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGlnaGxpZ2h0Q29kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImhpZ2hsaWdodEJsb2NrIiwiY29kZSIsInJlbmRlciIsIngiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0NBQVksZ0JBQU1DLFdBQU4sQ0FBa0I7QUFDbENDLGVBQWEsV0FEcUI7QUFFbENDLFVBQVEsc0NBRjBCOztBQUlsQ0MsYUFBVztBQUNUQyxhQUFTLGtCQUFVQyxNQURWO0FBRVRDLGNBQVUsa0JBQVVEO0FBRlgsR0FKdUI7O0FBU2xDRSxtQkFUa0MsK0JBU2Q7QUFDbEIsU0FBS0MsYUFBTDtBQUNELEdBWGlDO0FBYWxDQyxvQkFia0MsZ0NBYWI7QUFDbkIsU0FBS0QsYUFBTDtBQUNELEdBZmlDO0FBaUJsQ0EsZUFqQmtDLDJCQWlCbEI7QUFDZCwwQkFBS0UsY0FBTCxDQUFvQixLQUFLQyxJQUF6QjtBQUNELEdBbkJpQztBQXFCbENDLFFBckJrQyxvQkFxQnpCO0FBQUE7O0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLElBQWhCLEVBQXFCLEtBQUs7QUFBQSxtQkFBSyxNQUFLRCxJQUFMLEdBQVlFLENBQWpCO0FBQUEsV0FBMUI7QUFDRyxhQUFLQyxLQUFMLENBQVdWO0FBRGQ7QUFERixLQURGO0FBT0Q7QUE3QmlDLENBQWxCLENBQVosQ0FBTjs7QUFnQ0FXLE9BQU9DLE9BQVAsR0FBaUIsZ0JBQU1DLGFBQU4sQ0FBb0JsQixTQUFwQixDQUFqQixDOzs7Ozs7OztBQ3hDQTtBQUNBOzs7QUFHQTtBQUNBLGtHQUFtRyxxQkFBcUIsZ0JBQWdCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLHdKQUF3SixtQ0FBbUMsRUFBRSx1S0FBdUssbUNBQW1DLEVBQUUscUNBQXFDLHFCQUFxQixtQkFBbUIsRUFBRSwwQ0FBMEMsY0FBYyxFQUFFLGlEQUFpRCxnQkFBZ0IsRUFBRSx3Q0FBd0MsZ0JBQWdCLEVBQUUsb0NBQW9DLGdDQUFnQyxFQUFFLG1DQUFtQyxnQkFBZ0IsRUFBRSw4QkFBOEIsZ0JBQWdCLEVBQUUsZ0NBQWdDLGdCQUFnQixFQUFFLHFFQUFxRSxnQkFBZ0IsRUFBRSxpQ0FBaUMsZ0JBQWdCLEVBQUUsaUNBQWlDLGdCQUFnQixFQUFFLGdDQUFnQyxnQkFBZ0IsRUFBRSxvQ0FBb0MsZ0JBQWdCLEVBQUUsb0NBQW9DLGdCQUFnQixFQUFFLG9DQUFvQyxnQkFBZ0IsRUFBRSw2QkFBNkIsZ0JBQWdCLEVBQUUsaUNBQWlDLGdCQUFnQixFQUFFLDZCQUE2QixnQkFBZ0IsRUFBRSxnQ0FBZ0MsZ0JBQWdCLEVBQUUsOEJBQThCLGdCQUFnQixFQUFFLCtCQUErQixxQkFBcUIsZ0JBQWdCLEVBQUUscURBQXFELHFCQUFxQixFQUFFLDZDQUE2QywrQkFBK0IsNEJBQTRCLEdBQUc7O0FBRXY3RDs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiIwLjI0MWM3NjI3MDg1MTE3ODA2YThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbidcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodGpzJ1xuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lL21vbm9rYWkuY3NzJ1xuaW1wb3J0ICdoaWdobGlnaHRqcy9zdHlsZXMvbW9ub2thaS1zdWJsaW1lLmNzcydcblxuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY29uc3QgQ29kZUJsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvZGVCbG9jaycsXG4gIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGl0ZXJhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpXG4gIH0sXG5cbiAgaGlnaGxpZ2h0Q29kZSgpIHtcbiAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuY29kZSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlIGNsYXNzTmFtZT0nanMnIHJlZj17eCA9PiB0aGlzLmNvZGUgPSB4fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXRlcmFsfVxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICApXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlRmFjdG9yeShDb2RlQmxvY2spXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9Db2RlQmxvY2suanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzZWQgb24gU3VibGltZSBUZXh0J3MgTW9ub2thaSB0aGVtZSAqL1xcblxcbi5jbS1zLW1vbm9rYWkuQ29kZU1pcnJvciB7IGJhY2tncm91bmQ6ICMyNzI4MjI7IGNvbG9yOiAjZjhmOGYyOyB9XFxuLmNtLXMtbW9ub2thaSBkaXYuQ29kZU1pcnJvci1zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICM0OTQ4M0U7IH1cXG4uY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWxpbmU6OnNlbGVjdGlvbiwgLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6c2VsZWN0aW9uLCAuY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogcmdiYSg3MywgNzIsIDYyLCAuOTkpOyB9XFxuLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoNzMsIDcyLCA2MiwgLjk5KTsgfVxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItZ3V0dGVycyB7IGJhY2tncm91bmQ6ICMyNzI4MjI7IGJvcmRlci1yaWdodDogMHB4OyB9XFxuLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXIgeyBjb2xvcjogd2hpdGU7IH1cXG4uY20tcy1tb25va2FpIC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlci1zdWJ0bGUgeyBjb2xvcjogI2QwZDBkMDsgfVxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7IGNvbG9yOiAjZDBkMGQwOyB9XFxuLmNtLXMtbW9ub2thaSAuQ29kZU1pcnJvci1jdXJzb3IgeyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmOGY4ZjA7IH1cXG5cXG4uY20tcy1tb25va2FpIHNwYW4uY20tY29tbWVudCB7IGNvbG9yOiAjNzU3MTVlOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLWF0b20geyBjb2xvcjogI2FlODFmZjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1udW1iZXIgeyBjb2xvcjogI2FlODFmZjsgfVxcblxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1wcm9wZXJ0eSwgLmNtLXMtbW9ub2thaSBzcGFuLmNtLWF0dHJpYnV0ZSB7IGNvbG9yOiAjYTZlMjJlOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLWtleXdvcmQgeyBjb2xvcjogI2Y5MjY3MjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1idWlsdGluIHsgY29sb3I6ICM2NmQ5ZWY7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tc3RyaW5nIHsgY29sb3I6ICNlNmRiNzQ7IH1cXG5cXG4uY20tcy1tb25va2FpIHNwYW4uY20tdmFyaWFibGUgeyBjb2xvcjogI2Y4ZjhmMjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS12YXJpYWJsZS0yIHsgY29sb3I6ICM5ZWZmZmY7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tdmFyaWFibGUtMyB7IGNvbG9yOiAjNjZkOWVmOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLWRlZiB7IGNvbG9yOiAjZmQ5NzFmOyB9XFxuLmNtLXMtbW9ub2thaSBzcGFuLmNtLWJyYWNrZXQgeyBjb2xvcjogI2Y4ZjhmMjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS10YWcgeyBjb2xvcjogI2Y5MjY3MjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1oZWFkZXIgeyBjb2xvcjogI2FlODFmZjsgfVxcbi5jbS1zLW1vbm9rYWkgc3Bhbi5jbS1saW5rIHsgY29sb3I6ICNhZTgxZmY7IH1cXG4uY20tcy1tb25va2FpIHNwYW4uY20tZXJyb3IgeyBiYWNrZ3JvdW5kOiAjZjkyNjcyOyBjb2xvcjogI2Y4ZjhmMDsgfVxcblxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHsgYmFja2dyb3VuZDogIzM3MzgzMTsgfVxcbi5jbS1zLW1vbm9rYWkgLkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9jb2RlbWlycm9yL3RoZW1lL21vbm9rYWkuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbm9rYWkuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb25va2FpLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9ub2thaS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb2RlbWlycm9yL3RoZW1lL21vbm9rYWkuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==