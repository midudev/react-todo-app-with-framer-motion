import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const TodoTextInput = ({
  todoText,
  placeholder,
  editing,
  newTodo,
  onSave
}) => {
  const [text, setText] = useState(todoText || '')

  const handleSubmit = e => {
    const inputText = e.target.value.trim()
    if (e.which === 13) {
      onSave(inputText)
      if (newTodo) {
        setText('')
      }
    }
  }

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleBlur = e => {
    if (!newTodo) {
      onSave(e.target.value)
    }
  }

  return (
    <input
      className={classnames({
        edit: editing,
        'new-todo': newTodo
      })}
      type='text'
      placeholder={placeholder}
      autoFocus
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  )
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  todoText: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}
