import React, { Component, PropTypes } from 'react'
import { Parser } from 'commonmark'
import ReactRenderer from 'commonmark-react-renderer'

const parser = new Parser()

class Edit0rOutput extends Component {
    static propTypes = {
      style: PropTypes.object,
      className: PropTypes.string,
      containerProps: PropTypes.object,
      source: PropTypes.string.isRequired,
      containerTagName: PropTypes.string,
      childBefore: PropTypes.object,
      childAfter: PropTypes.object,
      sourcePos: PropTypes.bool,
      escapeHtml: PropTypes.bool,
      skipHtml: PropTypes.bool,
      softBreak: PropTypes.string,
      allowNode: PropTypes.func,
      allowedTypes: PropTypes.array,
      disallowedTypes: PropTypes.array,
      transformLinkUri: PropTypes.func,
      transformImageUri: PropTypes.func,
      unwrapDisallowed: PropTypes.bool,
      renderers: PropTypes.object,
      walker: PropTypes.func
    }

    render() {
      const containerProps = this.props.containerProps || {}
      const renderer = new ReactRenderer(this.props)
      const ast = parser.parse(this.props.source || '')
      if (this.props.walker) {
        const walker = ast.walker()
        let event
        while ((event = walker.next())) {
          this.props.walker.call(this, event, walker)
        }
      }
      if (this.props.className) {
        containerProps.style = this.props.style
        containerProps.className = this.props.className
      }
      const args = [
        this.props.containerTagName,
        containerProps,
        this.props.childBefore
      ]
      return React.createElement.apply(
        React,
        args.concat(renderer.render(ast).concat([this.props.childAfter]))
      )
    }

    static defaultProps = {containerTagName: 'div'}
    static displayName = 'Edit0rOutput'
}

Edit0rOutput.types = ReactRenderer.types
Edit0rOutput.renderers = ReactRenderer.renderers
Edit0rOutput.uriTransformer = ReactRenderer.uriTransformer

export default Edit0rOutput
