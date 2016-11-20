webpackHotUpdate(0,{

/***/ 146:
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

var _Edit0rInput = __webpack_require__(147);

var _Edit0rInput2 = _interopRequireDefault(_Edit0rInput);

var _Edit0rOutput = __webpack_require__(400);

var _Edit0rOutput2 = _interopRequireDefault(_Edit0rOutput);

var _CodeBlock = __webpack_require__(145);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _placeholderMarkdown = __webpack_require__(148);

var _placeholderMarkdown2 = _interopRequireDefault(_placeholderMarkdown);

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

    _this.state = {
      source: _placeholderMarkdown2.default,
      mode: 'raw',
      style: {
        marginTop: 0
      }
    };
    _this.renderers = Object.assign({}, _Edit0rOutput2.default.renderers, { CodeBlock: _CodeBlock2.default });

    _this.onMarkdownChange = _this.onMarkdownChange.bind(_this);
    _this.myBodyIsReady = _this.myBodyIsReady.bind(_this);
    return _this;
  }

  _createClass(Edit0r, [{
    key: 'onMarkdownChange',
    value: function onMarkdownChange(e) {
      this.setState({ source: e.target.value });
    }
  }, {
    key: 'myBodyIsReady',
    value: function myBodyIsReady(x) {
      this.setState({ style: { marginTop: (x > 0 ? -Math.abs(x) : 0) + '%' } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          source = _state.source,
          mode = _state.mode,
          style = _state.style;

      return _react3.default.createElement(
        'div',
        { className: _style2.default.root },
        _react3.default.createElement(_Edit0rInput2.default, {
          className: _style2.default.input,
          value: source,
          myBodyIsReady: this.myBodyIsReady,
          onChange: this.onMarkdownChange }),
        _react3.default.createElement(_Edit0rOutput2.default, {
          className: _style2.default.output,
          style: style,
          source: source,
          renderers: this.renderers,
          skipHtml: false,
          escapeHtml: false })
      );
    }
  }]);

  return Edit0r;
}(_react2.Component), _class.displayName = 'Edit0r', _temp));

exports.default = Edit0r;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ },

/***/ 400:
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

var _commonmark = __webpack_require__(155);

var _commonmarkReactRenderer = __webpack_require__(151);

var _commonmarkReactRenderer2 = _interopRequireDefault(_commonmarkReactRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Edit0rOutput: {
    displayName: 'Edit0rOutput'
  }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0rOutput.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/demo/src/Edit0rOutput.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var parser = new _commonmark.Parser();

var Edit0rOutput = _wrapComponent('Edit0rOutput')((_temp = _class = function (_Component) {
  _inherits(Edit0rOutput, _Component);

  function Edit0rOutput() {
    _classCallCheck(this, Edit0rOutput);

    return _possibleConstructorReturn(this, (Edit0rOutput.__proto__ || Object.getPrototypeOf(Edit0rOutput)).apply(this, arguments));
  }

  _createClass(Edit0rOutput, [{
    key: 'render',
    value: function render() {
      var containerProps = this.props.containerProps || {};
      var renderer = new _commonmarkReactRenderer2.default(this.props);
      var ast = parser.parse(this.props.source || '');
      if (this.props.walker) {
        var walker = ast.walker();
        var event = void 0;
        while (event = walker.next()) {
          this.props.walker.call(this, event, walker);
        }
      }
      if (this.props.className) {
        containerProps.style = this.props.style;
        containerProps.className = this.props.className;
      }
      var args = [this.props.containerTagName, containerProps, this.props.childBefore];
      return _react3.default.createElement.apply(_react3.default, args.concat(renderer.render(ast).concat([this.props.childAfter])));
    }
  }]);

  return Edit0rOutput;
}(_react2.Component), _class.propTypes = {
  style: _react2.PropTypes.object,
  className: _react2.PropTypes.string,
  containerProps: _react2.PropTypes.object,
  source: _react2.PropTypes.string.isRequired,
  containerTagName: _react2.PropTypes.string,
  childBefore: _react2.PropTypes.object,
  childAfter: _react2.PropTypes.object,
  sourcePos: _react2.PropTypes.bool,
  escapeHtml: _react2.PropTypes.bool,
  skipHtml: _react2.PropTypes.bool,
  softBreak: _react2.PropTypes.string,
  allowNode: _react2.PropTypes.func,
  allowedTypes: _react2.PropTypes.array,
  disallowedTypes: _react2.PropTypes.array,
  transformLinkUri: _react2.PropTypes.func,
  transformImageUri: _react2.PropTypes.func,
  unwrapDisallowed: _react2.PropTypes.bool,
  renderers: _react2.PropTypes.object,
  walker: _react2.PropTypes.func
}, _class.defaultProps = { containerTagName: 'div' }, _class.displayName = 'Edit0rOutput', _temp));

Edit0rOutput.types = _commonmarkReactRenderer2.default.types;
Edit0rOutput.renderers = _commonmarkReactRenderer2.default.renderers;
Edit0rOutput.uriTransformer = _commonmarkReactRenderer2.default.uriTransformer;

exports.default = Edit0rOutput;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHIuanM/MzRjZSIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9FZGl0MHJPdXRwdXQuanM/NGYxYiJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwic291cmNlIiwibW9kZSIsInN0eWxlIiwibWFyZ2luVG9wIiwicmVuZGVyZXJzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29kZUJsb2NrIiwib25NYXJrZG93bkNoYW5nZSIsImJpbmQiLCJteUJvZHlJc1JlYWR5IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ4IiwiTWF0aCIsImFicyIsInJvb3QiLCJpbnB1dCIsIm91dHB1dCIsImRpc3BsYXlOYW1lIiwiRWRpdDByIiwicGFyc2VyIiwiY29udGFpbmVyUHJvcHMiLCJyZW5kZXJlciIsImFzdCIsInBhcnNlIiwid2Fsa2VyIiwiZXZlbnQiLCJuZXh0IiwiY2FsbCIsImNsYXNzTmFtZSIsImFyZ3MiLCJjb250YWluZXJUYWdOYW1lIiwiY2hpbGRCZWZvcmUiLCJjcmVhdGVFbGVtZW50IiwiYXBwbHkiLCJjb25jYXQiLCJyZW5kZXIiLCJjaGlsZEFmdGVyIiwicHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNvdXJjZVBvcyIsImJvb2wiLCJlc2NhcGVIdG1sIiwic2tpcEh0bWwiLCJzb2Z0QnJlYWsiLCJhbGxvd05vZGUiLCJmdW5jIiwiYWxsb3dlZFR5cGVzIiwiYXJyYXkiLCJkaXNhbGxvd2VkVHlwZXMiLCJ0cmFuc2Zvcm1MaW5rVXJpIiwidHJhbnNmb3JtSW1hZ2VVcmkiLCJ1bndyYXBEaXNhbGxvd2VkIiwiZGVmYXVsdFByb3BzIiwiRWRpdDByT3V0cHV0IiwidHlwZXMiLCJ1cmlUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7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cnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdDBySW5wdXQgZnJvbSAnLi9FZGl0MHJJbnB1dCdcbmltcG9ydCBFZGl0MHJPdXRwdXQgZnJvbSAnLi9FZGl0MHJPdXRwdXQnXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vQ29kZUJsb2NrJ1xuaW1wb3J0IHNvdXJjZSBmcm9tICcuL3BsYWNlaG9sZGVyLW1hcmtkb3duJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY2xhc3MgRWRpdDByIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25NYXJrZG93bkNoYW5nZSA9IHRoaXMub25NYXJrZG93bkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5teUJvZHlJc1JlYWR5ID0gdGhpcy5teUJvZHlJc1JlYWR5LmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFZGl0MHInXG5cbiAgc3RhdGUgPSB7XG4gICAgc291cmNlLFxuICAgIG1vZGU6ICdyYXcnLFxuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6IDBcbiAgICB9XG4gIH1cbiAgcmVuZGVyZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgRWRpdDByT3V0cHV0LnJlbmRlcmVycywgeyBDb2RlQmxvY2sgfSlcblxuXG4gIG9uTWFya2Rvd25DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NvdXJjZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgbXlCb2R5SXNSZWFkeSh4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHttYXJnaW5Ub3A6IGAke3ggPiAwID8gLU1hdGguYWJzKHgpIDogMH0lYH19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc291cmNlLCBtb2RlLCBzdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJvb3R9PlxuICAgICAgICA8RWRpdDBySW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICB2YWx1ZT17c291cmNlfVxuICAgICAgICAgIG15Qm9keUlzUmVhZHk9e3RoaXMubXlCb2R5SXNSZWFkeX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1hcmtkb3duQ2hhbmdlfSAvPlxuICAgICAgICA8RWRpdDByT3V0cHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3Mub3V0cHV0fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBzb3VyY2U9e3NvdXJjZX1cbiAgICAgICAgICByZW5kZXJlcnM9e3RoaXMucmVuZGVyZXJzfVxuICAgICAgICAgIHNraXBIdG1sPXtmYWxzZX1cbiAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0MHJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3NyYy9FZGl0MHIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2NvbW1vbm1hcmsnXG5pbXBvcnQgUmVhY3RSZW5kZXJlciBmcm9tICdjb21tb25tYXJrLXJlYWN0LXJlbmRlcmVyJ1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKClcblxuY2xhc3MgRWRpdDByT3V0cHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY29udGFpbmVyVGFnTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNoaWxkQmVmb3JlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgY2hpbGRBZnRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBlc2NhcGVIdG1sOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNraXBIdG1sOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNvZnRCcmVhazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGFsbG93Tm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBhbGxvd2VkVHlwZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgIGRpc2FsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgdHJhbnNmb3JtTGlua1VyaTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB0cmFuc2Zvcm1JbWFnZVVyaTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB1bndyYXBEaXNhbGxvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbmRlcmVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHdhbGtlcjogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjb250YWluZXJQcm9wcyA9IHRoaXMucHJvcHMuY29udGFpbmVyUHJvcHMgfHwge31cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlYWN0UmVuZGVyZXIodGhpcy5wcm9wcylcbiAgICAgIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZSh0aGlzLnByb3BzLnNvdXJjZSB8fCAnJylcbiAgICAgIGlmICh0aGlzLnByb3BzLndhbGtlcikge1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBhc3Qud2Fsa2VyKClcbiAgICAgICAgbGV0IGV2ZW50XG4gICAgICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMud2Fsa2VyLmNhbGwodGhpcywgZXZlbnQsIHdhbGtlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lclByb3BzLnN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgICBjb250YWluZXJQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgfVxuICAgICAgY29uc3QgYXJncyA9IFtcbiAgICAgICAgdGhpcy5wcm9wcy5jb250YWluZXJUYWdOYW1lLFxuICAgICAgICBjb250YWluZXJQcm9wcyxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZEJlZm9yZVxuICAgICAgXVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkoXG4gICAgICAgIFJlYWN0LFxuICAgICAgICBhcmdzLmNvbmNhdChyZW5kZXJlci5yZW5kZXIoYXN0KS5jb25jYXQoW3RoaXMucHJvcHMuY2hpbGRBZnRlcl0pKVxuICAgICAgKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7Y29udGFpbmVyVGFnTmFtZTogJ2Rpdid9XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0VkaXQwck91dHB1dCdcbn1cblxuRWRpdDByT3V0cHV0LnR5cGVzID0gUmVhY3RSZW5kZXJlci50eXBlc1xuRWRpdDByT3V0cHV0LnJlbmRlcmVycyA9IFJlYWN0UmVuZGVyZXIucmVuZGVyZXJzXG5FZGl0MHJPdXRwdXQudXJpVHJhbnNmb3JtZXIgPSBSZWFjdFJlbmRlcmVyLnVyaVRyYW5zZm9ybWVyXG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQwck91dHB1dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zcmMvRWRpdDByT3V0cHV0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==