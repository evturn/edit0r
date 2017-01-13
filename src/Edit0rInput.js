import React, { Component, PropTypes } from 'react'
import CM from 'codemirror'
import css from './style.css'

class Edit0rInput extends Component {
  static defaultProps = {
    mode: 'markdown',
    theme: 'monokai',
  }

  componentDidMount() {
    this.editor = CM.fromTextArea(this.editorRef, this.props)
    this.editor.on('change', this.handleChange)
    this.editor.on('scroll', this.updatePosition)
  }

  componentDidUpdate() {
    const { value } = this.props
    if (this.editor && this.editor.getValue() !== value && value !== null) {
      this.editor.setValue(value)
    }
  }

  updatePosition = e => {
    const { height, scrollTop} = e.doc
    this.props.myBodyIsReady(parseInt((scrollTop / height) * 100))
  }

  handleChange = _ => {
    const { onChange, value } = this.props
    const nextValue = this.editor.getValue()
    if (nextValue !== value) {
      onChange({target: {value: nextValue}})
    }
  }

  render() {
    const { value, onChange, className, style } = this.props
    return (
      <div className={className}>
        <textarea
          className={css.editor}
          style={style}
          ref={x => this.editorRef = x}
          value={value}
          onChange={onChange} />
      </div>
    )
  }
}

Edit0rInput.displayName = 'Edit0rInput'
Edit0rInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  myBodyIsReady: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Edit0rInput
