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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbnRyb2xNeVNjcm9sbCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlZGl0b3IiLCJmcm9tVGV4dEFyZWEiLCJlZGl0b3JSZWYiLCJvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImUiLCJkb2MiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJteUJvZHlJc1JlYWR5IiwicGFyc2VJbnQiLCJvbkNoYW5nZSIsIm5leHRWYWx1ZSIsInRhcmdldCIsImNsYXNzTmFtZSIsInN0eWxlIiwieCIsImRlZmF1bHRQcm9wcyIsIm1vZGUiLCJ0aGVtZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsIkVkaXQwciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBSGlCO0FBSWxCOzs7O3dDQU9tQjtBQUNsQixXQUFLRSxNQUFMLEdBQWMscUJBQUdDLFlBQUgsQ0FBZ0IsS0FBS0MsU0FBckIsRUFBZ0MsS0FBS04sS0FBckMsQ0FBZDtBQUNBLFdBQUtJLE1BQUwsQ0FBWUcsRUFBWixDQUFlLFFBQWYsRUFBeUIsS0FBS0osWUFBOUI7QUFDQSxXQUFLQyxNQUFMLENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLEtBQUtOLGVBQTlCO0FBQ0Q7Ozt5Q0FFb0I7QUFBQSxVQUNYTyxLQURXLEdBQ0QsS0FBS1IsS0FESixDQUNYUSxLQURXOztBQUVuQixVQUFJLEtBQUtKLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlLLFFBQVosT0FBMkJELEtBQTFDLElBQW1EQSxVQUFVLElBQWpFLEVBQXVFO0FBQ3JFLGFBQUtKLE1BQUwsQ0FBWU0sUUFBWixDQUFxQkYsS0FBckI7QUFDRDtBQUNGOzs7b0NBRWVHLEMsRUFBRztBQUFBLG1CQUNZQSxFQUFFQyxHQURkO0FBQUEsVUFDVEMsTUFEUyxVQUNUQSxNQURTO0FBQUEsVUFDREMsU0FEQyxVQUNEQSxTQURDOztBQUVqQixXQUFLZCxLQUFMLENBQVdlLGFBQVgsQ0FBeUJDLFNBQVVGLFlBQVlELE1BQWIsR0FBdUIsR0FBaEMsQ0FBekI7QUFDRDs7O21DQUVjO0FBQUEsbUJBQ2UsS0FBS2IsS0FEcEI7QUFBQSxVQUNMaUIsUUFESyxVQUNMQSxRQURLO0FBQUEsVUFDS1QsS0FETCxVQUNLQSxLQURMOztBQUViLFVBQU1VLFlBQVksS0FBS2QsTUFBTCxDQUFZSyxRQUFaLEVBQWxCO0FBQ0EsVUFBSVMsY0FBY1YsS0FBbEIsRUFBeUI7QUFDdkJTLGlCQUFTLEVBQUNFLFFBQVEsRUFBQ1gsT0FBT1UsU0FBUixFQUFULEVBQVQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFBQSxvQkFDdUMsS0FBS2xCLEtBRDVDO0FBQUEsVUFDQ1EsS0FERCxXQUNDQSxLQUREO0FBQUEsVUFDUVMsUUFEUixXQUNRQSxRQURSO0FBQUEsVUFDa0JHLFNBRGxCLFdBQ2tCQSxTQURsQjtBQUFBLFVBQzZCQyxLQUQ3QixXQUM2QkEsS0FEN0I7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFJakIsTUFBcEI7QUFDRTtBQUNFLHFCQUFXZ0IsU0FEYjtBQUVFLGlCQUFPQyxLQUZUO0FBR0UsZUFBSztBQUFBLG1CQUFLLE9BQUtmLFNBQUwsR0FBaUJnQixDQUF0QjtBQUFBLFdBSFA7QUFJRSxpQkFBT2QsS0FKVDtBQUtFLG9CQUFVUyxRQUxaO0FBREYsT0FERjtBQVVEOzs7OzZCQTNDTU0sWSxHQUFlO0FBQ3BCQyxRQUFNLFVBRGM7QUFFcEJDLFNBQU87QUFGYSxDLFNBNENmQyxXLEdBQWMsUSxTQUNkQyxTLEdBQVk7QUFDakJuQixTQUFPLGtCQUFVb0IsTUFEQTtBQUVqQlgsWUFBVSxrQkFBVVksSUFGSDtBQUdqQmQsaUJBQWUsa0JBQVVjLElBSFI7QUFJakJULGFBQVcsa0JBQVVRLE1BSko7QUFLakJQLFNBQU8sa0JBQVVTO0FBTEEsQzs7a0JBU05DLE0iLCJmaWxlIjoiMC5mZDBlYzM1OWM1OGMyMjM1MDk3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ00gZnJvbSAnY29kZW1pcnJvcidcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNsYXNzIEVkaXQwciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250cm9sTXlTY3JvbGwgPSB0aGlzLmNvbnRyb2xNeVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZGU6ICdtYXJrZG93bicsXG4gICAgdGhlbWU6ICdtb25va2FpJyxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZWRpdG9yID0gQ00uZnJvbVRleHRBcmVhKHRoaXMuZWRpdG9yUmVmLCB0aGlzLnByb3BzKVxuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSlcbiAgICB0aGlzLmVkaXRvci5vbignc2Nyb2xsJywgdGhpcy5jb250cm9sTXlTY3JvbGwpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpICE9PSB2YWx1ZSAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29udHJvbE15U2Nyb2xsKGUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgc2Nyb2xsVG9wfSA9IGUuZG9jXG4gICAgdGhpcy5wcm9wcy5teUJvZHlJc1JlYWR5KHBhcnNlSW50KChzY3JvbGxUb3AgLyBoZWlnaHQpICogMTAwKSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSgpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKClcbiAgICBpZiAobmV4dFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgb25DaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiBuZXh0VmFsdWV9fSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UsIGNsYXNzTmFtZSwgc3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5lZGl0b3J9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWRpdG9yUmVmID0geH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFZGl0MHInXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG15Qm9keUlzUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0MHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vc3JjL0VkaXQwci5qcyJdLCJzb3VyY2VSb290IjoiIn0=