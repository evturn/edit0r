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

__webpack_require__(395);

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

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(159)();
// imports


// module
exports.push([module.i, "/*\n\nDark style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #444;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-section,\n.hljs-link {\n  color: white;\n}\n\n.hljs,\n.hljs-subst {\n  color: #ddd;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-name,\n.hljs-type,\n.hljs-attribute,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-built_in,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #d88;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #777;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-title,\n.hljs-section,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n", ""]);

// exports


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(380)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(394, function() {
			var newContent = __webpack_require__(394);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlQmxvY2suanM/MWNhMCIsIndlYnBhY2s6Ly8vLi9+L2hpZ2hsaWdodGpzL3N0eWxlcy9kYXJrLmNzcz80ZDk2Iiwid2VicGFjazovLy8uL34vaGlnaGxpZ2h0anMvc3R5bGVzL2RhcmsuY3NzP2IyZDgqIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJwcm9wVHlwZXMiLCJsaXRlcmFsIiwic3RyaW5nIiwibGFuZ3VhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImhpZ2hsaWdodENvZGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJoaWdobGlnaHRCbG9jayIsImNvZGUiLCJyZW5kZXIiLCJ4IiwicHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdDQUFZLGdCQUFNQyxXQUFOLENBQWtCO0FBQ2xDQyxlQUFhLFdBRHFCO0FBRWxDQyxVQUFRLHNDQUYwQjs7QUFJbENDLGFBQVc7QUFDVEMsYUFBUyxrQkFBVUMsTUFEVjtBQUVUQyxjQUFVLGtCQUFVRDtBQUZYLEdBSnVCOztBQVNsQ0UsbUJBVGtDLCtCQVNkO0FBQ2xCLFNBQUtDLGFBQUw7QUFDRCxHQVhpQztBQWFsQ0Msb0JBYmtDLGdDQWFiO0FBQ25CLFNBQUtELGFBQUw7QUFDRCxHQWZpQztBQWlCbENBLGVBakJrQywyQkFpQmxCO0FBQ2QsMEJBQUtFLGNBQUwsQ0FBb0IsS0FBS0MsSUFBekI7QUFDRCxHQW5CaUM7QUFxQmxDQyxRQXJCa0Msb0JBcUJ6QjtBQUFBOztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxJQUFoQixFQUFxQixLQUFLO0FBQUEsbUJBQUssTUFBS0QsSUFBTCxHQUFZRSxDQUFqQjtBQUFBLFdBQTFCO0FBQ0csYUFBS0MsS0FBTCxDQUFXVjtBQURkO0FBREYsS0FERjtBQU9EO0FBN0JpQyxDQUFsQixDQUFaLENBQU47O0FBZ0NBVyxPQUFPQyxPQUFQLEdBQWlCLGdCQUFNQyxhQUFOLENBQW9CbEIsU0FBcEIsQ0FBakIsQzs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBR0E7QUFDQSxrSUFBbUksbUJBQW1CLHFCQUFxQixtQkFBbUIscUJBQXFCLEdBQUcscUZBQXFGLGlCQUFpQixHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRyw0TUFBNE0sZ0JBQWdCLEdBQUcsK0RBQStELGdCQUFnQixHQUFHLDhJQUE4SSxzQkFBc0IsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUc7O0FBRWozQjs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiIwLjQ4MTNlZDhiZGE4M2Q2Yjg0MTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbidcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodGpzJ1xuaW1wb3J0ICdoaWdobGlnaHRqcy9zdHlsZXMvZGFyay5jc3MnXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCBDb2RlQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ29kZUJsb2NrJyxcbiAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsaXRlcmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRDb2RlKClcbiAgfSxcblxuICBoaWdobGlnaHRDb2RlKCkge1xuICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy5jb2RlKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGUgY2xhc3NOYW1lPSdqcycgcmVmPXt4ID0+IHRoaXMuY29kZSA9IHh9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxpdGVyYWx9XG4gICAgICAgIDwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIClcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KENvZGVCbG9jaylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0NvZGVCbG9jay5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbkRhcmsgc3R5bGUgZnJvbSBzb2Z0d2FyZW1hbmlhY3Mub3JnIChjKSBJdmFuIFNhZ2FsYWV2IDxNYW5pYWNAU29mdHdhcmVNYW5pYWNzLk9yZz5cXG5cXG4qL1xcblxcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYmFja2dyb3VuZDogIzQ0NDtcXG59XFxuXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLWxpbmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGxqcyxcXG4uaGxqcy1zdWJzdCB7XFxuICBjb2xvcjogI2RkZDtcXG59XFxuXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXRpdGxlLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1hdHRyaWJ1dGUsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1hZGRpdGlvbixcXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS10YWcsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUge1xcbiAgY29sb3I6ICNkODg7XFxufVxcblxcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUsXFxuLmhsanMtZGVsZXRpb24sXFxuLmhsanMtbWV0YSB7XFxuICBjb2xvcjogIzc3NztcXG59XFxuXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLWRvY3RhZyxcXG4uaGxqcy10eXBlLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9oaWdobGlnaHRqcy9zdHlsZXMvZGFyay5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZGFyay5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2RhcmsuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kYXJrLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hpZ2hsaWdodGpzL3N0eWxlcy9kYXJrLmNzc1xuLy8gbW9kdWxlIGlkID0gMzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=