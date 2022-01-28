import React from 'react'
import { TodoTextInput } from './TodoTextInput'
import { useTodo } from '../useTodo'

const Header = () => {
  const [, dispatch] = useTodo()

  return (
    <header className='header'>
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            dispatch({
              type: 'ADD_TODO',
              payload: { text }
            })
          }
        }}
        placeholder='What needs to be done?'
      />
    </header>
  )
}

export default Header
