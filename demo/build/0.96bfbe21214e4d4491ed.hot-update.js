webpackHotUpdate(0,{

/***/ 146:
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
  Edit0r: {
    displayName: 'Edit0r'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0r.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0r.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Edit0r = _wrapComponent('Edit0r')((_temp = _class = function (_Component) {
  _inherits(Edit0r, _Component);

  function Edit0r(props) {
    _classCallCheck(this, Edit0r);

    var _this = _possibleConstructorReturn(this, (Edit0r.__proto__ || Object.getPrototypeOf(Edit0r)).call(this, props));

    _this.controlMyScroll = _this.controlMyScroll.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Edit0r, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.editor = _codemirror2.default.fromTextArea(this.editorRef, this.props);
      this.editor.on('change', this.handleChange);
      this.editor.on('scroll', this.controlMyScroll);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var value = this.props.value;

      if (this.editor && value !== null) {
        if (this.editor.getValue() !== value) {
          this.editor.setValue(value);
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

  return Edit0r;
}(_react2.Component), _class.defaultProps = {
  mode: 'markdown',
  theme: 'monokai'
}, _class.displayName = 'Edit0r', _class.propTypes = {
  value: _react2.PropTypes.string,
  onChange: _react2.PropTypes.func,
  myBodyIsReady: _react2.PropTypes.func,
  className: _react2.PropTypes.string,
  style: _react2.PropTypes.object
}, _temp));

exports.default = Edit0r;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbnRyb2xNeVNjcm9sbCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlZGl0b3IiLCJmcm9tVGV4dEFyZWEiLCJlZGl0b3JSZWYiLCJvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImUiLCJkb2MiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJteUJvZHlJc1JlYWR5IiwicGFyc2VJbnQiLCJvbkNoYW5nZSIsIm5leHRWYWx1ZSIsInRhcmdldCIsImNsYXNzTmFtZSIsInN0eWxlIiwieCIsImRlZmF1bHRQcm9wcyIsIm1vZGUiLCJ0aGVtZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsIkVkaXQwciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBSGlCO0FBSWxCOzs7O3dDQU9tQjtBQUNsQixXQUFLRSxNQUFMLEdBQWMscUJBQUdDLFlBQUgsQ0FBZ0IsS0FBS0MsU0FBckIsRUFBZ0MsS0FBS04sS0FBckMsQ0FBZDtBQUNBLFdBQUtJLE1BQUwsQ0FBWUcsRUFBWixDQUFlLFFBQWYsRUFBeUIsS0FBS0osWUFBOUI7QUFDQSxXQUFLQyxNQUFMLENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUtOLGVBQTlCO0FBQ0Q7Ozt5Q0FFb0I7QUFBQSxVQUNYTyxLQURXLEdBQ0QsS0FBS1IsS0FESixDQUNYUSxLQURXOztBQUVuQixVQUFJLEtBQUtKLE1BQUwsSUFBZUksVUFBVSxJQUE3QixFQUFtQztBQUNqQyxZQUFJLEtBQUtKLE1BQUwsQ0FBWUssUUFBWixPQUEyQkQsS0FBL0IsRUFBc0M7QUFDcEMsZUFBS0osTUFBTCxDQUFZTSxRQUFaLENBQXFCRixLQUFyQjtBQUNEO0FBQ0Y7QUFDRjs7O29DQUVlRyxDLEVBQUc7QUFBQSxtQkFDWUEsRUFBRUMsR0FEZDtBQUFBLFVBQ1RDLE1BRFMsVUFDVEEsTUFEUztBQUFBLFVBQ0RDLFNBREMsVUFDREEsU0FEQzs7QUFFakIsV0FBS2QsS0FBTCxDQUFXZSxhQUFYLENBQXlCQyxTQUFVRixZQUFZRCxNQUFiLEdBQXVCLEdBQWhDLENBQXpCO0FBQ0Q7OzttQ0FFYztBQUFBLG1CQUNlLEtBQUtiLEtBRHBCO0FBQUEsVUFDTGlCLFFBREssVUFDTEEsUUFESztBQUFBLFVBQ0tULEtBREwsVUFDS0EsS0FETDs7QUFFYixVQUFNVSxZQUFZLEtBQUtkLE1BQUwsQ0FBWUssUUFBWixFQUFsQjtBQUNBLFVBQUlTLGNBQWNWLEtBQWxCLEVBQXlCO0FBQ3ZCUyxpQkFBUyxFQUFDRSxRQUFRLEVBQUNYLE9BQU9VLFNBQVIsRUFBVCxFQUFUO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQUEsb0JBQ3VDLEtBQUtsQixLQUQ1QztBQUFBLFVBQ0NRLEtBREQsV0FDQ0EsS0FERDtBQUFBLFVBQ1FTLFFBRFIsV0FDUUEsUUFEUjtBQUFBLFVBQ2tCRyxTQURsQixXQUNrQkEsU0FEbEI7QUFBQSxVQUM2QkMsS0FEN0IsV0FDNkJBLEtBRDdCOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBSWpCLE1BQXBCO0FBQ0U7QUFDRSxxQkFBV2dCLFNBRGI7QUFFRSxpQkFBT0MsS0FGVDtBQUdFLGVBQUs7QUFBQSxtQkFBSyxPQUFLZixTQUFMLEdBQWlCZ0IsQ0FBdEI7QUFBQSxXQUhQO0FBSUUsaUJBQU9kLEtBSlQ7QUFLRSxvQkFBVVMsUUFMWjtBQURGLE9BREY7QUFVRDs7Ozs2QkE3Q01NLFksR0FBZTtBQUNwQkMsUUFBTSxVQURjO0FBRXBCQyxTQUFPO0FBRmEsQyxTQThDZkMsVyxHQUFjLFEsU0FDZEMsUyxHQUFZO0FBQ2pCbkIsU0FBTyxrQkFBVW9CLE1BREE7QUFFakJYLFlBQVUsa0JBQVVZLElBRkg7QUFHakJkLGlCQUFlLGtCQUFVYyxJQUhSO0FBSWpCVCxhQUFXLGtCQUFVUSxNQUpKO0FBS2pCUCxTQUFPLGtCQUFVUztBQUxBLEM7O2tCQVNOQyxNIiwiZmlsZSI6IjAuOTZiZmJlMjEyMTRlNGQ0NDkxZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENNIGZyb20gJ2NvZGVtaXJyb3InXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5jbGFzcyBFZGl0MHIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY29udHJvbE15U2Nyb2xsID0gdGhpcy5jb250cm9sTXlTY3JvbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2RlOiAnbWFya2Rvd24nLFxuICAgIHRoZW1lOiAnbW9ub2thaScsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmVkaXRvciA9IENNLmZyb21UZXh0QXJlYSh0aGlzLmVkaXRvclJlZiwgdGhpcy5wcm9wcylcbiAgICB0aGlzLmVkaXRvci5vbignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpXG4gICAgdGhpcy5lZGl0b3Iub24oJ3Njcm9sbCcsIHRoaXMuY29udHJvbE15U2Nyb2xsKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy5lZGl0b3IgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250cm9sTXlTY3JvbGwoZSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBzY3JvbGxUb3B9ID0gZS5kb2NcbiAgICB0aGlzLnByb3BzLm15Qm9keUlzUmVhZHkocGFyc2VJbnQoKHNjcm9sbFRvcCAvIGhlaWdodCkgKiAxMDApKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKVxuICAgIGlmIChuZXh0VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBvbkNoYW5nZSh7dGFyZ2V0OiB7dmFsdWU6IG5leHRWYWx1ZX19KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgY2xhc3NOYW1lLCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmVkaXRvcn0+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICByZWY9e3ggPT4gdGhpcy5lZGl0b3JSZWYgPSB4fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0VkaXQwcidcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbXlCb2R5SXNSZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQwclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvRWRpdDByLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==