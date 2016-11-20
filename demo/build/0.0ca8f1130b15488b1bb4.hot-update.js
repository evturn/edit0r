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

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(159)();
// imports


// module
exports.push([module.i, "/*\n\nMonokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #23241f;\n}\n\n.hljs,\n.hljs-tag,\n.hljs-subst {\n  color: #f8f8f2;\n}\n\n.hljs-strong,\n.hljs-emphasis {\n  color: #a8a8a2;\n}\n\n.hljs-bullet,\n.hljs-quote,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-link {\n  color: #ae81ff;\n}\n\n.hljs-code,\n.hljs-title,\n.hljs-section,\n.hljs-selector-class {\n  color: #a6e22e;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-name,\n.hljs-attr {\n  color: #f92672;\n}\n\n.hljs-symbol,\n.hljs-attribute {\n  color: #66d9ef;\n}\n\n.hljs-params,\n.hljs-class .hljs-title {\n  color: #f8f8f2;\n}\n\n.hljs-string,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-id,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-variable {\n  color: #e6db74;\n}\n\n.hljs-comment,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e;\n}\n", ""]);

// exports


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(380)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(388, function() {
			var newContent = __webpack_require__(388);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCIsIndlYnBhY2s6Ly8vLi9+L2hpZ2hsaWdodGpzL3N0eWxlcy9tb25va2FpLXN1YmxpbWUuY3NzPzNhOWIiLCJ3ZWJwYWNrOi8vLy4vfi9oaWdobGlnaHRqcy9zdHlsZXMvbW9ub2thaS1zdWJsaW1lLmNzcz9hMjdkKiJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwibWl4aW5zIiwicHJvcFR5cGVzIiwibGl0ZXJhbCIsInN0cmluZyIsImxhbmd1YWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJoaWdobGlnaHRDb2RlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaGlnaGxpZ2h0QmxvY2siLCJjb2RlIiwicmVuZGVyIiwieCIsInByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx3Q0FBWSxnQkFBTUMsV0FBTixDQUFrQjtBQUNsQ0MsZUFBYSxXQURxQjtBQUVsQ0MsVUFBUSxzQ0FGMEI7O0FBSWxDQyxhQUFXO0FBQ1RDLGFBQVMsa0JBQVVDLE1BRFY7QUFFVEMsY0FBVSxrQkFBVUQ7QUFGWCxHQUp1Qjs7QUFTbENFLG1CQVRrQywrQkFTZDtBQUNsQixTQUFLQyxhQUFMO0FBQ0QsR0FYaUM7QUFhbENDLG9CQWJrQyxnQ0FhYjtBQUNuQixTQUFLRCxhQUFMO0FBQ0QsR0FmaUM7QUFpQmxDQSxlQWpCa0MsMkJBaUJsQjtBQUNkLDBCQUFLRSxjQUFMLENBQW9CLEtBQUtDLElBQXpCO0FBQ0QsR0FuQmlDO0FBcUJsQ0MsUUFyQmtDLG9CQXFCekI7QUFBQTs7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsSUFBaEIsRUFBcUIsS0FBSztBQUFBLG1CQUFLLE1BQUtELElBQUwsR0FBWUUsQ0FBakI7QUFBQSxXQUExQjtBQUNHLGFBQUtDLEtBQUwsQ0FBV1Y7QUFEZDtBQURGLEtBREY7QUFPRDtBQTdCaUMsQ0FBbEIsQ0FBWixDQUFOOztBQWdDQVcsT0FBT0MsT0FBUCxHQUFpQixnQkFBTUMsYUFBTixDQUFvQmxCLFNBQXBCLENBQWpCLEM7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUdBO0FBQ0EseUlBQTBJLG1CQUFtQixxQkFBcUIsbUJBQW1CLHdCQUF3QixHQUFHLHFDQUFxQyxtQkFBbUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsMkZBQTJGLG1CQUFtQixHQUFHLHFFQUFxRSxtQkFBbUIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsb0JBQW9CLHVCQUF1QixHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsNENBQTRDLG1CQUFtQixHQUFHLG1NQUFtTSxtQkFBbUIsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUc7O0FBRTdtQzs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiIwLjBjYThmMTEzMGIxNTQ4OGIxYmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbidcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodGpzJ1xuaW1wb3J0ICdoaWdobGlnaHRqcy9zdHlsZXMvbW9ub2thaS1zdWJsaW1lLmNzcydcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IENvZGVCbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDb2RlQmxvY2snLFxuICBtaXhpbnM6IFtQdXJlUmVuZGVyTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxpdGVyYWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodENvZGUoKVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodENvZGUoKVxuICB9LFxuXG4gIGhpZ2hsaWdodENvZGUoKSB7XG4gICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLmNvZGUpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZSBjbGFzc05hbWU9J2pzJyByZWY9e3ggPT4gdGhpcy5jb2RlID0geH0+XG4gICAgICAgICAge3RoaXMucHJvcHMubGl0ZXJhbH1cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQ29kZUJsb2NrKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZUJsb2NrLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuXFxuTW9ub2thaSBTdWJsaW1lIHN0eWxlLiBEZXJpdmVkIGZyb20gTW9ub2thaSBieSBub2Zvcm1ub2NvbnRlbnQgaHR0cDovL25uLm1pdC1saWNlbnNlLm9yZy9cXG5cXG4qL1xcblxcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYmFja2dyb3VuZDogIzIzMjQxZjtcXG59XFxuXFxuLmhsanMsXFxuLmhsanMtdGFnLFxcbi5obGpzLXN1YnN0IHtcXG4gIGNvbG9yOiAjZjhmOGYyO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcsXFxuLmhsanMtZW1waGFzaXMge1xcbiAgY29sb3I6ICNhOGE4YTI7XFxufVxcblxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1xdW90ZSxcXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtbGluayB7XFxuICBjb2xvcjogI2FlODFmZjtcXG59XFxuXFxuLmhsanMtY29kZSxcXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzIHtcXG4gIGNvbG9yOiAjYTZlMjJlO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1hdHRyIHtcXG4gIGNvbG9yOiAjZjkyNjcyO1xcbn1cXG5cXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYXR0cmlidXRlIHtcXG4gIGNvbG9yOiAjNjZkOWVmO1xcbn1cXG5cXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICNmOGY4ZjI7XFxufVxcblxcbi5obGpzLXN0cmluZyxcXG4uaGxqcy10eXBlLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1hdHRyLFxcbi5obGpzLXNlbGVjdG9yLXBzZXVkbyxcXG4uaGxqcy1hZGRpdGlvbixcXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSB7XFxuICBjb2xvcjogI2U2ZGI3NDtcXG59XFxuXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1kZWxldGlvbixcXG4uaGxqcy1tZXRhIHtcXG4gIGNvbG9yOiAjNzU3MTVlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vaGlnaGxpZ2h0anMvc3R5bGVzL21vbm9rYWktc3VibGltZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9ub2thaS1zdWJsaW1lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9ub2thaS1zdWJsaW1lLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9ub2thaS1zdWJsaW1lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hpZ2hsaWdodGpzL3N0eWxlcy9tb25va2FpLXN1YmxpbWUuY3NzXG4vLyBtb2R1bGUgaWQgPSAzODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==