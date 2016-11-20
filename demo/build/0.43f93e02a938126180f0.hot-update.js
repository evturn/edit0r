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
    return _react3.default.createElement('div', { style: this.props.style, className: this.props.className }, editor);
  }
}));

exports.default = CodeMirrorEditor;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsiQ29kZU1pcnJvckVkaXRvciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNDb250cm9sbGVkIiwicHJvcHMiLCJ2YWx1ZSIsInkiLCJnZXREZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRWYWx1ZSIsInN0eWxlIiwib2JqZWN0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJmdW5jIiwiY29tcG9uZW50RGlkTW91bnQiLCJpc1RleHRBcmVhIiwiZm9yY2VUZXh0QXJlYSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsInJlZnMiLCJvbiIsImhhbmRsZUNoYW5nZSIsImNvbnRyb2xNeVNjcm9sbCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50IiwidGFyZ2V0Iiwic3RhdGUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwicmVmIiwicmVhZE9ubHkiLCJ0ZXh0QXJlYVN0eWxlIiwidGV4dEFyZWFDbGFzc05hbWUiLCJ0ZXh0QXJlYUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdEQUFtQixnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUN6Q0MsbUJBQWlCLDJCQUFXO0FBQzFCLFdBQU87QUFDTEMsb0JBQWMsS0FBS0MsS0FBTCxDQUFXQyxLQUFYLElBQW9CLElBRDdCO0FBRUxDLFNBQUc7QUFGRSxLQUFQO0FBSUQsR0FOd0M7O0FBUXpDQyxpQkFSeUMsNkJBUXZCO0FBQ2hCLFdBQU87QUFDTEMsY0FBUSxPQUFPQyxTQUFQLEtBQXFCLFdBQXJCLElBQ0hBLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLENBREcsSUFFSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FGRyxJQUdIRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixTQUExQixDQUhHLElBSUhGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSkcsSUFLSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FMRyxJQU1IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixhQUExQixDQU5HLElBT0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdCQUExQjtBQVJBLEtBQVA7QUFVRCxHQW5Cd0M7OztBQXFCekNDLGFBQVc7QUFDVFAsV0FBTyxnQkFBTVEsU0FBTixDQUFnQkMsTUFEZDtBQUVUQyxrQkFBYyxnQkFBTUYsU0FBTixDQUFnQkMsTUFGckI7QUFHVEUsV0FBTyxnQkFBTUgsU0FBTixDQUFnQkksTUFIZDtBQUlUQyxlQUFXLGdCQUFNTCxTQUFOLENBQWdCQyxNQUpsQjtBQUtUSyxjQUFVLGdCQUFNTixTQUFOLENBQWdCTztBQUxqQixHQXJCOEI7O0FBNkJ6Q0MscUJBQW1CLDZCQUFXO0FBQzVCLFFBQUlDLGFBQWEsS0FBS2xCLEtBQUwsQ0FBV21CLGFBQVgsSUFBNEIsS0FBS25CLEtBQUwsQ0FBV0ksTUFBeEQ7QUFDQSxRQUFJLENBQUNjLFVBQUwsRUFBaUI7QUFDZixXQUFLRSxNQUFMLEdBQWMscUJBQVdDLFlBQVgsQ0FBd0IsS0FBS0MsSUFBTCxDQUFVRixNQUFsQyxFQUEwQyxLQUFLcEIsS0FBL0MsQ0FBZDtBQUNBLFdBQUtvQixNQUFMLENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUtDLFlBQTlCO0FBQ0EsV0FBS0osTUFBTCxDQUFZRyxFQUFaLENBQWUsUUFBZixFQUF5QixLQUFLRSxlQUE5QjtBQUVEO0FBQ0YsR0FyQ3dDOztBQXVDekNDLHNCQUFvQiw4QkFBVztBQUM3QixRQUFJLEtBQUtOLE1BQVQsRUFBaUI7QUFDZixVQUFJLEtBQUtwQixLQUFMLENBQVdDLEtBQVgsSUFBb0IsSUFBeEIsRUFBOEI7QUFDNUIsWUFBSSxLQUFLbUIsTUFBTCxDQUFZTyxRQUFaLE9BQTJCLEtBQUszQixLQUFMLENBQVdDLEtBQTFDLEVBQWlEO0FBQy9DLGVBQUttQixNQUFMLENBQVlRLFFBQVosQ0FBcUIsS0FBSzVCLEtBQUwsQ0FBV0MsS0FBaEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQS9Dd0M7O0FBaUR6Q3dCLGlCQWpEeUMsMkJBaUR6QkksQ0FqRHlCLEVBaUR0QjtBQUFBLGlCQUNZQSxFQUFFQyxHQURkO0FBQUEsUUFDVEMsTUFEUyxVQUNUQSxNQURTO0FBQUEsUUFDREMsU0FEQyxVQUNEQSxTQURDOztBQUVqQixTQUFLaEMsS0FBTCxDQUFXaUMsYUFBWCxDQUF5QkMsU0FBVUYsWUFBWUQsTUFBYixHQUF1QixHQUFoQyxDQUF6QjtBQUNELEdBcER3Qzs7O0FBc0R6Q1AsZ0JBQWMsd0JBQVc7QUFDdkIsUUFBSSxLQUFLSixNQUFULEVBQWlCO0FBQ2YsVUFBSW5CLFFBQVEsS0FBS21CLE1BQUwsQ0FBWU8sUUFBWixFQUFaO0FBQ0EsVUFBSTFCLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxLQUF6QixFQUFnQztBQUM5QixhQUFLRCxLQUFMLENBQVdlLFFBQVgsSUFBdUIsS0FBS2YsS0FBTCxDQUFXZSxRQUFYLENBQW9CLEVBQUNvQixRQUFRLEVBQUNsQyxPQUFPQSxLQUFSLEVBQVQsRUFBcEIsQ0FBdkI7QUFDQSxZQUFJLEtBQUttQixNQUFMLENBQVlPLFFBQVosT0FBMkIsS0FBSzNCLEtBQUwsQ0FBV0MsS0FBMUMsRUFBaUQ7QUFDL0MsY0FBSSxLQUFLbUMsS0FBTCxDQUFXckMsWUFBZixFQUE2QjtBQUMzQixpQkFBS3FCLE1BQUwsQ0FBWVEsUUFBWixDQUFxQixLQUFLNUIsS0FBTCxDQUFXQyxLQUFoQztBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQXBFd0M7O0FBc0V6Q29DLFVBQVEsa0JBQVc7QUFDakIsUUFBSWpCLFNBQVMsZ0JBQU1rQixhQUFOLENBQW9CLFVBQXBCLEVBQWdDO0FBQzNDQyxXQUFLLFFBRHNDO0FBRTNDdEMsYUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBRnlCO0FBRzNDdUMsZ0JBQVUsS0FBS3hDLEtBQUwsQ0FBV3dDLFFBSHNCO0FBSTNDN0Isb0JBQWMsS0FBS1gsS0FBTCxDQUFXVyxZQUprQjtBQUszQ0ksZ0JBQVUsS0FBS2YsS0FBTCxDQUFXZSxRQUxzQjtBQU0zQ0gsYUFBTyxLQUFLWixLQUFMLENBQVd5QyxhQU55QjtBQU8zQzNCLGlCQUFXLEtBQUtkLEtBQUwsQ0FBVzBDLGlCQUFYLElBQWdDLEtBQUsxQyxLQUFMLENBQVcyQztBQVBYLEtBQWhDLENBQWI7QUFTQSxXQUFPLGdCQUFNTCxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMxQixPQUFPLEtBQUtaLEtBQUwsQ0FBV1ksS0FBbkIsRUFBMEJFLFdBQVcsS0FBS2QsS0FBTCxDQUFXYyxTQUFoRCxFQUEzQixFQUF1Rk0sTUFBdkYsQ0FBUDtBQUNEO0FBakZ3QyxDQUFsQixDQUFuQixDQUFOOztrQkFvRmV4QixnQiIsImZpbGUiOiIwLjQzZjkzZTAyYTkzODEyNjE4MGYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tICdjb2RlbWlycm9yJ1xuXG5jb25zdCBDb2RlTWlycm9yRWRpdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NvbnRyb2xsZWQ6IHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9iaWxlOiB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc1RleHRBcmVhID0gdGhpcy5wcm9wcy5mb3JjZVRleHRBcmVhIHx8IHRoaXMucHJvcHMubW9iaWxlO1xuICAgIGlmICghaXNUZXh0QXJlYSkge1xuICAgICAgdGhpcy5lZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0aGlzLnJlZnMuZWRpdG9yLCB0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICB0aGlzLmVkaXRvci5vbignc2Nyb2xsJywgdGhpcy5jb250cm9sTXlTY3JvbGwpO1xuXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29udHJvbE15U2Nyb2xsKGUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgc2Nyb2xsVG9wfSA9IGUuZG9jXG4gICAgdGhpcy5wcm9wcy5teUJvZHlJc1JlYWR5KHBhcnNlSW50KChzY3JvbGxUb3AgLyBoZWlnaHQpICogMTAwKSlcbiAgfSxcblxuICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiB2YWx1ZX19KTtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVkaXRvciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgcmVmOiAnZWRpdG9yJyxcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgcmVhZE9ubHk6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgb25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2UsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy50ZXh0QXJlYVN0eWxlLFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRleHRBcmVhQ2xhc3NOYW1lIHx8IHRoaXMucHJvcHMudGV4dEFyZWFDbGFzc1xuICAgIH0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7c3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWV9LCBlZGl0b3IpO1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=