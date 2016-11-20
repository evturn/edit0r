webpackHotUpdate(0,{

/***/ 144:
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

var _codemirror = __webpack_require__(149);

var _codemirror2 = _interopRequireDefault(_codemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
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

var CodeMirrorEditor = _wrapComponent('_component')(_react3.default.createClass({
  displayName: 'CodeMirrorEditor',

  getInitialState: function getInitialState() {
    return {
      isControlled: this.props.value != null,
      y: 0
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      mobile: typeof navigator === 'undefined' || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
    };
  },


  propTypes: {
    value: _react3.default.PropTypes.string,
    defaultValue: _react3.default.PropTypes.string,
    style: _react3.default.PropTypes.object,
    className: _react3.default.PropTypes.string,
    onChange: _react3.default.PropTypes.func
  },

  componentDidMount: function componentDidMount() {
    var isTextArea = this.props.forceTextArea || this.props.mobile;
    if (!isTextArea) {
      this.editor = _codemirror2.default.fromTextArea(this.refs.editor, this.props);
      this.editor.on('change', this.handleChange);
      this.editor.on('scroll', this.controlMyScroll);
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    if (this.editor) {
      if (this.props.value != null) {
        if (this.editor.getValue() !== this.props.value) {
          this.editor.setValue(this.props.value);
        }
      }
    }
  },

  controlMyScroll: function controlMyScroll(e) {
    var _e$doc = e.doc,
        height = _e$doc.height,
        scrollTop = _e$doc.scrollTop;

    this.props.myBodyIsReady(parseInt(scrollTop / height * 100));
  },


  handleChange: function handleChange() {
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
  },

  render: function render() {
    var editor = _react3.default.createElement('textarea', {
      ref: 'editor',
      value: this.props.value,
      readOnly: this.props.readOnly,
      defaultValue: this.props.defaultValue,
      onChange: this.props.onChange,
      style: this.props.textAreaStyle,
      className: this.props.textAreaClassName || this.props.textAreaClass
    });
    console.log(this.props.className);
    return _react3.default.createElement('div', { style: this.props.style, className: this.props.className }, editor);
  }
}));

exports.default = CodeMirrorEditor;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsiQ29kZU1pcnJvckVkaXRvciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNDb250cm9sbGVkIiwicHJvcHMiLCJ2YWx1ZSIsInkiLCJnZXREZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRWYWx1ZSIsInN0eWxlIiwib2JqZWN0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJmdW5jIiwiY29tcG9uZW50RGlkTW91bnQiLCJpc1RleHRBcmVhIiwiZm9yY2VUZXh0QXJlYSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsInJlZnMiLCJvbiIsImhhbmRsZUNoYW5nZSIsImNvbnRyb2xNeVNjcm9sbCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50IiwidGFyZ2V0Iiwic3RhdGUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwicmVmIiwicmVhZE9ubHkiLCJ0ZXh0QXJlYVN0eWxlIiwidGV4dEFyZWFDbGFzc05hbWUiLCJ0ZXh0QXJlYUNsYXNzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnREFBbUIsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDekNDLG1CQUFpQiwyQkFBVztBQUMxQixXQUFPO0FBQ0xDLG9CQUFjLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixJQUQ3QjtBQUVMQyxTQUFHO0FBRkUsS0FBUDtBQUlELEdBTndDOztBQVF6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S0FBSzVCLEtBQUwsQ0FBV0MsS0FBaEM7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CQSxLQUFuQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsR0FwRXdDOztBQXNFekNvQyxVQUFRLGtCQUFXO0FBQ2pCLFFBQUlqQixTQUFTLGdCQUFNa0IsYUFBTixDQUFvQixVQUFwQixFQUFnQztBQUMzQ0MsV0FBSyxRQURzQztBQUUzQ3RDLGFBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUZ5QjtBQUczQ3VDLGdCQUFVLEtBQUt4QyxLQUFMLENBQVd3QyxRQUhzQjtBQUkzQzdCLG9CQUFjLEtBQUtYLEtBQUwsQ0FBV1csWUFKa0I7QUFLM0NJLGdCQUFVLEtBQUtmLEtBQUwsQ0FBV2UsUUFMc0I7QUFNM0NILGFBQU8sS0FBS1osS0FBTCxDQUFXeUMsYUFOeUI7QUFPM0MzQixpQkFBVyxLQUFLZCxLQUFMLENBQVcwQyxpQkFBWCxJQUFnQyxLQUFLMUMsS0FBTCxDQUFXMkM7QUFQWCxLQUFoQyxDQUFiO0FBU0FDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLN0MsS0FBTCxDQUFXYyxTQUF2QjtBQUNBLFdBQU8sZ0JBQU13QixhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMxQixPQUFPLEtBQUtaLEtBQUwsQ0FBV1ksS0FBbkIsRUFBMEJFLFdBQVcsS0FBS2QsS0FBTCxDQUFXYyxTQUFoRCxFQUEzQixFQUF1Rk0sTUFBdkYsQ0FBUDtBQUNEO0FBbEZ3QyxDQUFsQixDQUFuQixDQUFOOztrQkFxRmV4QixnQiIsImZpbGUiOiIwLjY0ZTAyNWI3MzJiMzdlOTZlMTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdjb2RlbWlycm9yJ1xuXG5jb25zdCBDb2RlTWlycm9yRWRpdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NvbnRyb2xsZWQ6IHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9iaWxlOiB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc1RleHRBcmVhID0gdGhpcy5wcm9wcy5mb3JjZVRleHRBcmVhIHx8IHRoaXMucHJvcHMubW9iaWxlO1xuICAgIGlmICghaXNUZXh0QXJlYSkge1xuICAgICAgdGhpcy5lZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0aGlzLnJlZnMuZWRpdG9yLCB0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICB0aGlzLmVkaXRvci5vbignc2Nyb2xsJywgdGhpcy5jb250cm9sTXlTY3JvbGwpO1xuXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29udHJvbE15U2Nyb2xsKGUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgc2Nyb2xsVG9wfSA9IGUuZG9jXG4gICAgdGhpcy5wcm9wcy5teUJvZHlJc1JlYWR5KHBhcnNlSW50KChzY3JvbGxUb3AgLyBoZWlnaHQpICogMTAwKSlcbiAgfSxcblxuICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiB2YWx1ZX19KTtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVkaXRvciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgcmVmOiAnZWRpdG9yJyxcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgcmVhZE9ubHk6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgb25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2UsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy50ZXh0QXJlYVN0eWxlLFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRleHRBcmVhQ2xhc3NOYW1lIHx8IHRoaXMucHJvcHMudGV4dEFyZWFDbGFzc1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY2xhc3NOYW1lKVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7c3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWV9LCBlZGl0b3IpO1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=