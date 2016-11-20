import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import hljs from 'highlightjs'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'highlightjs/styles/monokai-sublime.css'

import css from './style.css'

const CodeBlock = React.createClass({
  displayName: 'CodeBlock',
  mixins: [PureRenderMixin],

  propTypes: {
    literal: PropTypes.string,
    language: PropTypes.string
  },

  componentDidMount() {
    this.highlightCode()
  },

  componentDidUpdate() {
    this.highlightCode()
  },

  highlightCode() {
    hljs.highlightBlock(this.code)
  },

  render() {
    return (
      <pre>
        <code className='js' ref={x => this.code = x}>
          {this.props.literal}
        </code>
      </pre>
    )
  }
})

module.exports = React.createFactory(CodeBlock)
