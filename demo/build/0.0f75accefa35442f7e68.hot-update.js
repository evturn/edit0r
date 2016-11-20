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

    _this.controlMyScroll = _this.controlMyScroll.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CodeMirrorEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.editor = _codemirror2.default.fromTextArea(this.editorRef, this.props);
      this.editor.on('change', this.handleChange);
      this.editor.on('scroll', this.controlMyScroll);
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
          value = _props2.value,
          onChange = _props2.onChange,
          className = _props2.className,
          style = _props2.style;

      return _react3.default.createElement('textarea', {
        className: className,
        style: style,
        ref: function ref(x) {
          return _this2.editorRef = x;
        },
        value: value,
        onChange: onChange });
    }
  }]);

  return CodeMirrorEditor;
}(_react2.Component), _class.defaultProps = {
  mode: 'markdown',
  theme: 'monokai'
}, _class.propTypes = {
  value: _react2.PropTypes.string,
  onChange: _react2.PropTypes.func,
  className: _react2.PropTypes.string,
  style: _react2.PropTypes.object
}, _temp));

exports.default = CodeMirrorEditor;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJjb250cm9sTXlTY3JvbGwiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZWRpdG9yIiwiZnJvbVRleHRBcmVhIiwiZWRpdG9yUmVmIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIngiLCJkZWZhdWx0UHJvcHMiLCJtb2RlIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0IiwiQ29kZU1pcnJvckVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSw0QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUVqQixVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUhpQjtBQUlsQjs7Ozt3Q0FPbUI7QUFDbEIsV0FBS0UsTUFBTCxHQUFjLHFCQUFHQyxZQUFILENBQWdCLEtBQUtDLFNBQXJCLEVBQWdDLEtBQUtOLEtBQXJDLENBQWQ7QUFDQSxXQUFLSSxNQUFMLENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUtKLFlBQTlCO0FBQ0EsV0FBS0MsTUFBTCxDQUFZRyxFQUFaLENBQWUsUUFBZixFQUF5QixLQUFLTixlQUE5QjtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQUksS0FBS0csTUFBVCxFQUFpQjtBQUNmLFlBQUksS0FBS0osS0FBTCxDQUFXUSxLQUFYLElBQW9CLElBQXhCLEVBQThCO0FBQzVCLGNBQUksS0FBS0osTUFBTCxDQUFZSyxRQUFaLE9BQTJCLEtBQUtULEtBQUwsQ0FBV1EsS0FBMUMsRUFBaUQ7QUFDL0MsaUJBQUtKLE1BQUwsQ0FBWU0sUUFBWixDQUFxQixLQUFLVixLQUFMLENBQVdRLEtBQWhDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7OztvQ0FFZUcsQyxFQUFHO0FBQUEsbUJBQ1lBLEVBQUVDLEdBRGQ7QUFBQSxVQUNUQyxNQURTLFVBQ1RBLE1BRFM7QUFBQSxVQUNEQyxTQURDLFVBQ0RBLFNBREM7O0FBRWpCLFdBQUtkLEtBQUwsQ0FBV2UsYUFBWCxDQUF5QkMsU0FBVUYsWUFBWUQsTUFBYixHQUF1QixHQUFoQyxDQUF6QjtBQUNEOzs7bUNBRWM7QUFBQSxtQkFDZSxLQUFLYixLQURwQjtBQUFBLFVBQ0xpQixRQURLLFVBQ0xBLFFBREs7QUFBQSxVQUNLVCxLQURMLFVBQ0tBLEtBREw7O0FBRWIsVUFBTVUsWUFBWSxLQUFLZCxNQUFMLENBQVlLLFFBQVosRUFBbEI7QUFDQSxVQUFJUyxjQUFjVixLQUFsQixFQUF5QjtBQUN2QlMsaUJBQVMsRUFBQ0UsUUFBUSxFQUFDWCxPQUFPVSxTQUFSLEVBQVQsRUFBVDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUFBLG9CQUN1QyxLQUFLbEIsS0FENUM7QUFBQSxVQUNDUSxLQURELFdBQ0NBLEtBREQ7QUFBQSxVQUNRUyxRQURSLFdBQ1FBLFFBRFI7QUFBQSxVQUNrQkcsU0FEbEIsV0FDa0JBLFNBRGxCO0FBQUEsVUFDNkJDLEtBRDdCLFdBQzZCQSxLQUQ3Qjs7QUFFUCxhQUNFO0FBQ0UsbUJBQVdELFNBRGI7QUFFRSxlQUFPQyxLQUZUO0FBR0UsYUFBSztBQUFBLGlCQUFLLE9BQUtmLFNBQUwsR0FBaUJnQixDQUF0QjtBQUFBLFNBSFA7QUFJRSxlQUFPZCxLQUpUO0FBS0Usa0JBQVVTLFFBTFosR0FERjtBQVFEOzs7OzZCQTVDTU0sWSxHQUFlO0FBQ3BCQyxRQUFNLFVBRGM7QUFFcEJDLFNBQU87QUFGYSxDLFNBOENmQyxTLEdBQVk7QUFDakJsQixTQUFPLGtCQUFVbUIsTUFEQTtBQUVqQlYsWUFBVSxrQkFBVVcsSUFGSDtBQUdqQlIsYUFBVyxrQkFBVU8sTUFISjtBQUlqQk4sU0FBTyxrQkFBVVE7QUFKQSxDOztrQkFRTkMsZ0IiLCJmaWxlIjoiMC4wZjc1YWNjZWZhMzU0NDJmN2U2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ00gZnJvbSAnY29kZW1pcnJvcidcblxuY2xhc3MgQ29kZU1pcnJvckVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250cm9sTXlTY3JvbGwgPSB0aGlzLmNvbnRyb2xNeVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZGU6ICdtYXJrZG93bicsXG4gICAgdGhlbWU6ICdtb25va2FpJyxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZWRpdG9yID0gQ00uZnJvbVRleHRBcmVhKHRoaXMuZWRpdG9yUmVmLCB0aGlzLnByb3BzKVxuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSlcbiAgICB0aGlzLmVkaXRvci5vbignc2Nyb2xsJywgdGhpcy5jb250cm9sTXlTY3JvbGwpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250cm9sTXlTY3JvbGwoZSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBzY3JvbGxUb3B9ID0gZS5kb2NcbiAgICB0aGlzLnByb3BzLm15Qm9keUlzUmVhZHkocGFyc2VJbnQoKHNjcm9sbFRvcCAvIGhlaWdodCkgKiAxMDApKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKVxuICAgIGlmIChuZXh0VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBvbkNoYW5nZSh7dGFyZ2V0OiB7dmFsdWU6IG5leHRWYWx1ZX19KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgY2xhc3NOYW1lLCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWRpdG9yUmVmID0geH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgKVxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVNaXJyb3JFZGl0b3JcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==