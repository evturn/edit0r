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
      if (this.editor) {
        var value = this.editor.getValue();
        if (value !== this.props.value) {
          this.props.onChange && this.props.onChange({ target: { value: value } });
          if (this.editor.getValue() !== this.props.value) {
            if (this.state.isControlled) {
              this.editor.setValue(this.props.value);
            } else {
              this.props.value = value;
            }
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          readOnly = _props.readOnly,
          value = _props.value,
          onChange = _props.onChange,
          textAreaClassName = _props.textAreaClassName,
          textAreaClass = _props.textAreaClass,
          textAreaStyle = _props.textAreaStyle,
          className = _props.className,
          style = _props.style;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwiY29udHJvbE15U2Nyb2xsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImZvcmNlVGV4dEFyZWEiLCJlZGl0b3IiLCJmcm9tVGV4dEFyZWEiLCJlZGl0b3JSZWYiLCJvbiIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsInRleHRBcmVhQ2xhc3NOYW1lIiwidGV4dEFyZWFDbGFzcyIsInRleHRBcmVhU3R5bGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIngiLCJkZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiLCJDb2RlTWlycm9yRWRpdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLDRCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1hBLEtBRFc7O0FBQUEsVUFpQm5CQyxLQWpCbUIsR0FpQlgsRUFBQ0MsY0FBYyxNQUFLRixLQUFMLENBQVdHLEtBQVgsSUFBb0IsSUFBbkMsRUFqQlc7O0FBRWpCLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCOztBQUhpQjtBQUtsQjs7Ozt3Q0FjbUI7QUFBQSxVQUNWRSxhQURVLEdBQ1EsS0FB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Q0FGRyxJQUdIRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixTQUExQixDQUhHLElBSUhGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSkcsSUFLSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FMRyxJQU1IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixhQUExQixDQU5HLElBT0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdCQUExQjtBQVJlLEMsU0ErRWZDLFMsR0FBWTtBQUNqQmhDLFNBQU8sa0JBQVVpQyxNQURBO0FBRWpCZCxnQkFBYyxrQkFBVWMsTUFGUDtBQUdqQlIsU0FBTyxrQkFBVVMsTUFIQTtBQUlqQlYsYUFBVyxrQkFBVVMsTUFKSjtBQUtqQmhCLFlBQVUsa0JBQVVrQjtBQUxILEM7O2tCQVNOQyxnQiIsImZpbGUiOiIwLjhiYTJjNjBjNzZhMDlmZTFiNWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDTSBmcm9tICdjb2RlbWlycm9yJ1xuXG5jbGFzcyBDb2RlTWlycm9yRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRyb2xNeVNjcm9sbCA9IHRoaXMuY29udHJvbE15U2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblxuICB9XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9iaWxlOiB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICB9XG5cbiAgc3RhdGUgPSB7aXNDb250cm9sbGVkOiB0aGlzLnByb3BzLnZhbHVlICE9IG51bGx9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JjZVRleHRBcmVhIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFmb3JjZVRleHRBcmVhKSB7XG4gICAgICB0aGlzLmVkaXRvciA9IENNLmZyb21UZXh0QXJlYSh0aGlzLmVkaXRvclJlZiwgdGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLmVkaXRvci5vbignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpXG4gICAgICB0aGlzLmVkaXRvci5vbignc2Nyb2xsJywgdGhpcy5jb250cm9sTXlTY3JvbGwpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29udHJvbE15U2Nyb2xsKGUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgc2Nyb2xsVG9wfSA9IGUuZG9jXG4gICAgdGhpcy5wcm9wcy5teUJvZHlJc1JlYWR5KHBhcnNlSW50KChzY3JvbGxUb3AgLyBoZWlnaHQpICogMTAwKSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogdmFsdWV9fSk7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNDb250cm9sbGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICByZWFkT25seSxcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0QXJlYUNsYXNzTmFtZSxcbiAgICAgIHRleHRBcmVhQ2xhc3MsXG4gICAgICB0ZXh0QXJlYVN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGVcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e3RleHRBcmVhQ2xhc3NOYW1lIHx8IHRleHRBcmVhQ2xhc3N9XG4gICAgICAgICAgc3R5bGU9e3RleHRBcmVhU3R5bGV9XG4gICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWRpdG9yUmVmID0geH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=