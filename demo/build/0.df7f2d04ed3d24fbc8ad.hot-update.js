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

__webpack_require__(393);

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

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(159)();
// imports


// module
exports.push([module.i, "/*\nMonokai style - ported by Luigi Maselli - http://grigio.org\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #272822; color: #ddd;\n}\n\n.hljs-tag,\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-strong,\n.hljs-name {\n  color: #f92672;\n}\n\n.hljs-code {\n  color: #66d9ef;\n}\n\n.hljs-class .hljs-title {\n  color: white;\n}\n\n.hljs-attribute,\n.hljs-symbol,\n.hljs-regexp,\n.hljs-link {\n  color: #bf79db;\n}\n\n.hljs-string,\n.hljs-bullet,\n.hljs-subst,\n.hljs-title,\n.hljs-section,\n.hljs-emphasis,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #a6e22e;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-doctag,\n.hljs-title,\n.hljs-section,\n.hljs-type,\n.hljs-selector-id {\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(380)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(392, function() {
			var newContent = __webpack_require__(392);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCIsIndlYnBhY2s6Ly8vLi9+L2hpZ2hsaWdodGpzL3N0eWxlcy9tb25va2FpLmNzcz8yZjA3Iiwid2VicGFjazovLy8uL34vaGlnaGxpZ2h0anMvc3R5bGVzL21vbm9rYWkuY3NzPzM3OTUqIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJwcm9wVHlwZXMiLCJsaXRlcmFsIiwic3RyaW5nIiwibGFuZ3VhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImhpZ2hsaWdodENvZGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJoaWdobGlnaHRCbG9jayIsImNvZGUiLCJyZW5kZXIiLCJ4IiwicHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdDQUFZLGdCQUFNQyxXQUFOLENBQWtCO0FBQ2xDQyxlQUFhLFdBRHFCO0FBRWxDQyxVQUFRLHNDQUYwQjs7QUFJbENDLGFBQVc7QUFDVEMsYUFBUyxrQkFBVUMsTUFEVjtBQUVUQyxjQUFVLGtCQUFVRDtBQUZYLEdBSnVCOztBQVNsQ0UsbUJBVGtDLCtCQVNkO0FBQ2xCLFNBQUtDLGFBQUw7QUFDRCxHQVhpQztBQWFsQ0Msb0JBYmtDLGdDQWFiO0FBQ25CLFNBQUtELGFBQUw7QUFDRCxHQWZpQztBQWlCbENBLGVBakJrQywyQkFpQmxCO0FBQ2QsMEJBQUtFLGNBQUwsQ0FBb0IsS0FBS0MsSUFBekI7QUFDRCxHQW5CaUM7QUFxQmxDQyxRQXJCa0Msb0JBcUJ6QjtBQUFBOztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxJQUFoQixFQUFxQixLQUFLO0FBQUEsbUJBQUssTUFBS0QsSUFBTCxHQUFZRSxDQUFqQjtBQUFBLFdBQTFCO0FBQ0csYUFBS0MsS0FBTCxDQUFXVjtBQURkO0FBREYsS0FERjtBQU9EO0FBN0JpQyxDQUFsQixDQUFaLENBQU47O0FBZ0NBVyxPQUFPQyxPQUFQLEdBQWlCLGdCQUFNQyxhQUFOLENBQW9CbEIsU0FBcEIsQ0FBakIsQzs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBR0E7QUFDQSx1R0FBd0csbUJBQW1CLHFCQUFxQixtQkFBbUIsd0JBQXdCLGFBQWEsR0FBRyxnR0FBZ0csbUJBQW1CLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLDZCQUE2QixpQkFBaUIsR0FBRyxnRUFBZ0UsbUJBQW1CLEdBQUcsZ1JBQWdSLG1CQUFtQixHQUFHLCtEQUErRCxtQkFBbUIsR0FBRyxzSUFBc0ksc0JBQXNCLEdBQUc7O0FBRXhnQzs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiIwLmRmN2YyZDA0ZWQzZDI0ZmJjOGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbidcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodGpzJ1xuaW1wb3J0ICdoaWdobGlnaHRqcy9zdHlsZXMvbW9ub2thaS5jc3MnXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCBDb2RlQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ29kZUJsb2NrJyxcbiAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsaXRlcmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgfSxcblxuICBoaWdobGlnaHRDb2RlKCkge1xuICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy5jb2RlKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGUgY2xhc3NOYW1lPSdqcycgcmVmPXt4ID0+IHRoaXMuY29kZSA9IHh9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxpdGVyYWx9XG4gICAgICAgIDwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIClcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KENvZGVCbG9jaylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0NvZGVCbG9jay5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbk1vbm9rYWkgc3R5bGUgLSBwb3J0ZWQgYnkgTHVpZ2kgTWFzZWxsaSAtIGh0dHA6Ly9ncmlnaW8ub3JnXFxuKi9cXG5cXG4uaGxqcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJhY2tncm91bmQ6ICMyNzI4MjI7IGNvbG9yOiAjZGRkO1xcbn1cXG5cXG4uaGxqcy10YWcsXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy1zdHJvbmcsXFxuLmhsanMtbmFtZSB7XFxuICBjb2xvcjogI2Y5MjY3MjtcXG59XFxuXFxuLmhsanMtY29kZSB7XFxuICBjb2xvcjogIzY2ZDllZjtcXG59XFxuXFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGxqcy1hdHRyaWJ1dGUsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1saW5rIHtcXG4gIGNvbG9yOiAjYmY3OWRiO1xcbn1cXG5cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLXN1YnN0LFxcbi5obGpzLXRpdGxlLFxcbi5obGpzLXNlY3Rpb24sXFxuLmhsanMtZW1waGFzaXMsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1idWlsdGluLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItYXR0cixcXG4uaGxqcy1zZWxlY3Rvci1wc2V1ZG8sXFxuLmhsanMtYWRkaXRpb24sXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdGFnLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlIHtcXG4gIGNvbG9yOiAjYTZlMjJlO1xcbn1cXG5cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlLFxcbi5obGpzLWRlbGV0aW9uLFxcbi5obGpzLW1ldGEge1xcbiAgY29sb3I6ICM3NTcxNWU7XFxufVxcblxcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtZG9jdGFnLFxcbi5obGpzLXRpdGxlLFxcbi5obGpzLXNlY3Rpb24sXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L2hpZ2hsaWdodGpzL3N0eWxlcy9tb25va2FpLmNzc1xuLy8gbW9kdWxlIGlkID0gMzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb25va2FpLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9ub2thaS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL21vbm9rYWkuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGlnaGxpZ2h0anMvc3R5bGVzL21vbm9rYWkuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==