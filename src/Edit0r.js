import React, { Component } from 'react'
import Edit0rInput from './Edit0rInput'
import Edit0rOutput from './Edit0rOutput'
import CodeBlock from './CodeBlock'
import source from './placeholder-markdown'
import css from './style.css'

const renderers = Object.assign({}, Edit0rOutput.renderers, { CodeBlock })

class Edit0r extends Component{
  static displayName = 'Edit0r'

  state = {
    source,
    mode: 'raw',
    style: {marginTop: 0}
  }

  onChange ({ target }) => {
    this.setState({source: target.value})
  }

  updateMargin = x => {
    this.setState({style: {marginTop: `${x > 0 ? -Math.abs(x) : 0}%`}})
  }

  render() {
    const { source, mode, style } = this.state
    return (
      <div className={css.root}>
        <Edit0rInput
          className={css.input}
          value={source}
          myBodyIsReady={this.updateMargin}
          onChange={this.onChange} />
        <Edit0rOutput
          className={css.output}
          style={style}
          source={source}
          renderers=renderers}
          skipHtml={false}
          escapeHtml={false} />
      </div>
    )
  }
}

export default Edit0r