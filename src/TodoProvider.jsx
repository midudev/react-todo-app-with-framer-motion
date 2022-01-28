import { useReducer } from 'react'
import { TodoContext } from './TodoContext'

export const TodoProvider = ({ reducer, initialState, children }) => (
  <TodoContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoContext.Provider>
)
