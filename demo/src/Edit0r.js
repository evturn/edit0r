import React, { Component, PropTypes } from 'react'

const CodeMirror = window.CodeMirrorEditor

class Edit0r extends Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
  }

  static displayName = 'Edit0r'

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }

  onInputChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const { myBodyIsReady, value } = this.props
    return (
      <form
        style={{height: `100%`}}
        className='editor pure-form'>
        <CodeMirror
          myBodyIsReady={myBodyIsReady}
          mode='markdown'
          theme='monokai'
          value={value}
          onChange={this.onInputChange} />
      </form>
    )
  }
}

export default Edit0r
