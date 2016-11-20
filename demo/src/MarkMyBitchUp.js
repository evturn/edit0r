import React, { Component } from 'react'
import { render } from 'react-dom'
import Edit0r from './Edit0r'
import CodeBlock from './code-block'
import Markdown from '../../'
import source from './placeholder-markdown'

class MarkMyBitchUp extends Component{
  constructor(props) {
    super(props)
    this.onMarkdownChange = this.onMarkdownChange.bind(this)
    this.onControlsChange = this.onControlsChange.bind(this)
    this.myBodyIsReady = this.myBodyIsReady.bind(this)
  }

  static displayName = 'MarkMyBitchUp'

  state = {
    source,
    mode: 'raw',
    style: {
      marginTop: 0
    }
  }

  renderers = Object.assign({}, Markdown.renderers, { CodeBlock })

  onMarkdownChange(source) {
    this.setState({ source })
  }

  onControlsChange(mode) {
    this.setState({ mode })
  }

  myBodyIsReady(x) {
    this.setState({style: {marginTop: `${x > 0 ? -Math.abs(x) : 0}%`}})
  }

  render() {
    const { source, mode, style } = this.state
    return (
      <div className='demo'>
        <div className='editor-pane'>
          <Edit0r
            value={source}
            myBodyIsReady={this.myBodyIsReady}
            onChange={this.onMarkdownChange} />
        </div>
        <div className='result-pane'>
          <Markdown
            className='result'
            style={style}
            source={source}
            renderers={this.renderers}
            skipHtml={mode === 'skip'}
            escapeHtml={mode === 'escape'} />
        </div>
      </div>
    )
  }
}

render(<MarkMyBitchUp />, document.getElementById('main'))