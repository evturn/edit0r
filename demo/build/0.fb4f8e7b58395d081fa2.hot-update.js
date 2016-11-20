webpackHotUpdate(0,{

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(36);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(14);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(37);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _codemirror = __webpack_require__(150);

var _codemirror2 = _interopRequireDefault(_codemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CodeMirrorEditor: {
    displayName: 'CodeMirrorEditor'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/CodeMirrorEditor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/CodeMirrorEditor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CodeMirrorEditor = _wrapComponent('CodeMirrorEditor')((_temp = _class = function (_Component) {
  _inherits(CodeMirrorEditor, _Component);

  function CodeMirrorEditor(props) {
    _classCallCheck(this, CodeMirrorEditor);

    var _this = _possibleConstructorReturn(this, (CodeMirrorEditor.__proto__ || Object.getPrototypeOf(CodeMirrorEditor)).call(this, props));

    _this.state = { isControlled: _this.props.value != null };

    _this.controlMyScroll = _this.controlMyScroll.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(CodeMirrorEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var forceTextArea = this.props.forceTextArea;

      if (!forceTextArea) {
        this.editor = _codemirror2.default.fromTextArea(this.editorRef, this.props);
        this.editor.on('change', this.handleChange);
        this.editor.on('scroll', this.controlMyScroll);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.editor) {
        if (this.props.value != null) {
          if (this.editor.getValue() !== this.props.value) {
            this.editor.setValue(this.props.value);
          }
        }
      }
    }
  }, {
    key: 'controlMyScroll',
    value: function controlMyScroll(e) {
      var _e$doc = e.doc,
          height = _e$doc.height,
          scrollTop = _e$doc.scrollTop;

      this.props.myBodyIsReady(parseInt(scrollTop / height * 100));
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var _props = this.props,
          onChange = _props.onChange,
          value = _props.value;

      var nextValue = this.editor.getValue();
      if (nextValue !== value) {
        onChange({ target: { value: nextValue } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          readOnly = _props2.readOnly,
          value = _props2.value,
          onChange = _props2.onChange,
          textAreaClassName = _props2.textAreaClassName,
          textAreaClass = _props2.textAreaClass,
          textAreaStyle = _props2.textAreaStyle,
          className = _props2.className,
          style = _props2.style;

      return _react3.default.createElement(
        'div',
        { className: className, style: style },
        _react3.default.createElement('textarea', {
          className: textAreaClassName || textAreaClass,
          style: textAreaStyle,
          ref: function ref(x) {
            return _this2.editorRef = x;
          },
          defaultValue: defaultValue,
          readOnly: readOnly,
          value: value,
          onChange: onChange })
      );
    }
  }]);

  return CodeMirrorEditor;
}(_react2.Component), _class.defaultProps = {
  mobile: typeof navigator === 'undefined' || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
}, _class.propTypes = {
  value: _react2.PropTypes.string,
  defaultValue: _react2.PropTypes.string,
  style: _react2.PropTypes.object,
  className: _react2.PropTypes.string,
  onChange: _react2.PropTypes.func
}, _temp));

exports.default = CodeMirrorEditor;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwiY29udHJvbE15U2Nyb2xsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImZvcmNlVGV4dEFyZWEiLCJlZGl0b3IiLCJmcm9tVGV4dEFyZWEiLCJlZGl0b3JSZWYiLCJvbiIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsInRleHRBcmVhQ2xhc3NOYW1lIiwidGV4dEFyZWFDbGFzcyIsInRleHRBcmVhU3R5bGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIngiLCJkZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiLCJDb2RlTWlycm9yRWRpdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLDRCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1hBLEtBRFc7O0FBQUEsVUFpQm5CQyxLQWpCbUIsR0FpQlgsRUFBQ0MsY0FBYyxNQUFLRixLQUFMLENBQVdHLEtBQVgsSUFBb0IsSUFBbkMsRUFqQlc7O0FBRWpCLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCOztBQUhpQjtBQUtsQjs7Ozt3Q0FjbUI7QUFBQSxVQUNWRSxh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ZSxDLFNBdUVmQyxTLEdBQVk7QUFDakJqQyxTQUFPLGtCQUFVa0MsTUFEQTtBQUVqQmQsZ0JBQWMsa0JBQVVjLE1BRlA7QUFHakJSLFNBQU8sa0JBQVVTLE1BSEE7QUFJakJWLGFBQVcsa0JBQVVTLE1BSko7QUFLakJqQixZQUFVLGtCQUFVbUI7QUFMSCxDOztrQkFTTkMsZ0IiLCJmaWxlIjoiMC5mYjRmOGU3YjU4Mzk1ZDA4MWZhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ00gZnJvbSAnY29kZW1pcnJvcidcblxuY2xhc3MgQ29kZU1pcnJvckVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250cm9sTXlTY3JvbGwgPSB0aGlzLmNvbnRyb2xNeVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgfVxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1vYmlsZTogdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcbiAgfVxuXG4gIHN0YXRlID0ge2lzQ29udHJvbGxlZDogdGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9yY2VUZXh0QXJlYSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZm9yY2VUZXh0QXJlYSkge1xuICAgICAgdGhpcy5lZGl0b3IgPSBDTS5mcm9tVGV4dEFyZWEodGhpcy5lZGl0b3JSZWYsIHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKVxuICAgICAgdGhpcy5lZGl0b3Iub24oJ3Njcm9sbCcsIHRoaXMuY29udHJvbE15U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRyb2xNeVNjcm9sbChlKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHNjcm9sbFRvcH0gPSBlLmRvY1xuICAgIHRoaXMucHJvcHMubXlCb2R5SXNSZWFkeShwYXJzZUludCgoc2Nyb2xsVG9wIC8gaGVpZ2h0KSAqIDEwMCkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogbmV4dFZhbHVlfX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHRleHRBcmVhQ2xhc3NOYW1lLFxuICAgICAgdGV4dEFyZWFDbGFzcyxcbiAgICAgIHRleHRBcmVhU3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZVxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT17dGV4dEFyZWFDbGFzc05hbWUgfHwgdGV4dEFyZWFDbGFzc31cbiAgICAgICAgICBzdHlsZT17dGV4dEFyZWFTdHlsZX1cbiAgICAgICAgICByZWY9e3ggPT4gdGhpcy5lZGl0b3JSZWYgPSB4fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVNaXJyb3JFZGl0b3JcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==