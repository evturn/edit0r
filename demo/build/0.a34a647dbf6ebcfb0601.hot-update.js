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
    console.log(className);
    return _react3.default.createElement('div', { style: this.props.style, className: this.props.className }, editor);
  }
}));

exports.default = CodeMirrorEditor;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsiQ29kZU1pcnJvckVkaXRvciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNDb250cm9sbGVkIiwicHJvcHMiLCJ2YWx1ZSIsInkiLCJnZXREZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRWYWx1ZSIsInN0eWxlIiwib2JqZWN0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJmdW5jIiwiY29tcG9uZW50RGlkTW91bnQiLCJpc1RleHRBcmVhIiwiZm9yY2VUZXh0QXJlYSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsInJlZnMiLCJvbiIsImhhbmRsZUNoYW5nZSIsImNvbnRyb2xNeVNjcm9sbCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsIm15Qm9keUlzUmVhZHkiLCJwYXJzZUludCIsInRhcmdldCIsInN0YXRlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInJlZiIsInJlYWRPbmx5IiwidGV4dEFyZWFTdHlsZSIsInRleHRBcmVhQ2xhc3NOYW1lIiwidGV4dEFyZWFDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnREFBbUIsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDekNDLG1CQUFpQiwyQkFBVztBQUMxQixXQUFPO0FBQ0xDLG9CQUFjLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixJQUQ3QjtBQUVMQyxTQUFHO0FBRkUsS0FBUDtBQUlELEdBTndDOztBQVF6Q0MsaUJBUnlDLDZCQVF2QjtBQUNoQixXQUFPO0FBQ0xDLGNBQVEsT0FBT0MsU0FBUCxLQUFxQixXQUFyQixJQUNIQSxVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixVQUExQixDQURHLElBRUhGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFFBQTFCLENBRkcsSUFHSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FIRyxJQUlIRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpHLElBS0hGLFVBQVVDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBTEcsSUFNSEYsVUFBVUMsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FORyxJQU9IRixVQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixnQkFBMUI7QUFSQSxLQUFQO0FBVUQsR0FuQndDOzs7QUFxQnpDQyxhQUFXO0FBQ1RQLFdBQU8sZ0JBQU1RLFNBQU4sQ0FBZ0JDLE1BRGQ7QUFFVEMsa0JBQWMsZ0JBQU1GLFNBQU4sQ0FBZ0JDLE1BRnJCO0FBR1RFLFdBQU8sZ0JBQU1ILFNBQU4sQ0FBZ0JJLE1BSGQ7QUFJVEMsZUFBVyxnQkFBTUwsU0FBTixDQUFnQkMsTUFKbEI7QUFLVEssY0FBVSxnQkFBTU4sU0FBTixDQUFnQk87QUFMakIsR0FyQjhCOztBQTZCekNDLHFCQUFtQiw2QkFBVztBQUM1QixRQUFJQyxhQUFhLEtBQUtsQixLQUFMLENBQVdtQixhQUFYLElBQTRCLEtBQUtuQixLQUFMLENBQVdJLE1BQXhEO0FBQ0EsUUFBSSxDQUFDYyxVQUFMLEVBQWlCO0FBQ2YsV0FBS0UsTUFBTCxHQUFjLHFCQUFXQyxZQUFYLENBQXdCLEtBQUtDLElBQUwsQ0FBVUYsTUFBbEMsRUFBMEMsS0FBS3BCLEtBQS9DLENBQWQ7QUFDQSxXQUFLb0IsTUFBTCxDQUFZRyxFQUFaLENBQWUsUUFBZixFQUF5QixLQUFLQyxZQUE5QjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUcsRUFBWixDQUFlLFFBQWYsRUFBeUIsS0FBS0UsZUFBOUI7QUFFRDtBQUNGLEdBckN3Qzs7QUF1Q3pDQyxzQkFBb0IsOEJBQVc7QUFDN0IsUUFBSSxLQUFLTixNQUFULEVBQWlCO0FBQ2YsVUFBSSxLQUFLcEIsS0FBTCxDQUFXQyxLQUFYLElBQW9CLElBQXhCLEVBQThCO0FBQzVCLFlBQUksS0FBS21CLE1BQUwsQ0FBWU8sUUFBWixPQUEyQixLQUFLM0IsS0FBTCxDQUFXQyxLQUExQyxFQUFpRDtBQUMvQyxlQUFLbUIsTUFBTCxDQUFZUSxRQUFaLENBQXFCLEtBQUs1QixLQUFMLENBQVdDLEtBQWhDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0EvQ3dDOztBQWlEekN3QixpQkFqRHlDLDJCQWlEekJJLENBakR5QixFQWlEdEI7QUFBQSxpQkFDWUEsRUFBRUMsR0FEZDtBQUFBLFFBQ1RDLE1BRFMsVUFDVEEsTUFEUztBQUFBLFFBQ0RDLFNBREMsVUFDREEsU0FEQzs7QUFFakJDLFlBQVFDLEdBQVIsQ0FBWUwsRUFBRUMsR0FBZDtBQUNBLFNBQUs5QixLQUFMLENBQVdtQyxhQUFYLENBQXlCQyxTQUFVSixZQUFZRCxNQUFiLEdBQXVCLEdBQWhDLENBQXpCO0FBQ0QsR0FyRHdDOzs7QUF1RHpDUCxnQkFBYyx3QkFBVztBQUN2QixRQUFJLEtBQUtKLE1BQVQsRUFBaUI7QUFDZixVQUFJbkIsUUFBUSxLQUFLbUIsTUFBTCxDQUFZTyxRQUFaLEVBQVo7QUFDQSxVQUFJMUIsVUFBVSxLQUFLRCxLQUFMLENBQVdDLEtBQXpCLEVBQWdDO0FBQzlCLGFBQUtELEtBQUwsQ0FBV2UsUUFBWCxJQUF1QixLQUFLZixLQUFMLENBQVdlLFFBQVgsQ0FBb0IsRUFBQ3NCLFFBQVEsRUFBQ3BDLE9BQU9BLEtBQVIsRUFBVCxFQUFwQixDQUF2QjtBQUNBLFlBQUksS0FBS21CLE1BQUwsQ0FBWU8sUUFBWixPQUEyQixLQUFLM0IsS0FBTCxDQUFXQyxLQUExQyxFQUFpRDtBQUMvQyxjQUFJLEtBQUtxQyxLQUFMLENBQVd2QyxZQUFmLEVBQTZCO0FBQzNCLGlCQUFLcUIsTUFBTCxDQUFZUSxRQUFaLENBQXFCLEtBQUs1QixLQUFMLENBQVdDLEtBQWhDO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsaUJBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBckV3Qzs7QUF1RXpDc0MsVUFBUSxrQkFBVztBQUNqQixRQUFJbkIsU0FBUyxnQkFBTW9CLGFBQU4sQ0FBb0IsVUFBcEIsRUFBZ0M7QUFDM0NDLFdBQUssUUFEc0M7QUFFM0N4QyxhQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FGeUI7QUFHM0N5QyxnQkFBVSxLQUFLMUMsS0FBTCxDQUFXMEMsUUFIc0I7QUFJM0MvQixvQkFBYyxLQUFLWCxLQUFMLENBQVdXLFlBSmtCO0FBSzNDSSxnQkFBVSxLQUFLZixLQUFMLENBQVdlLFFBTHNCO0FBTTNDSCxhQUFPLEtBQUtaLEtBQUwsQ0FBVzJDLGFBTnlCO0FBTzNDN0IsaUJBQVcsS0FBS2QsS0FBTCxDQUFXNEMsaUJBQVgsSUFBZ0MsS0FBSzVDLEtBQUwsQ0FBVzZDO0FBUFgsS0FBaEMsQ0FBYjtBQVNBWixZQUFRQyxHQUFSLENBQVlwQixTQUFaO0FBQ0EsV0FBTyxnQkFBTTBCLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQzVCLE9BQU8sS0FBS1osS0FBTCxDQUFXWSxLQUFuQixFQUEwQkUsV0FBVyxLQUFLZCxLQUFMLENBQVdjLFNBQWhELEVBQTNCLEVBQXVGTSxNQUF2RixDQUFQO0FBQ0Q7QUFuRndDLENBQWxCLENBQW5CLENBQU47O2tCQXNGZXhCLGdCIiwiZmlsZSI6IjAuYTM0YTY0N2RiZjZlYmNmYjA2MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ2NvZGVtaXJyb3InXG5cbmNvbnN0IENvZGVNaXJyb3JFZGl0b3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ29udHJvbGxlZDogdGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsLFxuICAgICAgeTogMFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2JpbGU6IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcbiAgICB9XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlzVGV4dEFyZWEgPSB0aGlzLnByb3BzLmZvcmNlVGV4dEFyZWEgfHwgdGhpcy5wcm9wcy5tb2JpbGU7XG4gICAgaWYgKCFpc1RleHRBcmVhKSB7XG4gICAgICB0aGlzLmVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRoaXMucmVmcy5lZGl0b3IsIHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgIHRoaXMuZWRpdG9yLm9uKCdzY3JvbGwnLCB0aGlzLmNvbnRyb2xNeVNjcm9sbCk7XG5cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb250cm9sTXlTY3JvbGwoZSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBzY3JvbGxUb3B9ID0gZS5kb2NcbiAgICBjb25zb2xlLmxvZyhlLmRvYylcbiAgICB0aGlzLnByb3BzLm15Qm9keUlzUmVhZHkocGFyc2VJbnQoKHNjcm9sbFRvcCAvIGhlaWdodCkgKiAxMDApKVxuICB9LFxuXG4gIGhhbmRsZUNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpO1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7dGFyZ2V0OiB7dmFsdWU6IHZhbHVlfX0pO1xuICAgICAgICBpZiAodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzQ29udHJvbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWRpdG9yID0gUmVhY3QuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7XG4gICAgICByZWY6ICdlZGl0b3InLFxuICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICByZWFkT25seTogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnRleHRBcmVhU3R5bGUsXG4gICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMudGV4dEFyZWFDbGFzc05hbWUgfHwgdGhpcy5wcm9wcy50ZXh0QXJlYUNsYXNzXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY2xhc3NOYW1lKVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7c3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWV9LCBlZGl0b3IpO1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=