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
}(_react2.Component), _class.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJjb250cm9sTXlTY3JvbGwiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZWRpdG9yIiwiZnJvbVRleHRBcmVhIiwiZWRpdG9yUmVmIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIngiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0IiwiQ29kZU1pcnJvckVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSw0QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUVqQixVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjs7QUFIaUI7QUFLbEI7Ozs7d0NBU21CO0FBQ2xCLFdBQUtFLE1BQUwsR0FBYyxxQkFBR0MsWUFBSCxDQUFnQixLQUFLQyxTQUFyQixFQUFnQyxLQUFLTixLQUFyQyxDQUFkO0FBQ0EsV0FBS0ksTUFBTCxDQUFZRyxFQUFaLENBQWUsUUFBZixFQUF5QixLQUFLSixZQUE5QjtBQUNBLFdBQUtDLE1BQUwsQ0FBWUcsRUFBWixDQUFlLFFBQWYsRUFBeUIsS0FBS04sZUFBOUI7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixZQUFJLEtBQUtKLEtBQUwsQ0FBV1EsS0FBWCxJQUFvQixJQUF4QixFQUE4QjtBQUM1QixjQUFJLEtBQUtKLE1BQUwsQ0FBWUssUUFBWixPQUEyQixLQUFLVCxLQUFMLENBQVdRLEtBQTFDLEVBQWlEO0FBQy9DLGlCQUFLSixNQUFMLENBQVlNLFFBQVosQ0FBcUIsS0FBS1YsS0FBTCxDQUFXUSxLQUFoQztBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7b0NBRWVHLEMsRUFBRztBQUFBLG1CQUNZQSxFQUFFQyxHQURkO0FBQUEsVUFDVEMsTUFEUyxVQUNUQSxNQURTO0FBQUEsVUFDREMsU0FEQyxVQUNEQSxTQURDOztBQUVqQixXQUFLZCxLQUFMLENBQVdlLGFBQVgsQ0FBeUJDLFNBQVVGLFlBQVlELE1BQWIsR0FBdUIsR0FBaEMsQ0FBekI7QUFDRDs7O21DQUVjO0FBQUEsbUJBQ2UsS0FBS2IsS0FEcEI7QUFBQSxVQUNMaUIsUUFESyxVQUNMQSxRQURLO0FBQUEsVUFDS1QsS0FETCxVQUNLQSxLQURMOztBQUViLFVBQU1VLFlBQVksS0FBS2QsTUFBTCxDQUFZSyxRQUFaLEVBQWxCO0FBQ0EsVUFBSVMsY0FBY1YsS0FBbEIsRUFBeUI7QUFDdkJTLGlCQUFTLEVBQUNFLFFBQVEsRUFBQ1gsT0FBT1UsU0FBUixFQUFULEVBQVQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFBQSxvQkFDdUMsS0FBS2xCLEtBRDVDO0FBQUEsVUFDQ1EsS0FERCxXQUNDQSxLQUREO0FBQUEsVUFDUVMsUUFEUixXQUNRQSxRQURSO0FBQUEsVUFDa0JHLFNBRGxCLFdBQ2tCQSxTQURsQjtBQUFBLFVBQzZCQyxLQUQ3QixXQUM2QkEsS0FEN0I7O0FBRVAsYUFDRTtBQUNFLG1CQUFXRCxTQURiO0FBRUUsZUFBT0MsS0FGVDtBQUdFLGFBQUs7QUFBQSxpQkFBSyxPQUFLZixTQUFMLEdBQWlCZ0IsQ0FBdEI7QUFBQSxTQUhQO0FBSUUsZUFBT2QsS0FKVDtBQUtFLGtCQUFVUyxRQUxaLEdBREY7QUFRRDs7Ozs2QkE5Q01NLFMsR0FBWTtBQUNqQmYsU0FBTyxrQkFBVWdCLE1BREE7QUFFakJQLFlBQVUsa0JBQVVRLElBRkg7QUFHakJMLGFBQVcsa0JBQVVJLE1BSEo7QUFJakJILFNBQU8sa0JBQVVLO0FBSkEsQzs7a0JBaUROQyxnQiIsImZpbGUiOiIwLmI5YTcyNTFiNzMzZWQyNDY4ZWJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDTSBmcm9tICdjb2RlbWlycm9yJ1xuXG5jbGFzcyBDb2RlTWlycm9yRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRyb2xNeVNjcm9sbCA9IHRoaXMuY29udHJvbE15U2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5lZGl0b3IgPSBDTS5mcm9tVGV4dEFyZWEodGhpcy5lZGl0b3JSZWYsIHRoaXMucHJvcHMpXG4gICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKVxuICAgIHRoaXMuZWRpdG9yLm9uKCdzY3JvbGwnLCB0aGlzLmNvbnRyb2xNeVNjcm9sbClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRyb2xNeVNjcm9sbChlKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHNjcm9sbFRvcH0gPSBlLmRvY1xuICAgIHRoaXMucHJvcHMubXlCb2R5SXNSZWFkeShwYXJzZUludCgoc2Nyb2xsVG9wIC8gaGVpZ2h0KSAqIDEwMCkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogbmV4dFZhbHVlfX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCBjbGFzc05hbWUsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICByZWY9e3ggPT4gdGhpcy5lZGl0b3JSZWYgPSB4fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZU1pcnJvckVkaXRvclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0NvZGVNaXJyb3JFZGl0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9