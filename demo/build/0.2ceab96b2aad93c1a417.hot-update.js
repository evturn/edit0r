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

    _this.state = {
      isControlled: _this.props.value != null,
      y: 0
    };

    _this.controlMyScroll = _this.controlMyScroll.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(CodeMirrorEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isTextArea = this.props.forceTextArea || this.props.mobile;
      if (!isTextArea) {
        this.editor = _codemirror2.default.fromTextArea(this.refs.editor, this.props);
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
      var editor = _react3.default.createElement('textarea', {
        ref: 'editor',
        value: this.props.value,
        readOnly: this.props.readOnly,
        defaultValue: this.props.defaultValue,
        onChange: this.props.onChange,
        style: this.props.textAreaStyle,
        className: this.props.textAreaClassName || this.props.textAreaClass
      });
      return _react3.default.createElement('div', { style: this.props.style, className: this.props.className }, editor);
    }
  }]);

  return CodeMirrorEditor;
}(_react2.Component), _class.defaultProps = {
  mobile: typeof navigator === 'undefined' || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
}, _class.propTypes = {
  value: _react3.default.PropTypes.string,
  defaultValue: _react3.default.PropTypes.string,
  style: _react3.default.PropTypes.object,
  className: _react3.default.PropTypes.string,
  onChange: _react3.default.PropTypes.func
}, _temp));

exports.default = CodeMirrorEditor;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwieSIsImNvbnRyb2xNeVNjcm9sbCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJpc1RleHRBcmVhIiwiZm9yY2VUZXh0QXJlYSIsIm1vYmlsZSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsInJlZnMiLCJvbiIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjcmVhdGVFbGVtZW50IiwicmVmIiwicmVhZE9ubHkiLCJkZWZhdWx0VmFsdWUiLCJzdHlsZSIsInRleHRBcmVhU3R5bGUiLCJjbGFzc05hbWUiLCJ0ZXh0QXJlYUNsYXNzTmFtZSIsInRleHRBcmVhQ2xhc3MiLCJkZWZhdWx0UHJvcHMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiLCJDb2RlTWlycm9yRWRpdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLDRCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1hBLEtBRFc7O0FBQUEsVUFpQm5CQyxLQWpCbUIsR0FpQlg7QUFDTkMsb0JBQWMsTUFBS0YsS0FBTCxDQUFXRyxLQUFYLElBQW9CLElBRDVCO0FBRU5DLFNBQUc7QUFGRyxLQWpCVzs7QUFFakIsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQs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QixDQURHLElBRUhGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFFBQTFCLENBRkcsSUFHSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FIRyxJQUlIRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpHLElBS0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBTEcsSUFNSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FORyxJQU9IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixnQkFBMUI7QUFSZSxDLFNBc0VmQyxTLEdBQVk7QUFDakJuQyxTQUFPLGdCQUFNb0MsU0FBTixDQUFnQkMsTUFETjtBQUVqQlosZ0JBQWMsZ0JBQU1XLFNBQU4sQ0FBZ0JDLE1BRmI7QUFHakJYLFNBQU8sZ0JBQU1VLFNBQU4sQ0FBZ0JFLE1BSE47QUFJakJWLGFBQVcsZ0JBQU1RLFNBQU4sQ0FBZ0JDLE1BSlY7QUFLakJqQixZQUFVLGdCQUFNZ0IsU0FBTixDQUFnQkc7QUFMVCxDOztrQkFTTkMsZ0IiLCJmaWxlIjoiMC4yY2VhYjk2YjJhYWQ5M2MxYTQxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdjb2RlbWlycm9yJ1xuXG5jbGFzcyBDb2RlTWlycm9yRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRyb2xNeVNjcm9sbCA9IHRoaXMuY29udHJvbE15U2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblxuICB9XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9iaWxlOiB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNDb250cm9sbGVkOiB0aGlzLnByb3BzLnZhbHVlICE9IG51bGwsXG4gICAgeTogMFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGlzVGV4dEFyZWEgPSB0aGlzLnByb3BzLmZvcmNlVGV4dEFyZWEgfHwgdGhpcy5wcm9wcy5tb2JpbGU7XG4gICAgaWYgKCFpc1RleHRBcmVhKSB7XG4gICAgICB0aGlzLmVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRoaXMucmVmcy5lZGl0b3IsIHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgIHRoaXMuZWRpdG9yLm9uKCdzY3JvbGwnLCB0aGlzLmNvbnRyb2xNeVNjcm9sbCk7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250cm9sTXlTY3JvbGwoZSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBzY3JvbGxUb3B9ID0gZS5kb2NcbiAgICB0aGlzLnByb3BzLm15Qm9keUlzUmVhZHkocGFyc2VJbnQoKHNjcm9sbFRvcCAvIGhlaWdodCkgKiAxMDApKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiB2YWx1ZX19KTtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBlZGl0b3IgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgIHJlZjogJ2VkaXRvcicsXG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgIHJlYWRPbmx5OiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMudGV4dEFyZWFTdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy50ZXh0QXJlYUNsYXNzTmFtZSB8fCB0aGlzLnByb3BzLnRleHRBcmVhQ2xhc3NcbiAgICB9KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge3N0eWxlOiB0aGlzLnByb3BzLnN0eWxlLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lfSwgZWRpdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=