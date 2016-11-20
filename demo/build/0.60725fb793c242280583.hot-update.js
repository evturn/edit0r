webpackHotUpdate(0,{

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(51);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(20);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(52);

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
  Edit0rInput: {
    displayName: 'Edit0rInput'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0rInput.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0rInput.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Edit0rInput = _wrapComponent('Edit0rInput')((_temp = _class = function (_Component) {
  _inherits(Edit0rInput, _Component);

  function Edit0rInput(props) {
    _classCallCheck(this, Edit0rInput);

    var _this = _possibleConstructorReturn(this, (Edit0rInput.__proto__ || Object.getPrototypeOf(Edit0rInput)).call(this, props));

    _this.controlMyScroll = _this.controlMyScroll.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Edit0rInput, [{
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

      if (this.editor && this.editor.getValue() !== value && value !== null) {
        this.editor.setValue(value);
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
        { className: className },
        _react3.default.createElement('textarea', {
          className: _style2.default.editor,
          style: style,
          ref: function ref(x) {
            return _this2.editorRef = x;
          },
          value: value,
          onChange: onChange })
      );
    }
  }]);

  return Edit0rInput;
}(_react2.Component), _class.defaultProps = {
  mode: 'markdown',
  theme: 'monokai'
}, _class.displayName = 'Edit0rInput', _class.propTypes = {
  value: _react2.PropTypes.string,
  onChange: _react2.PropTypes.func,
  myBodyIsReady: _react2.PropTypes.func,
  className: _react2.PropTypes.string,
  style: _react2.PropTypes.object
}, _temp));

exports.default = Edit0rInput;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHJJbnB1dC5qcz85OTJhIl0sIm5hbWVzIjpbInByb3BzIiwiY29udHJvbE15U2Nyb2xsIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImVkaXRvciIsImZyb21UZXh0QXJlYSIsImVkaXRvclJlZiIsIm9uIiwidmFsdWUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiZSIsImRvYyIsImhlaWdodCIsInNjcm9sbFRvcCIsIm15Qm9keUlzUmVhZHkiLCJwYXJzZUludCIsIm9uQ2hhbmdlIiwibmV4dFZhbHVlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ4IiwiZGVmYXVsdFByb3BzIiwibW9kZSIsInRoZW1lIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0IiwiRWRpdDBySW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx1QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUhpQjtBQUlsQjs7Ozt3Q0FPbUI7QUFDbEIsV0FBS0UsTUFBTCxHQUFjLHFCQUFHQyxZQUFILENBQWdCLEtBQUtDLFNBQXJCLEVBQWdDLEtBQUtOLEtBQXJDLENBQWQ7QUFDQSxXQUFLSSxNQUFMLENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUtKLFlBQTlCO0FBQ0EsV0FBS0MsTUFBTCxDQUFZRyxFQUFaLENBQWUsUUFBZixFQUF5QixLQUFLTixlQUE5QjtBQUNEOzs7eUNBRW9CO0FBQUEsVUFDWE8sS0FEVyxHQUNELEtBQUtSLEtBREosQ0FDWFEsS0FEVzs7QUFFbkIsVUFBSSxLQUFLSixNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZSyxRQUFaLE9BQTJCRCxLQUExQyxJQUFtREEsVUFBVSxJQUFqRSxFQUF1RTtBQUNyRSxhQUFLSixNQUFMLENBQVlNLFFBQVosQ0FBcUJGLEtBQXJCO0FBQ0Q7QUFDRjs7O29DQUVlRyxDLEVBQUc7QUFBQSxtQkFDWUEsRUFBRUMsR0FEZDtBQUFBLFVBQ1RDLE1BRFMsVUFDVEEsTUFEUztBQUFBLFVBQ0RDLFNBREMsVUFDREEsU0FEQzs7QUFFakIsV0FBS2QsS0FBTCxDQUFXZSxhQUFYLENBQXlCQyxTQUFVRixZQUFZRCxNQUFiLEdBQXVCLEdBQWhDLENBQXpCO0FBQ0Q7OzttQ0FFYztBQUFBLG1CQUNlLEtBQUtiLEtBRHBCO0FBQUEsVUFDTGlCLFFBREssVUFDTEEsUUFESztBQUFBLFVBQ0tULEtBREwsVUFDS0EsS0FETDs7QUFFYixVQUFNVSxZQUFZLEtBQUtkLE1BQUwsQ0FBWUssUUFBWixFQUFsQjtBQUNBLFVBQUlTLGNBQWNWLEtBQWxCLEVBQXlCO0FBQ3ZCUyxpQkFBUyxFQUFDRSxRQUFRLEVBQUNYLE9BQU9VLFNBQVIsRUFBVCxFQUFUO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQUEsb0JBQ3VDLEtBQUtsQixLQUQ1QztBQUFBLFVBQ0NRLEtBREQsV0FDQ0EsS0FERDtBQUFBLFVBQ1FTLFFBRFIsV0FDUUEsUUFEUjtBQUFBLFVBQ2tCRyxTQURsQixXQUNrQkEsU0FEbEI7QUFBQSxVQUM2QkMsS0FEN0IsV0FDNkJBLEtBRDdCOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0QsU0FBaEI7QUFDRTtBQUNFLHFCQUFXLGdCQUFJaEIsTUFEakI7QUFFRSxpQkFBT2lCLEtBRlQ7QUFHRSxlQUFLO0FBQUEsbUJBQUssT0FBS2YsU0FBTCxHQUFpQmdCLENBQXRCO0FBQUEsV0FIUDtBQUlFLGlCQUFPZCxLQUpUO0FBS0Usb0JBQVVTLFFBTFo7QUFERixPQURGO0FBVUQ7Ozs7NkJBM0NNTSxZLEdBQWU7QUFDcEJDLFFBQU0sVUFEYztBQUVwQkMsU0FBTztBQUZhLEMsU0E0Q2ZDLFcsR0FBYyxhLFNBQ2RDLFMsR0FBWTtBQUNqQm5CLFNBQU8sa0JBQVVvQixNQURBO0FBRWpCWCxZQUFVLGtCQUFVWSxJQUZIO0FBR2pCZCxpQkFBZSxrQkFBVWMsSUFIUjtBQUlqQlQsYUFBVyxrQkFBVVEsTUFKSjtBQUtqQlAsU0FBTyxrQkFBVVM7QUFMQSxDOztrQkFTTkMsVyIsImZpbGUiOiIwLjYwNzI1ZmI3OTNjMjQyMjgwNTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDTSBmcm9tICdjb2RlbWlycm9yJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY2xhc3MgRWRpdDBySW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY29udHJvbE15U2Nyb2xsID0gdGhpcy5jb250cm9sTXlTY3JvbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2RlOiAnbWFya2Rvd24nLFxuICAgIHRoZW1lOiAnbW9ub2thaScsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmVkaXRvciA9IENNLmZyb21UZXh0QXJlYSh0aGlzLmVkaXRvclJlZiwgdGhpcy5wcm9wcylcbiAgICB0aGlzLmVkaXRvci5vbignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpXG4gICAgdGhpcy5lZGl0b3Iub24oJ3Njcm9sbCcsIHRoaXMuY29udHJvbE15U2Nyb2xsKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy5lZGl0b3IgJiYgdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSAhPT0gdmFsdWUgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnRyb2xNeVNjcm9sbChlKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHNjcm9sbFRvcH0gPSBlLmRvY1xuICAgIHRoaXMucHJvcHMubXlCb2R5SXNSZWFkeShwYXJzZUludCgoc2Nyb2xsVG9wIC8gaGVpZ2h0KSAqIDEwMCkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogbmV4dFZhbHVlfX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCBjbGFzc05hbWUsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5lZGl0b3J9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVkaXRvclJlZiA9IHh9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRWRpdDBySW5wdXQnXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG15Qm9keUlzUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0MHJJbnB1dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvRWRpdDBySW5wdXQuanMiXSwic291cmNlUm9vdCI6IiJ9