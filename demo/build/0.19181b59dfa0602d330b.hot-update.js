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
      return _react3.default.createElement(
        'div',
        { className: this.props.className, style: this.props.style },
        _react3.default.createElement('textarea', {
          className: this.props.textAreaClassName || this.props.textAreaClass,
          style: this.props.textAreaStyle,
          ref: 'editor',
          defaultValue: this.props.defaultValue,
          readOnly: this.props.readOnly,
          value: this.props.value,
          onChange: this.props.onChange })
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwieSIsImNvbnRyb2xNeVNjcm9sbCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJpc1RleHRBcmVhIiwiZm9yY2VUZXh0QXJlYSIsIm1vYmlsZSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsInJlZnMiLCJvbiIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRleHRBcmVhQ2xhc3NOYW1lIiwidGV4dEFyZWFDbGFzcyIsInRleHRBcmVhU3R5bGUiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsImRlZmF1bHRQcm9wcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiZnVuYyIsIkNvZGVNaXJyb3JFZGl0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsNEJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDWEEsS0FEVzs7QUFBQSxVQWlCbkJDLEtBakJtQixHQWlCWDtBQUNOQyxvQkFBYyxNQUFLRixLQUFMLENBQVdHLEtBQVgsSUFBb0IsSUFENUI7QUFFTkMsU0FBRztBQUZHLEtBakJXOztBQUVqQixVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjs7QUFIaUI7QUFL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QXBCLENBQTBCLE9BQTFCLENBSkcsSUFLSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FMRyxJQU1IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixhQUExQixDQU5HLElBT0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdCQUExQjtBQVJlLEMsU0F3RWZDLFMsR0FBWTtBQUNqQmpDLFNBQU8sZ0JBQU1rQyxTQUFOLENBQWdCQyxNQUROO0FBRWpCUixnQkFBYyxnQkFBTU8sU0FBTixDQUFnQkMsTUFGYjtBQUdqQlosU0FBTyxnQkFBTVcsU0FBTixDQUFnQkUsTUFITjtBQUlqQmQsYUFBVyxnQkFBTVksU0FBTixDQUFnQkMsTUFKVjtBQUtqQmYsWUFBVSxnQkFBTWMsU0FBTixDQUFnQkc7QUFMVCxDOztrQkFTTkMsZ0IiLCJmaWxlIjoiMC4xOTE4MWI1OWRmYTA2MDJkMzMwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdjb2RlbWlycm9yJ1xuXG5jbGFzcyBDb2RlTWlycm9yRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRyb2xNeVNjcm9sbCA9IHRoaXMuY29udHJvbE15U2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblxuICB9XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9iaWxlOiB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNDb250cm9sbGVkOiB0aGlzLnByb3BzLnZhbHVlICE9IG51bGwsXG4gICAgeTogMFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGlzVGV4dEFyZWEgPSB0aGlzLnByb3BzLmZvcmNlVGV4dEFyZWEgfHwgdGhpcy5wcm9wcy5tb2JpbGU7XG4gICAgaWYgKCFpc1RleHRBcmVhKSB7XG4gICAgICB0aGlzLmVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRoaXMucmVmcy5lZGl0b3IsIHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgIHRoaXMuZWRpdG9yLm9uKCdzY3JvbGwnLCB0aGlzLmNvbnRyb2xNeVNjcm9sbCk7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250cm9sTXlTY3JvbGwoZSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBzY3JvbGxUb3B9ID0gZS5kb2NcbiAgICB0aGlzLnByb3BzLm15Qm9keUlzUmVhZHkocGFyc2VJbnQoKHNjcm9sbFRvcCAvIGhlaWdodCkgKiAxMDApKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiB2YWx1ZX19KTtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRleHRBcmVhQ2xhc3NOYW1lIHx8IHRoaXMucHJvcHMudGV4dEFyZWFDbGFzc31cbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy50ZXh0QXJlYVN0eWxlfVxuICAgICAgICAgIHJlZj17J2VkaXRvcid9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZX1cbiAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=