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

    console.log(e.doc);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsiQ29kZU1pcnJvckVkaXRvciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNDb250cm9sbGVkIiwicHJvcHMiLCJ2YWx1ZSIsInkiLCJnZXREZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRWYWx1ZSIsInN0eWxlIiwib2JqZWN0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJmdW5jIiwiY29tcG9uZW50RGlkTW91bnQiLCJpc1RleHRBcmVhIiwiZm9yY2VUZXh0QXJlYSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsInJlZnMiLCJvbiIsImhhbmRsZUNoYW5nZSIsImNvbnRyb2xNeVNjcm9sbCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsIm15Qm9keUlzUmVhZHkiLCJwYXJzZUludCIsInRhcmdldCIsInN0YXRlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInJlZiIsInJlYWRPbmx5IiwidGV4dEFyZWFTdHlsZSIsInRleHRBcmVhQ2xhc3NOYW1lIiwidGV4dEFyZWFDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnREFBbUIsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDekNDLG1CQUFpQiwyQkFBVztBQUMxQixXQUFPO0FBQ0xDLG9CQUFjLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixJQUQ3QjtBQUVMQyxTQUFHO0FBRkUsS0FBUDtBQUlELEdBTndDOztBQVF6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QzNCLGlCQUFLcUIsTUFBTCxDQUFZUSxRQUFaLENBQXFCLEtBQUs1QixLQUFMLENBQVdDLEtBQWhDO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsaUJBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBckV3Qzs7QUF1RXpDc0MsVUFBUSxrQkFBVztBQUNqQixRQUFJbkIsU0FBUyxnQkFBTW9CLGFBQU4sQ0FBb0IsVUFBcEIsRUFBZ0M7QUFDM0NDLFdBQUssUUFEc0M7QUFFM0N4QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FGeUI7QUFHM0N5QyxnQkFBVSxLQUFLMUMsS0FBTCxDQUFXMEMsUUFIc0I7QUFJM0MvQixvQkFBYyxLQUFLWCxLQUFMLENBQVdXLFlBSmtCO0FBSzNDSSxnQkFBVSxLQUFLZixLQUFMLENBQVdlLFFBTHNCO0FBTTNDSCxhQUFPLEtBQUtaLEtBQUwsQ0FBVzJDLGFBTnlCO0FBTzNDN0IsaUJBQVcsS0FBS2QsS0FBTCxDQUFXNEMsaUJBQVgsSUFBZ0MsS0FBSzVDLEtBQUwsQ0FBVzZDO0FBUFgsS0FBaEMsQ0FBYjtBQVNBWixZQUFRQyxHQUFSLENBQVksS0FBS2xDLEtBQUwsQ0FBV2MsU0FBdkI7QUFDQSxXQUFPLGdCQUFNMEIsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDNUIsT0FBTyxLQUFLWixLQUFMLENBQVdZLEtBQW5CLEVBQTBCRSxXQUFXLEtBQUtkLEtBQUwsQ0FBV2MsU0FBaEQsRUFBM0IsRUFBdUZNLE1BQXZGLENBQVA7QUFDRDtBQW5Gd0MsQ0FBbEIsQ0FBbkIsQ0FBTjs7a0JBc0ZleEIsZ0IiLCJmaWxlIjoiMC4zOTk2NTkwNzVjMjQyOTdjNTMzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSAnY29kZW1pcnJvcidcblxuY29uc3QgQ29kZU1pcnJvckVkaXRvciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNDb250cm9sbGVkOiB0aGlzLnByb3BzLnZhbHVlICE9IG51bGwsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vYmlsZTogdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICAgIH1cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNUZXh0QXJlYSA9IHRoaXMucHJvcHMuZm9yY2VUZXh0QXJlYSB8fCB0aGlzLnByb3BzLm1vYmlsZTtcbiAgICBpZiAoIWlzVGV4dEFyZWEpIHtcbiAgICAgIHRoaXMuZWRpdG9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGhpcy5yZWZzLmVkaXRvciwgdGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLmVkaXRvci5vbignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgdGhpcy5lZGl0b3Iub24oJ3Njcm9sbCcsIHRoaXMuY29udHJvbE15U2Nyb2xsKTtcblxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbnRyb2xNeVNjcm9sbChlKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHNjcm9sbFRvcH0gPSBlLmRvY1xuICAgIGNvbnNvbGUubG9nKGUuZG9jKVxuICAgIHRoaXMucHJvcHMubXlCb2R5SXNSZWFkeShwYXJzZUludCgoc2Nyb2xsVG9wIC8gaGVpZ2h0KSAqIDEwMCkpXG4gIH0sXG5cbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogdmFsdWV9fSk7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNDb250cm9sbGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlZGl0b3IgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgIHJlZjogJ2VkaXRvcicsXG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgIHJlYWRPbmx5OiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMudGV4dEFyZWFTdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy50ZXh0QXJlYUNsYXNzTmFtZSB8fCB0aGlzLnByb3BzLnRleHRBcmVhQ2xhc3NcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNsYXNzTmFtZSlcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge3N0eWxlOiB0aGlzLnByb3BzLnN0eWxlLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lfSwgZWRpdG9yKTtcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ29kZU1pcnJvckVkaXRvclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0NvZGVNaXJyb3JFZGl0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9