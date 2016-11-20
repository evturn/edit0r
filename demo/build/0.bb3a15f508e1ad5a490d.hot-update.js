webpackHotUpdate(0,{

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(36);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(14);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(37);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    ReactMarkdown: {
        displayName: 'ReactMarkdown'
    }
};

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/ev/src/workbench/react-markdown/src/react-markdown.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/ev/src/workbench/react-markdown/src/react-markdown.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcWorkbenchReactMarkdownNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var React = __webpack_require__(14);
var Parser = __webpack_require__(155).Parser;
var ReactRenderer = __webpack_require__(151);

var parser = new Parser();
var propTypes = React.PropTypes;

var ReactMarkdown = _wrapComponent('ReactMarkdown')(React.createClass({
    displayName: 'ReactMarkdown',

    propTypes: {
        style: propTypes.object,
        className: propTypes.string,
        containerProps: propTypes.object,
        source: propTypes.string.isRequired,
        containerTagName: propTypes.string,
        childBefore: propTypes.object,
        childAfter: propTypes.object,
        sourcePos: propTypes.bool,
        escapeHtml: propTypes.bool,
        skipHtml: propTypes.bool,
        softBreak: propTypes.string,
        allowNode: propTypes.func,
        allowedTypes: propTypes.array,
        disallowedTypes: propTypes.array,
        transformLinkUri: propTypes.func,
        transformImageUri: propTypes.func,
        unwrapDisallowed: propTypes.bool,
        renderers: propTypes.object,
        walker: propTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return {
            containerTagName: 'div'
        };
    },

    render: function render() {
        var containerProps = this.props.containerProps || {};
        var renderer = new ReactRenderer(this.props);
        var ast = parser.parse(this.props.source || '');

        if (this.props.walker) {
            var walker = ast.walker();
            var event;
            while (event = walker.next()) {

                this.props.walker.call(this, event, walker);
            }
        }
        if (this.props.className) {
            containerProps.style = this.props.style;
            containerProps.className = this.props.className;
        }
        return React.createElement.apply(React, [this.props.containerTagName, containerProps, this.props.childBefore].concat(renderer.render(ast).concat([this.props.childAfter])));
    }
}));

ReactMarkdown.types = ReactRenderer.types;
ReactMarkdown.renderers = ReactRenderer.renderers;
ReactMarkdown.uriTransformer = ReactRenderer.uriTransformer;

module.exports = ReactMarkdown;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QtbWFya2Rvd24uanM/Yjc3ZCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJQYXJzZXIiLCJSZWFjdFJlbmRlcmVyIiwicGFyc2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiUmVhY3RNYXJrZG93biIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJzdHlsZSIsIm9iamVjdCIsImNsYXNzTmFtZSIsInN0cmluZyIsImNvbnRhaW5lclByb3BzIiwic291cmNlIiwiaXNSZXF1aXJlZCIsImNvbnRhaW5lclRhZ05hbWUiLCJjaGlsZEJlZm9yZSIsImNoaWxkQWZ0ZXIiLCJzb3VyY2VQb3MiLCJib29sIiwiZXNjYXBlSHRtbCIsInNraXBIdG1sIiwic29mdEJyZWFrIiwiYWxsb3dOb2RlIiwiZnVuYyIsImFsbG93ZWRUeXBlcyIsImFycmF5IiwiZGlzYWxsb3dlZFR5cGVzIiwidHJhbnNmb3JtTGlua1VyaSIsInRyYW5zZm9ybUltYWdlVXJpIiwidW53cmFwRGlzYWxsb3dlZCIsInJlbmRlcmVycyIsIndhbGtlciIsImdldERlZmF1bHRQcm9wcyIsInJlbmRlciIsInByb3BzIiwicmVuZGVyZXIiLCJhc3QiLCJwYXJzZSIsImV2ZW50IiwibmV4dCIsImNhbGwiLCJjcmVhdGVFbGVtZW50IiwiYXBwbHkiLCJjb25jYXQiLCJ0eXBlcyIsInVyaVRyYW5zZm9ybWVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLFNBQVMsbUJBQUFELENBQVEsR0FBUixFQUFzQkMsTUFBbkM7QUFDQSxJQUFJQyxnQkFBZ0IsbUJBQUFGLENBQVEsR0FBUixDQUFwQjs7QUFFQSxJQUFJRyxTQUFTLElBQUlGLE1BQUosRUFBYjtBQUNBLElBQUlHLFlBQVlMLE1BQU1NLFNBQXRCOztBQUVBLElBQUlDLGdEQUFnQlAsTUFBTVEsV0FBTixDQUFrQjtBQUNsQ0MsaUJBQWEsZUFEcUI7O0FBR2xDSixlQUFXO0FBQ1RLLGVBQU9MLFVBQVVNLE1BRFI7QUFFVEMsbUJBQVdQLFVBQVVRLE1BRlo7QUFHVEMsd0JBQWdCVCxVQUFVTSxNQUhqQjtBQUlUSSxnQkFBUVYsVUFBVVEsTUFBVixDQUFpQkcsVUFKaEI7QUFLVEMsMEJBQWtCWixVQUFVUSxNQUxuQjtBQU1USyxxQkFBYWIsVUFBVU0sTUFOZDtBQU9UUSxvQkFBWWQsVUFBVU0sTUFQYjtBQVFUUyxtQkFBV2YsVUFBVWdCLElBUlo7QUFTVEMsb0JBQVlqQixVQUFVZ0IsSUFUYjtBQVVURSxrQkFBVWxCLFVBQVVnQixJQVZYO0FBV1RHLG1CQUFXbkIsVUFBVVEsTUFYWjtBQVlUWSxtQkFBV3BCLFVBQVVxQixJQVpaO0FBYVRDLHNCQUFjdEIsVUFBVXVCLEtBYmY7QUFjVEMseUJBQWlCeEIsVUFBVXVCLEtBZGxCO0FBZVRFLDBCQUFrQnpCLFVBQVVxQixJQWZuQjtBQWdCVEssMkJBQW1CMUIsVUFBVXFCLElBaEJwQjtBQWlCVE0sMEJBQWtCM0IsVUFBVWdCLElBakJuQjtBQWtCVFksbUJBQVc1QixVQUFVTSxNQWxCWjtBQW1CVHVCLGdCQUFRN0IsVUFBVXFCO0FBbkJULEtBSHVCOztBQXlCbENTLHFCQUFpQiwyQkFBVztBQUN4QixlQUFPO0FBQ0hsQiw4QkFBa0I7QUFEZixTQUFQO0FBR0gsS0E3QmlDOztBQWdDbENtQixZQUFRLGtCQUFXO0FBQ2YsWUFBSXRCLGlCQUFpQixLQUFLdUIsS0FBTCxDQUFXdkIsY0FBWCxJQUE2QixFQUFsRDtBQUNBLFlBQUl3QixXQUFXLElBQUluQyxhQUFKLENBQWtCLEtBQUtrQyxLQUF2QixDQUFmO0FBQ0EsWUFBSUUsTUFBTW5DLE9BQU9vQyxLQUFQLENBQWEsS0FBS0gsS0FBTCxDQUFXdEIsTUFBWCxJQUFxQixFQUFsQyxDQUFWOztBQUVBLFlBQUksS0FBS3NCLEtBQUwsQ0FBV0gsTUFBZixFQUF1QjtBQUNuQixnQkFBSUEsU0FBU0ssSUFBSUwsTUFBSixFQUFiO0FBQ0EsZ0JBQUlPLEtBQUo7QUFDQSxtQkFBUUEsUUFBUVAsT0FBT1EsSUFBUCxFQUFoQixFQUFnQzs7QUFFOUIscUJBQUtMLEtBQUwsQ0FBV0gsTUFBWCxDQUFrQlMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJGLEtBQTdCLEVBQW9DUCxNQUFwQztBQUNEO0FBQ0o7QUFDRCxZQUFJLEtBQUtHLEtBQUwsQ0FBV3pCLFNBQWYsRUFBMEI7QUFDdEJFLDJCQUFlSixLQUFmLEdBQXVCLEtBQUsyQixLQUFMLENBQVczQixLQUFsQztBQUNBSSwyQkFBZUYsU0FBZixHQUEyQixLQUFLeUIsS0FBTCxDQUFXekIsU0FBdEM7QUFDSDtBQUNELGVBQU9aLE1BQU00QyxhQUFOLENBQ0pDLEtBREksQ0FDRTdDLEtBREYsRUFDUyxDQUNaLEtBQUtxQyxLQUFMLENBQVdwQixnQkFEQyxFQUVaSCxjQUZZLEVBR1osS0FBS3VCLEtBQUwsQ0FBV25CLFdBSEMsRUFLYjRCLE1BTGEsQ0FLTlIsU0FBU0YsTUFBVCxDQUFnQkcsR0FBaEIsRUFDTE8sTUFESyxDQUNFLENBQUMsS0FBS1QsS0FBTCxDQUFXbEIsVUFBWixDQURGLENBTE0sQ0FEVCxDQUFQO0FBU0g7QUExRGlDLENBQWxCLENBQWhCLENBQUo7O0FBNkRBWixjQUFjd0MsS0FBZCxHQUFzQjVDLGNBQWM0QyxLQUFwQztBQUNBeEMsY0FBYzBCLFNBQWQsR0FBMEI5QixjQUFjOEIsU0FBeEM7QUFDQTFCLGNBQWN5QyxjQUFkLEdBQStCN0MsY0FBYzZDLGNBQTdDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCM0MsYUFBakIsQyIsImZpbGUiOiIwLmJiM2ExNWY1MDhlMWFkNWE0OTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFyc2VyID0gcmVxdWlyZSgnY29tbW9ubWFyaycpLlBhcnNlcjtcbnZhciBSZWFjdFJlbmRlcmVyID0gcmVxdWlyZSgnY29tbW9ubWFyay1yZWFjdC1yZW5kZXJlcicpO1xuXG52YXIgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xudmFyIHByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIFJlYWN0TWFya2Rvd24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdSZWFjdE1hcmtkb3duJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgc3R5bGU6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjb250YWluZXJQcm9wczogcHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNvdXJjZTogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY29udGFpbmVyVGFnTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNoaWxkQmVmb3JlOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgICAgY2hpbGRBZnRlcjogcHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNvdXJjZVBvczogcHJvcFR5cGVzLmJvb2wsXG4gICAgICBlc2NhcGVIdG1sOiBwcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNraXBIdG1sOiBwcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNvZnRCcmVhazogcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGFsbG93Tm9kZTogcHJvcFR5cGVzLmZ1bmMsXG4gICAgICBhbGxvd2VkVHlwZXM6IHByb3BUeXBlcy5hcnJheSxcbiAgICAgIGRpc2FsbG93ZWRUeXBlczogcHJvcFR5cGVzLmFycmF5LFxuICAgICAgdHJhbnNmb3JtTGlua1VyaTogcHJvcFR5cGVzLmZ1bmMsXG4gICAgICB0cmFuc2Zvcm1JbWFnZVVyaTogcHJvcFR5cGVzLmZ1bmMsXG4gICAgICB1bndyYXBEaXNhbGxvd2VkOiBwcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbmRlcmVyczogcHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHdhbGtlcjogcHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRhaW5lclRhZ05hbWU6ICdkaXYnXG4gICAgICAgIH07XG4gICAgfSxcblxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lclByb3BzID0gdGhpcy5wcm9wcy5jb250YWluZXJQcm9wcyB8fCB7fTtcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFJlYWN0UmVuZGVyZXIodGhpcy5wcm9wcyk7XG4gICAgICAgIHZhciBhc3QgPSBwYXJzZXIucGFyc2UodGhpcy5wcm9wcy5zb3VyY2UgfHwgJycpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLndhbGtlcikge1xuICAgICAgICAgICAgdmFyIHdhbGtlciA9IGFzdC53YWxrZXIoKTtcbiAgICAgICAgICAgIHZhciBldmVudDtcbiAgICAgICAgICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMud2Fsa2VyLmNhbGwodGhpcywgZXZlbnQsIHdhbGtlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjb250YWluZXJQcm9wcy5zdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgICAgIGNvbnRhaW5lclByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50XG4gICAgICAgICAgLmFwcGx5KFJlYWN0LCBbXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRhaW5lclRhZ05hbWUsXG4gICAgICAgICAgICBjb250YWluZXJQcm9wcyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRCZWZvcmVcbiAgICAgICAgICBdXG4gICAgICAgICAgLmNvbmNhdChyZW5kZXJlci5yZW5kZXIoYXN0KVxuICAgICAgICAgICAgLmNvbmNhdChbdGhpcy5wcm9wcy5jaGlsZEFmdGVyXSlcbiAgICAgICAgICApKVxuICAgIH1cbn0pO1xuXG5SZWFjdE1hcmtkb3duLnR5cGVzID0gUmVhY3RSZW5kZXJlci50eXBlcztcblJlYWN0TWFya2Rvd24ucmVuZGVyZXJzID0gUmVhY3RSZW5kZXJlci5yZW5kZXJlcnM7XG5SZWFjdE1hcmtkb3duLnVyaVRyYW5zZm9ybWVyID0gUmVhY3RSZW5kZXJlci51cmlUcmFuc2Zvcm1lcjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdE1hcmtkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlYWN0LW1hcmtkb3duLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==