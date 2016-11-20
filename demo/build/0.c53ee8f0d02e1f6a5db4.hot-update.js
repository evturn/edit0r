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
        console.log(this.state.isControlled, 'IS CONTROLLED');
        if (nextValue !== this.props.value) {
          this.props.onChange && this.props.onChange({ target: { value: nextValue } });
          if (this.editor.getValue() !== this.props.value) {
            if (this.state.isControlled) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwiY29udHJvbE15U2Nyb2xsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImZvcmNlVGV4dEFyZWEiLCJlZGl0b3IiLCJmcm9tVGV4dEFyZWEiLCJlZGl0b3JSZWYiLCJvbiIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50IiwibmV4dFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZGVmYXVsdFZhbHVlIiwicmVhZE9ubHkiLCJ0ZXh0QXJlYUNsYXNzTmFtZSIsInRleHRBcmVhQ2xhc3MiLCJ0ZXh0QXJlYVN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ4IiwiZGVmYXVsdFByb3BzIiwibW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIiwiQ29kZU1pcnJvckVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSw0QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUFBLFVBaUJuQkMsS0FqQm1CLEdBaUJYLEVBQUNDLGNBQWMsTUFBS0YsS0FBTCxDQUFXRyxLQUFYLElBQW9CLElBQW5DLEVBakJXOztBQUVqQixVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjs7QUFIaUI7QUFLbEI7Ozs7d0NB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QUNwQkMsVUFBUSxPQUFPQyxTQUFQLEtBQXFCLFdBQXJCLElBQ0hBLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLENBREcsSUFFSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FGRyxJQUdIRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixTQUExQixDQUhHLElBSUhGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSkcsSUFLSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FMRyxJQU1IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixhQUExQixDQU5HLElBT0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdCQUExQjtBQVJlLEMsU0FpRmZDLFMsR0FBWTtBQUNqQm5DLFNBQU8sa0JBQVVvQyxNQURBO0FBRWpCZCxnQkFBYyxrQkFBVWMsTUFGUDtBQUdqQlIsU0FBTyxrQkFBVVMsTUFIQTtBQUlqQlYsYUFBVyxrQkFBVVMsTUFKSjtBQUtqQmhCLFlBQVUsa0JBQVVrQjtBQUxILEM7O2tCQVNOQyxnQiIsImZpbGUiOiIwLmM1M2VlOGYwZDAyZTFmNmE1ZGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDTSBmcm9tICdjb2RlbWlycm9yJ1xuXG5jbGFzcyBDb2RlTWlycm9yRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRyb2xNeVNjcm9sbCA9IHRoaXMuY29udHJvbE15U2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblxuICB9XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9iaWxlOiB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICB9XG5cbiAgc3RhdGUgPSB7aXNDb250cm9sbGVkOiB0aGlzLnByb3BzLnZhbHVlICE9IG51bGx9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JjZVRleHRBcmVhIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFmb3JjZVRleHRBcmVhKSB7XG4gICAgICB0aGlzLmVkaXRvciA9IENNLmZyb21UZXh0QXJlYSh0aGlzLmVkaXRvclJlZiwgdGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLmVkaXRvci5vbignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpXG4gICAgICB0aGlzLmVkaXRvci5vbignc2Nyb2xsJywgdGhpcy5jb250cm9sTXlTY3JvbGwpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29udHJvbE15U2Nyb2xsKGUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgc2Nyb2xsVG9wfSA9IGUuZG9jXG4gICAgdGhpcy5wcm9wcy5teUJvZHlJc1JlYWR5KHBhcnNlSW50KChzY3JvbGxUb3AgLyBoZWlnaHQpICogMTAwKSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKClcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNDb250cm9sbGVkLCAnSVMgQ09OVFJPTExFRCcpXG4gICAgICBpZiAobmV4dFZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7dGFyZ2V0OiB7dmFsdWU6IG5leHRWYWx1ZX19KTtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGhpdCBtZScpXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gbmV4dFZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHRleHRBcmVhQ2xhc3NOYW1lLFxuICAgICAgdGV4dEFyZWFDbGFzcyxcbiAgICAgIHRleHRBcmVhU3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZVxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT17dGV4dEFyZWFDbGFzc05hbWUgfHwgdGV4dEFyZWFDbGFzc31cbiAgICAgICAgICBzdHlsZT17dGV4dEFyZWFTdHlsZX1cbiAgICAgICAgICByZWY9e3ggPT4gdGhpcy5lZGl0b3JSZWYgPSB4fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVNaXJyb3JFZGl0b3JcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==