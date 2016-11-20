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

var _style = __webpack_require__(83);

var _style2 = _interopRequireDefault(_style);

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

      return _react3.default.createElement(
        'div',
        { className: _style2.default.editor },
        _react3.default.createElement('textarea', {
          className: className,
          style: style,
          ref: function ref(x) {
            return _this2.editorRef = x;
          },
          value: value,
          onChange: onChange })
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9Db2RlTWlycm9yRWRpdG9yLmpzP2EyMWEiXSwibmFtZXMiOlsicHJvcHMiLCJjb250cm9sTXlTY3JvbGwiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZWRpdG9yIiwiZnJvbVRleHRBcmVhIiwiZWRpdG9yUmVmIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJlIiwiZG9jIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwibXlCb2R5SXNSZWFkeSIsInBhcnNlSW50Iiwib25DaGFuZ2UiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIngiLCJkZWZhdWx0UHJvcHMiLCJtb2RlIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0IiwiQ29kZU1pcnJvckVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLDRCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBSGlCO0FBSWxCOzs7O3dDQU9tQjtBQUNsQixXQUFLRSxNQUFMLEdBQWMscUJBQUdDLFlBQUgsQ0FBZ0IsS0FBS0MsU0FBckIsRUFBZ0MsS0FBS04sS0FBckMsQ0FBZDtBQUNBLFdBQUtJLE1BQUwsQ0FBWUcsRUFBWixDQUFlLFFBQWYsRUFBeUIsS0FBS0osWUFBOUI7QUFDQSxXQUFLQyxNQUFMLENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUtOLGVBQTlCO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBSSxLQUFLRyxNQUFULEVBQWlCO0FBQ2YsWUFBSSxLQUFLSixLQUFMLENBQVdRLEtBQVgsSUFBb0IsSUFBeEIsRUFBOEI7QUFDNUIsY0FBSSxLQUFLSixNQUFMLENBQVlLLFFBQVosT0FBMkIsS0FBS1QsS0FBTCxDQUFXUSxLQUExQyxFQUFpRDtBQUMvQyxpQkFBS0osTUFBTCxDQUFZTSxRQUFaLENBQXFCLEtBQUtWLEtBQUwsQ0FBV1EsS0FBaEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O29DQUVlRyxDLEVBQUc7QUFBQSxtQkFDWUEsRUFBRUMsR0FEZDtBQUFBLFVBQ1RDLE1BRFMsVUFDVEEsTUFEUztBQUFBLFVBQ0RDLFNBREMsVUFDREEsU0FEQzs7QUFFakIsV0FBS2QsS0FBTCxDQUFXZSxhQUFYLENBQXlCQyxTQUFVRixZQUFZRCxNQUFiLEdBQXVCLEdBQWhDLENBQXpCO0FBQ0Q7OzttQ0FFYztBQUFBLG1CQUNlLEtBQUtiLEtBRHBCO0FBQUEsVUFDTGlCLFFBREssVUFDTEEsUUFESztBQUFBLFVBQ0tULEtBREwsVUFDS0EsS0FETDs7QUFFYixVQUFNVSxZQUFZLEtBQUtkLE1BQUwsQ0FBWUssUUFBWixFQUFsQjtBQUNBLFVBQUlTLGNBQWNWLEtBQWxCLEVBQXlCO0FBQ3ZCUyxpQkFBUyxFQUFDRSxRQUFRLEVBQUNYLE9BQU9VLFNBQVIsRUFBVCxFQUFUO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQUEsb0JBQ3VDLEtBQUtsQixLQUQ1QztBQUFBLFVBQ0NRLEtBREQsV0FDQ0EsS0FERDtBQUFBLFVBQ1FTLFFBRFIsV0FDUUEsUUFEUjtBQUFBLFVBQ2tCRyxTQURsQixXQUNrQkEsU0FEbEI7QUFBQSxVQUM2QkMsS0FEN0IsV0FDNkJBLEtBRDdCOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBSWpCLE1BQXBCO0FBQ0U7QUFDRSxxQkFBV2dCLFNBRGI7QUFFRSxpQkFBT0MsS0FGVDtBQUdFLGVBQUs7QUFBQSxtQkFBSyxPQUFLZixTQUFMLEdBQWlCZ0IsQ0FBdEI7QUFBQSxXQUhQO0FBSUUsaUJBQU9kLEtBSlQ7QUFLRSxvQkFBVVMsUUFMWjtBQURGLE9BREY7QUFVRDs7Ozs2QkE5Q01NLFksR0FBZTtBQUNwQkMsUUFBTSxVQURjO0FBRXBCQyxTQUFPO0FBRmEsQyxTQWdEZkMsUyxHQUFZO0FBQ2pCbEIsU0FBTyxrQkFBVW1CLE1BREE7QUFFakJWLFlBQVUsa0JBQVVXLElBRkg7QUFHakJSLGFBQVcsa0JBQVVPLE1BSEo7QUFJakJOLFNBQU8sa0JBQVVRO0FBSkEsQzs7a0JBUU5DLGdCIiwiZmlsZSI6IjAuNTM0ZWFkMGZhNjFhMTJjZmE5MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENNIGZyb20gJ2NvZGVtaXJyb3InXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBDb2RlTWlycm9yRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRyb2xNeVNjcm9sbCA9IHRoaXMuY29udHJvbE15U2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9kZTogJ21hcmtkb3duJyxcbiAgICB0aGVtZTogJ21vbm9rYWknLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5lZGl0b3IgPSBDTS5mcm9tVGV4dEFyZWEodGhpcy5lZGl0b3JSZWYsIHRoaXMucHJvcHMpXG4gICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKVxuICAgIHRoaXMuZWRpdG9yLm9uKCdzY3JvbGwnLCB0aGlzLmNvbnRyb2xNeVNjcm9sbClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRyb2xNeVNjcm9sbChlKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHNjcm9sbFRvcH0gPSBlLmRvY1xuICAgIHRoaXMucHJvcHMubXlCb2R5SXNSZWFkeShwYXJzZUludCgoc2Nyb2xsVG9wIC8gaGVpZ2h0KSAqIDEwMCkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogbmV4dFZhbHVlfX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCBjbGFzc05hbWUsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZWRpdG9yfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVkaXRvclJlZiA9IHh9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlTWlycm9yRWRpdG9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvQ29kZU1pcnJvckVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=