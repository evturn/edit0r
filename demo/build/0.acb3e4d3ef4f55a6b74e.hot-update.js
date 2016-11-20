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
        var nextValue = this.editor.getValue();

        if (nextValue !== this.props.value) {
          this.props.onChange && this.props.onChange({ target: { value: nextValue } });
          if (this.editor.getValue() !== this.props.value) {
            if (this.state.isControlled) {
              console.log('IS CONTROLLED');
              this.editor.setValue(this.props.value);
            } else {
              console.log('You hit me');
              this.props.value = nextValue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwiY29udHJvbE15U2Nyb2xsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImZvcmNlVGV4dEFyZWEiLCJlZGl0b3IiLCJmcm9tVGV4dEFyZWEiLCJlZGl0b3JSZWYiLCJvbiIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50IiwibmV4dFZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFZhbHVlIiwicmVhZE9ubHkiLCJ0ZXh0QXJlYUNsYXNzTmFtZSIsInRleHRBcmVhQ2xhc3MiLCJ0ZXh0QXJlYVN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ4IiwiZGVmYXVsdFByb3BzIiwibW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIiwiQ29kZU1pcnJvckVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSw0QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUFBLFVBaUJuQkMsS0FqQm1CLEdBaUJYLEVBQUNDLGNBQWMsTUFBS0YsS0FBTCxDQUFXRyxLQUFYLElBQW9CLElBQW5DLEVBakJXOztBQUVqQixVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjs7QUFIaUI7QUFLbEI7Ozs7d0NB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QUFyQixJQUNIQSxVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixVQUExQixDQURHLElBRUhGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFFBQTFCLENBRkcsSUFHSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FIRyxJQUlIRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpHLElBS0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBTEcsSUFNSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FORyxJQU9IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixnQkFBMUI7QUFSZSxDLFNBa0ZmQyxTLEdBQVk7QUFDakJuQyxTQUFPLGtCQUFVb0MsTUFEQTtBQUVqQmQsZ0JBQWMsa0JBQVVjLE1BRlA7QUFHakJSLFNBQU8sa0JBQVVTLE1BSEE7QUFJakJWLGFBQVcsa0JBQVVTLE1BSko7QUFLakJsQixZQUFVLGtCQUFVb0I7QUFMSCxDOztrQkFTTkMsZ0IiLCJmaWxlIjoiMC5hY2IzZTRkM2VmNGY1NWE2Yjc0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ00gZnJvbSAnY29kZW1pcnJvcidcblxuY2xhc3MgQ29kZU1pcnJvckVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250cm9sTXlTY3JvbGwgPSB0aGlzLmNvbnRyb2xNeVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgfVxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1vYmlsZTogdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcbiAgfVxuXG4gIHN0YXRlID0ge2lzQ29udHJvbGxlZDogdGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9yY2VUZXh0QXJlYSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZm9yY2VUZXh0QXJlYSkge1xuICAgICAgdGhpcy5lZGl0b3IgPSBDTS5mcm9tVGV4dEFyZWEodGhpcy5lZGl0b3JSZWYsIHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKVxuICAgICAgdGhpcy5lZGl0b3Iub24oJ3Njcm9sbCcsIHRoaXMuY29udHJvbE15U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRyb2xNeVNjcm9sbChlKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHNjcm9sbFRvcH0gPSBlLmRvY1xuICAgIHRoaXMucHJvcHMubXlCb2R5SXNSZWFkeShwYXJzZUludCgoc2Nyb2xsVG9wIC8gaGVpZ2h0KSAqIDEwMCkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpXG5cbiAgICAgIGlmIChuZXh0VmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogbmV4dFZhbHVlfX0pO1xuICAgICAgICBpZiAodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzQ29udHJvbGxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lTIENPTlRST0xMRUQnKVxuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgaGl0IG1lJylcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUgPSBuZXh0VmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdGV4dEFyZWFDbGFzc05hbWUsXG4gICAgICB0ZXh0QXJlYUNsYXNzLFxuICAgICAgdGV4dEFyZWFTdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXt0ZXh0QXJlYUNsYXNzTmFtZSB8fCB0ZXh0QXJlYUNsYXNzfVxuICAgICAgICAgIHN0eWxlPXt0ZXh0QXJlYVN0eWxlfVxuICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVkaXRvclJlZiA9IHh9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZU1pcnJvckVkaXRvclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0NvZGVNaXJyb3JFZGl0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9