webpackHotUpdate(0,{

/***/ 149:
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
  filename: '/Users/ev/src/workbench/react-markdown/src/Edit0rOutput.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/workbench/react-markdown/src/Edit0rOutput.js',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRWRpdDByT3V0cHV0LmpzPzdjYjAiXSwibmFtZXMiOlsicGFyc2VyIiwiY29udGFpbmVyUHJvcHMiLCJwcm9wcyIsInJlbmRlcmVyIiwiYXN0IiwicGFyc2UiLCJzb3VyY2UiLCJ3YWxrZXIiLCJldmVudCIsIm5leHQiLCJjYWxsIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhcmdzIiwiY29udGFpbmVyVGFnTmFtZSIsImNoaWxkQmVmb3JlIiwiY3JlYXRlRWxlbWVudCIsImFwcGx5IiwiY29uY2F0IiwicmVuZGVyIiwiY2hpbGRBZnRlciIsInByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzb3VyY2VQb3MiLCJib29sIiwiZXNjYXBlSHRtbCIsInNraXBIdG1sIiwic29mdEJyZWFrIiwiYWxsb3dOb2RlIiwiZnVuYyIsImFsbG93ZWRUeXBlcyIsImFycmF5IiwiZGlzYWxsb3dlZFR5cGVzIiwidHJhbnNmb3JtTGlua1VyaSIsInRyYW5zZm9ybUltYWdlVXJpIiwidW53cmFwRGlzYWxsb3dlZCIsInJlbmRlcmVycyIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIiwiRWRpdDByT3V0cHV0IiwidHlwZXMiLCJ1cmlUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLHdCQUFmOzs7Ozs7Ozs7Ozs7OzZCQXlCYTtBQUNQLFVBQU1DLGlCQUFpQixLQUFLQyxLQUFMLENBQVdELGNBQVgsSUFBNkIsRUFBcEQ7QUFDQSxVQUFNRSxXQUFXLHNDQUFrQixLQUFLRCxLQUF2QixDQUFqQjtBQUNBLFVBQU1FLE1BQU1KLE9BQU9LLEtBQVAsQ0FBYSxLQUFLSCxLQUFMLENBQVdJLE1BQVgsSUFBcUIsRUFBbEMsQ0FBWjtBQUNBLFVBQUksS0FBS0osS0FBTCxDQUFXSyxNQUFmLEVBQXVCO0FBQ3JCLFlBQU1BLFNBQVNILElBQUlHLE1BQUosRUFBZjtBQUNBLFlBQUlDLGNBQUo7QUFDQSxlQUFRQSxRQUFRRCxPQUFPRSxJQUFQLEVBQWhCLEVBQWdDO0FBQzlCLGVBQUtQLEtBQUwsQ0FBV0ssTUFBWCxDQUFrQkcsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJGLEtBQTdCLEVBQW9DRCxNQUFwQztBQUNEO0FBQ0Y7QUFDRCxVQUFJLEtBQUtMLEtBQUwsQ0FBV1MsU0FBZixFQUEwQjtBQUN4QlYsdUJBQWVXLEtBQWYsR0FBdUIsS0FBS1YsS0FBTCxDQUFXVSxLQUFsQztBQUNBWCx1QkFBZVUsU0FBZixHQUEyQixLQUFLVCxLQUFMLENBQVdTLFNBQXRDO0FBQ0Q7QUFDRCxVQUFNRSxPQUFPLENBQ1gsS0FBS1gsS0FBTCxDQUFXWSxnQkFEQSxFQUVYYixjQUZXLEVBR1gsS0FBS0MsS0FBTCxDQUFXYSxXQUhBLENBQWI7QUFLQSxhQUFPLGdCQUFNQyxhQUFOLENBQW9CQyxLQUFwQixrQkFFTEosS0FBS0ssTUFBTCxDQUFZZixTQUFTZ0IsTUFBVCxDQUFnQmYsR0FBaEIsRUFBcUJjLE1BQXJCLENBQTRCLENBQUMsS0FBS2hCLEtBQUwsQ0FBV2tCLFVBQVosQ0FBNUIsQ0FBWixDQUZLLENBQVA7QUFJRDs7Ozs2QkE5Q01DLFMsR0FBWTtBQUNqQlQsU0FBTyxrQkFBVVUsTUFEQTtBQUVqQlgsYUFBVyxrQkFBVVksTUFGSjtBQUdqQnRCLGtCQUFnQixrQkFBVXFCLE1BSFQ7QUFJakJoQixVQUFRLGtCQUFVaUIsTUFBVixDQUFpQkMsVUFKUjtBQUtqQlYsb0JBQWtCLGtCQUFVUyxNQUxYO0FBTWpCUixlQUFhLGtCQUFVTyxNQU5OO0FBT2pCRixjQUFZLGtCQUFVRSxNQVBMO0FBUWpCRyxhQUFXLGtCQUFVQyxJQVJKO0FBU2pCQyxjQUFZLGtCQUFVRCxJQVRMO0FBVWpCRSxZQUFVLGtCQUFVRixJQVZIO0FBV2pCRyxhQUFXLGtCQUFVTixNQVhKO0FBWWpCTyxhQUFXLGtCQUFVQyxJQVpKO0FBYWpCQyxnQkFBYyxrQkFBVUMsS0FiUDtBQWNqQkMsbUJBQWlCLGtCQUFVRCxLQWRWO0FBZWpCRSxvQkFBa0Isa0JBQVVKLElBZlg7QUFnQmpCSyxxQkFBbUIsa0JBQVVMLElBaEJaO0FBaUJqQk0sb0JBQWtCLGtCQUFVWCxJQWpCWDtBQWtCakJZLGFBQVcsa0JBQVVoQixNQWxCSjtBQW1CakJmLFVBQVEsa0JBQVV3QjtBQW5CRCxDLFNBZ0RaUSxZLEdBQWUsRUFBQ3pCLGtCQUFrQixLQUFuQixFLFNBQ2YwQixXLEdBQWMsYzs7QUFHekJDLGFBQWFDLEtBQWIsR0FBcUIsa0NBQWNBLEtBQW5DO0FBQ0FELGFBQWFILFNBQWIsR0FBeUIsa0NBQWNBLFNBQXZDO0FBQ0FHLGFBQWFFLGNBQWIsR0FBOEIsa0NBQWNBLGNBQTVDOztrQkFFZUYsWSIsImZpbGUiOiIwLmM3YjJhNmU1ZWZkZGVjZmRkZjM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2NvbW1vbm1hcmsnXG5pbXBvcnQgUmVhY3RSZW5kZXJlciBmcm9tICdjb21tb25tYXJrLXJlYWN0LXJlbmRlcmVyJ1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKClcblxuY2xhc3MgRWRpdDByT3V0cHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY29udGFpbmVyVGFnTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNoaWxkQmVmb3JlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgY2hpbGRBZnRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBlc2NhcGVIdG1sOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNraXBIdG1sOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNvZnRCcmVhazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGFsbG93Tm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBhbGxvd2VkVHlwZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgIGRpc2FsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgdHJhbnNmb3JtTGlua1VyaTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB0cmFuc2Zvcm1JbWFnZVVyaTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB1bndyYXBEaXNhbGxvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbmRlcmVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHdhbGtlcjogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjb250YWluZXJQcm9wcyA9IHRoaXMucHJvcHMuY29udGFpbmVyUHJvcHMgfHwge31cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlYWN0UmVuZGVyZXIodGhpcy5wcm9wcylcbiAgICAgIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZSh0aGlzLnByb3BzLnNvdXJjZSB8fCAnJylcbiAgICAgIGlmICh0aGlzLnByb3BzLndhbGtlcikge1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBhc3Qud2Fsa2VyKClcbiAgICAgICAgbGV0IGV2ZW50XG4gICAgICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMud2Fsa2VyLmNhbGwodGhpcywgZXZlbnQsIHdhbGtlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lclByb3BzLnN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgICBjb250YWluZXJQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgfVxuICAgICAgY29uc3QgYXJncyA9IFtcbiAgICAgICAgdGhpcy5wcm9wcy5jb250YWluZXJUYWdOYW1lLFxuICAgICAgICBjb250YWluZXJQcm9wcyxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZEJlZm9yZVxuICAgICAgXVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkoXG4gICAgICAgIFJlYWN0LFxuICAgICAgICBhcmdzLmNvbmNhdChyZW5kZXJlci5yZW5kZXIoYXN0KS5jb25jYXQoW3RoaXMucHJvcHMuY2hpbGRBZnRlcl0pKVxuICAgICAgKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7Y29udGFpbmVyVGFnTmFtZTogJ2Rpdid9XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0VkaXQwck91dHB1dCdcbn1cblxuRWRpdDByT3V0cHV0LnR5cGVzID0gUmVhY3RSZW5kZXJlci50eXBlc1xuRWRpdDByT3V0cHV0LnJlbmRlcmVycyA9IFJlYWN0UmVuZGVyZXIucmVuZGVyZXJzXG5FZGl0MHJPdXRwdXQudXJpVHJhbnNmb3JtZXIgPSBSZWFjdFJlbmRlcmVyLnVyaVRyYW5zZm9ybWVyXG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQwck91dHB1dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VkaXQwck91dHB1dC5qcyJdLCJzb3VyY2VSb290IjoiIn0=